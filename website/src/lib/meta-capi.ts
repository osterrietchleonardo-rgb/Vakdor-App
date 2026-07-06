// Envío de eventos a Meta por la Conversions API (CAPI), desde el servidor.
// Corre EN PARALELO al Meta Pixel del navegador; Meta une ambos por event_id (dedupe),
// así que no cuenta doble. Recupera el ~30-40% de eventos que el navegador pierde.
// El PIXEL_ID no es secreto (viaja igual al cliente); el token SÍ, va por env.

import crypto from 'crypto';

const PIXEL_ID = '1251885583217784';
const API_VERSION = 'v21.0';

// Meta pide los datos personales hasheados en SHA-256 (minúsculas y sin espacios).
const sha256 = (v: string) => crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex');

interface CapiInput {
    eventName: 'Lead' | 'Schedule';
    eventId?: string; // compartido con el pixel del navegador (para el dedupe)
    eventSourceUrl?: string; // URL donde ocurrió el evento
    email?: string; // se hashea antes de enviar (NUNCA se manda en claro)
    clientIp?: string;
    userAgent?: string;
    fbp?: string; // cookie _fbp del pixel
    fbc?: string; // cookie _fbc del pixel (click id)
    customData?: Record<string, unknown>;
}

export async function sendMetaCapiEvent(input: CapiInput) {
    const token = process.env.API_CONVERSIONES_TOKEN;
    if (!token) return; // sin token configurado, se omite (no rompe el flujo)

    const userData: Record<string, unknown> = {};
    if (input.email) userData.em = [sha256(input.email)];
    if (input.clientIp) userData.client_ip_address = input.clientIp;
    if (input.userAgent) userData.client_user_agent = input.userAgent;
    if (input.fbp) userData.fbp = input.fbp;
    if (input.fbc) userData.fbc = input.fbc;

    const event: Record<string, unknown> = {
        event_name: input.eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        user_data: userData,
    };
    if (input.eventId) event.event_id = input.eventId;
    if (input.eventSourceUrl) event.event_source_url = input.eventSourceUrl;
    if (input.customData) event.custom_data = input.customData;

    try {
        const res = await fetch(
            `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${token}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: [event] }),
            },
        );
        if (!res.ok) {
            console.error('[meta-capi] error:', res.status, await res.text());
        }
    } catch (e) {
        console.error('[meta-capi] fetch failed:', e);
    }
}

// Extrae IP, user-agent y cookies _fbp/_fbc del request entrante (mejoran el match de Meta).
export function metaMatchFromRequest(req: Request) {
    const h = req.headers;
    const clientIp = (h.get('x-forwarded-for') || '').split(',')[0].trim() || undefined;
    const userAgent = h.get('user-agent') || undefined;
    const cookie = h.get('cookie') || '';
    const pick = (name: string) => {
        const m = cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
        return m ? decodeURIComponent(m[1]) : undefined;
    };
    return {
        clientIp,
        userAgent,
        fbp: pick('_fbp'),
        fbc: pick('_fbc'),
        eventSourceUrl: h.get('referer') || undefined,
    };
}
