// Helpers de tracking de conversiones.
// Mandan el evento a GA4 (vía dataLayer/GTM) y a Meta Pixel (vía fbq) al mismo tiempo.

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        fbq?: (...args: unknown[]) => void;
    }
}

/** Lead capturado: alguien completó el form "Quiero mi mes gratis". */
export function trackLead(source: string) {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_source: source });
    window.fbq?.('track', 'Lead', { content_name: source });
}

/** Reserva concretada: alguien agendó la llamada/diagnóstico en Cal.com. */
export function trackSchedule() {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'schedule_call' });
    window.fbq?.('track', 'Schedule');
}
