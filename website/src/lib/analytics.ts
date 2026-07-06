// Helpers de tracking de conversiones (lado del navegador).
// GA4 se manda de forma CONFIABLE desde el servidor (Measurement Protocol);
// acá disparamos Meta Pixel y dejamos el dataLayer por si GTM lo usa.

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        fbq?: (...args: unknown[]) => void;
    }
}

/** Lee el client_id de GA4 desde la cookie _ga, para atribuir bien el evento server-side. */
export function getGaClientId(): string | undefined {
    if (typeof document === 'undefined') return undefined;
    const m = document.cookie.match(/_ga=GA\d\.\d\.(\d+\.\d+)/);
    return m ? m[1] : undefined;
}

/** Genera un id único de evento. El navegador (Pixel) y el servidor (CAPI) mandan el
 *  MISMO id para el mismo evento, así Meta los une (dedupe) y no cuenta doble. */
export function newEventId(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}.${Math.random().toString(36).slice(2)}`;
}

/** Lead capturado: alguien completó el form "Quiero mi mes gratis".
 *  GA4 + Meta CAPI los registra /api/free-trial (server-side); acá disparamos el Pixel
 *  del navegador con el mismo eventId para que Meta lo una con el del servidor. */
export function trackLead(source: string, eventId?: string) {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_source: source });
    window.fbq?.('track', 'Lead', { content_name: source }, eventId ? { eventID: eventId } : undefined);
}

/** Reserva concretada en Cal.com: Pixel del navegador + GA4/Meta CAPI confiable vía /api/track,
 *  compartiendo el mismo eventId para el dedupe de Meta. */
export function trackSchedule() {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'schedule_call' });
    window.fbq?.('track', 'Schedule', {}, { eventID: eventId });
    fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'schedule_call', clientId: getGaClientId(), eventId }),
        keepalive: true,
    }).catch(() => { });
}
