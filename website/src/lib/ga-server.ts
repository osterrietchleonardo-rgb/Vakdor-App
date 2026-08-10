// Envío de eventos a GA4 por Measurement Protocol (desde el servidor).
// Es la vía confiable: no depende de gtag ni de GTM en el navegador.
// El ID de medición no es secreto (viaja igual al cliente); el api_secret sí, va por env.
//
// IMPORTANTE: sin `session_id` GA4 NO une el evento a la sesión del navegador
// (queda con sesiones=0) y sin `page_location` la ruta figura como "(not set)".
// Por eso los helpers del cliente mandan siempre cid + sid + URL.

const MEASUREMENT_ID = 'G-BMYP2N4LWM';

export interface Ga4Context {
    sessionId?: string;
    pageLocation?: string;
    pageTitle?: string;
}

/** Envía varios eventos en una sola llamada (el Measurement Protocol admite hasta 25). */
export async function sendGa4Events(
    clientId: string | undefined,
    events: { name: string; params?: Record<string, unknown> }[],
    ctx: Ga4Context = {},
) {
    const apiSecret = process.env.GA4_API_SECRET;
    if (!apiSecret) return; // sin secreto configurado, se omite (no rompe el flujo)
    if (!events.length) return;

    // client_id valido de GA (formato "123.456"); si no vino uno, generamos uno.
    const cid =
        clientId && /^\d+\.\d+$/.test(clientId)
            ? clientId
            : `${Date.now()}.${Math.floor(Math.random() * 1_000_000_000)}`;

    // Parámetros que GA4 necesita para pegar el evento a la sesión y a la página reales.
    const common: Record<string, unknown> = {};
    if (ctx.sessionId && /^\d+$/.test(ctx.sessionId)) common.session_id = ctx.sessionId;
    if (ctx.pageLocation) common.page_location = ctx.pageLocation;
    if (ctx.pageTitle) common.page_title = ctx.pageTitle;
    // Sin esto GA4 no cuenta el evento como sesión con interacción.
    common.engagement_time_msec = 1;

    try {
        await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${apiSecret}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    client_id: cid,
                    events: events.map((e) => ({
                        name: e.name,
                        params: { ...common, ...(e.params ?? {}) },
                    })),
                }),
            },
        );
    } catch (e) {
        console.error('[ga4] measurement protocol error:', e);
    }
}

export async function sendGa4Event(
    clientId: string | undefined,
    eventName: string,
    params: Record<string, unknown> = {},
    ctx: Ga4Context = {},
) {
    return sendGa4Events(clientId, [{ name: eventName, params }], ctx);
}
