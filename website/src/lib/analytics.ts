// Helpers de tracking de conversiones (lado del navegador).
// GA4 se manda de forma CONFIABLE desde el servidor (Measurement Protocol);
// acá disparamos Meta Pixel y dejamos el dataLayer por si GTM lo usa.
//
// EMBUDO REAL DE VAKDOR.COM (8 pasos). Cada paso se registra en GA4 y en Meta:
//   1. page_view en "/"        -> automático (gtag / GTM)
//   2. view_demostracion       -> entra a /demostracion
//   3. vsl_watch_100           -> termina el video completo
//   4. click_agendar_cta       -> aprieta el botón para agendar
//   5. view_prefilter_form     -> llega al formulario (/call)
//   6. prefilter_submit        -> envía el formulario
//   7. view_calendar           -> se le desbloquea el calendario (solo calificados)
//   8. schedule_call           -> confirma la reserva
// Métrica aparte: prefilter_no_calificado (llenó el form y el pre-filtro le negó el calendario).

const MEASUREMENT_ID = 'G-BMYP2N4LWM';

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

/**
 * Lee el session_id de GA4 desde la cookie _ga_<ID>.
 * Sin esto, el evento server-side llega huérfano: GA4 lo cuenta con 0 sesiones
 * y con la página en "(not set)". Soporta los dos formatos de cookie (GS1 y GS2).
 */
export function getGaSessionId(): string | undefined {
    if (typeof document === 'undefined') return undefined;
    const m = document.cookie.match(new RegExp(`_ga_${MEASUREMENT_ID.replace('G-', '')}=GS\\d\\.\\d\\.s?(\\d+)`));
    return m ? m[1] : undefined;
}

/** Genera un id único de evento para deduplicación entre Meta Pixel y Meta CAPI. */
export function newEventId(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}.${Math.random().toString(36).slice(2)}`;
}

/** Contexto de página/sesión que viaja al servidor para que GA4 atribuya bien el evento. */
export function getTrackContext() {
    if (typeof window === 'undefined') return {};
    return {
        clientId: getGaClientId(),
        sessionId: getGaSessionId(),
        pageLocation: window.location.href,
        pageTitle: document.title,
    };
}

/** Envío server-side (GA4 Measurement Protocol + Meta CAPI) a través de /api/track. */
function sendTrack(event: string, eventId?: string, params?: Record<string, unknown>) {
    if (typeof window === 'undefined') return;
    fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, eventId, params, ...getTrackContext() }),
        keepalive: true,
    }).catch(() => {});
}

/** Paso 2: Visita a la página de Demostración VSL (/demostracion) */
export function trackViewDemostracion() {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'view_demostracion', event_id: eventId });
    window.fbq?.('trackCustom', 'ViewDemostracion', { content_name: 'demostracion_vsl' }, { eventID: eventId });
    window.fbq?.('track', 'ViewContent', { content_name: 'demostracion_vsl' }, { eventID: eventId });
    sendTrack('view_demostracion', eventId, { content_name: 'demostracion_vsl' });
}

/** Paso 3: Vsl Video 100% completado */
export function trackVslWatch100() {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'vsl_watch_100', event_id: eventId });
    window.fbq?.('trackCustom', 'WatchVSL100Percent', { content_name: 'vsl_completed_100' }, { eventID: eventId });
    window.fbq?.('track', 'CompleteRegistration', { content_name: 'vsl_completed_100' }, { eventID: eventId });
    sendTrack('vsl_watch_100', eventId, { content_name: 'vsl_completed_100' });
}

/** Paso 4: Clic en Botón "Agendar Demostración" que lleva a /call */
export function trackClickAgendarCTA(source: string = 'vsl_page') {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'click_agendar_cta', cta_source: source, event_id: eventId });
    window.fbq?.('trackCustom', 'ClickAgendarCTA', { cta_source: source }, { eventID: eventId });
    window.fbq?.('track', 'InitiateCheckout', { content_name: source }, { eventID: eventId });
    sendTrack('click_agendar_cta', eventId, { cta_source: source });
}

/** Paso 5: Llegó al formulario de pre-filtro (se renderizó en pantalla). */
export function trackViewPrefilterForm(source: string = 'call_page') {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'view_prefilter_form', form_source: source, event_id: eventId });
    window.fbq?.('trackCustom', 'ViewPrefilterForm', { content_name: source }, { eventID: eventId });
    sendTrack('view_prefilter_form', eventId, { form_source: source });
}

/**
 * Paso 6: Formulario Pre-Filtro enviado.
 * El evento GA4 `prefilter_submit` y el `Lead` de Meta CAPI los emite /api/prefilter
 * (ahí está el email para el match de Meta). Acá solo va el Pixel del navegador,
 * con el mismo eventId para que Meta deduplique y no cuente doble.
 */
export function trackLead(source: string, eventId?: string) {
    if (typeof window === 'undefined') return;
    (window.dataLayer = window.dataLayer || []).push({ event: 'prefilter_submit', lead_source: source, event_id: eventId });
    (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_source: source });
    window.fbq?.('track', 'Lead', { content_name: source }, eventId ? { eventID: eventId } : undefined);
}

/**
 * Métrica aparte: llenó el formulario y el pre-filtro NO le abrió el calendario.
 * Es evento propio (no un parámetro de `prefilter_submit`) para poder contarlo en GA4
 * sin registrar dimensiones personalizadas. No es una fuga a corregir con copy:
 * es filtrado a propósito, y saber cuánta gente cae acá dice si el filtro está bien puesto.
 */
export function trackPrefilterNoCalificado(source: string = 'prefilter_prisma') {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'prefilter_no_calificado', lead_source: source, event_id: eventId });
    sendTrack('prefilter_no_calificado', eventId, { lead_source: source });
}

/** Paso 7: Se le desbloqueó el calendario (solo leads calificados). */
export function trackViewCalendar() {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'view_calendar', event_id: eventId });
    window.fbq?.('trackCustom', 'ViewCalendar', { content_name: 'calendario_prisma' }, { eventID: eventId });
    sendTrack('view_calendar', eventId, { content_name: 'calendario_prisma' });
}

/** Paso 8: Reserva completada en el Calendario */
export function trackSchedule() {
    if (typeof window === 'undefined') return;
    const eventId = newEventId();
    (window.dataLayer = window.dataLayer || []).push({ event: 'schedule_call', event_id: eventId });
    window.fbq?.('track', 'Schedule', { content_name: 'reunion_prisma' }, { eventID: eventId });
    sendTrack('schedule_call', eventId, { content_name: 'reunion_prisma' });
}
