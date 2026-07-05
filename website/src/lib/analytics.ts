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

/** Lead capturado: alguien completó el form "Quiero mi mes gratis".
 *  GA4 lo registra /api/free-trial (server-side); acá disparamos Meta. */
export function trackLead(source: string) {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_source: source });
    window.fbq?.('track', 'Lead', { content_name: source });
}

/** Reserva concretada en Cal.com: Meta directo + GA4 confiable vía /api/track. */
export function trackSchedule() {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'schedule_call' });
    window.fbq?.('track', 'Schedule');
    fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'schedule_call', clientId: getGaClientId() }),
        keepalive: true,
    }).catch(() => { });
}
