import { NextResponse } from 'next/server';
import { sendGa4Event } from '@/lib/ga-server';
import { sendMetaCapiEvent, metaMatchFromRequest } from '@/lib/meta-capi';

// Traduce el evento interno del embudo al nombre que entiende Meta para CAPI server-side.
// Los que no son eventos estándar de Meta viajan como evento personalizado.
const META_EVENT: Record<string, string> = {
    view_demostracion: 'ViewContent',
    vsl_watch_100: 'CompleteRegistration',
    click_agendar_cta: 'InitiateCheckout',
    view_prefilter_form: 'ViewPrefilterForm',
    prefilter_no_calificado: 'PrefilterNoCalificado',
    view_calendar: 'ViewCalendar',
    schedule_call: 'Schedule',
};

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Solo eventos conocidos del embudo.
// `prefilter_submit` NO va acá: lo emite /api/prefilter, que además tiene el email
// para el match de Meta (si se aceptara acá se contaría el Lead dos veces).
const ALLOWED = new Set(Object.keys(META_EVENT));

export async function POST(req: Request) {
    let body: {
        event?: string;
        clientId?: string;
        sessionId?: string;
        pageLocation?: string;
        pageTitle?: string;
        eventId?: string;
        params?: Record<string, unknown>;
    };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
    }

    const event = String(body?.event ?? '');
    if (!ALLOWED.has(event)) {
        return NextResponse.json({ ok: false, error: 'event_not_allowed' }, { status: 422 });
    }

    const str = (v: unknown) => (typeof v === 'string' && v ? v : undefined);
    const clientId = str(body?.clientId);
    const sessionId = str(body?.sessionId);
    const pageLocation = str(body?.pageLocation);
    const pageTitle = str(body?.pageTitle);
    const eventId = str(body?.eventId);
    const params = body?.params ?? {};

    const match = metaMatchFromRequest(req);

    await Promise.all([
        sendGa4Event(clientId, event, params, { sessionId, pageLocation, pageTitle }),
        sendMetaCapiEvent({
            eventName: META_EVENT[event],
            eventId,
            customData: params,
            ...match,
            // La URL real de la página gana sobre el referer del request.
            eventSourceUrl: pageLocation ?? match.eventSourceUrl,
        }),
    ]);

    return NextResponse.json({ ok: true });
}
