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

/** Genera un id único de evento para deduplicación entre Meta Pixel y Meta CAPI. */
export function newEventId(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}.${Math.random().toString(36).slice(2)}`;
}

/** Paso 2: Visita a la página de Demostración VSL (/demostracion) */
export function trackViewDemostracion() {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'view_demostracion' });
    window.fbq?.('trackCustom', 'ViewDemostracion', { content_name: 'demostracion_vsl' });
    window.fbq?.('track', 'ViewContent', { content_name: 'demostracion_vsl' });
}

/** Paso 3: Vsl Video 100% completado */
export function trackVslWatch100() {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'vsl_watch_100', event_id: eventId });
    window.fbq?.('trackCustom', 'WatchVSL100Percent', { content_name: 'vsl_completed_100' }, { eventID: eventId });
    window.fbq?.('track', 'CompleteRegistration', { content_name: 'vsl_completed_100' }, { eventID: eventId });
    
    // Server-side CAPI & GA4
    fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'vsl_watch_100', clientId: getGaClientId(), eventId }),
        keepalive: true,
    }).catch(() => {});
}

/** Paso 4: Clic en Botón "Agendar Demostración" que lleva a /call */
export function trackClickAgendarCTA(source: string = 'vsl_page') {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'click_agendar_cta', cta_source: source });
    window.fbq?.('trackCustom', 'ClickAgendarCTA', { cta_source: source }, { eventID: eventId });
    window.fbq?.('track', 'InitiateCheckout', { content_name: source }, { eventID: eventId });

    fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'click_agendar_cta', clientId: getGaClientId(), eventId, params: { cta_source: source } }),
        keepalive: true,
    }).catch(() => {});
}

/** Paso 5: Formulario Pre-Filtro completado */
export function trackLead(source: string, eventId?: string) {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_source: source });
    window.fbq?.('track', 'Lead', { content_name: source }, eventId ? { eventID: eventId } : undefined);
}

/** Paso 6: Reserva completada en el Calendario */
export function trackSchedule() {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'schedule_call' });
    window.fbq?.('track', 'Schedule', { content_name: 'reunion_prisma' }, { eventID: eventId });
    fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'schedule_call', clientId: getGaClientId(), eventId }),
        keepalive: true,
    }).catch(() => {});
}
