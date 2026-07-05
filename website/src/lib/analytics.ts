// Helpers de tracking de conversiones.
// Mandan el evento a GA4 (gtag directo + dataLayer/GTM de respaldo) y a Meta Pixel (fbq), todo junto.

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
    }
}

/** Lead capturado: alguien completó el form "Quiero mi mes gratis". */
export function trackLead(source: string) {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_source: source });
    window.gtag?.('event', 'generate_lead', { lead_source: source });
    window.fbq?.('track', 'Lead', { content_name: source });
}

/** Reserva concretada: alguien agendó la llamada/diagnóstico en Cal.com. */
export function trackSchedule() {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'schedule_call' });
    window.gtag?.('event', 'schedule_call');
    window.fbq?.('track', 'Schedule');
}
