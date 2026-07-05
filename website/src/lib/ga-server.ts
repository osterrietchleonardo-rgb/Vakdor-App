// Envío de eventos a GA4 por Measurement Protocol (desde el servidor).
// Es la vía confiable: no depende de gtag ni de GTM en el navegador.
// El ID de medición no es secreto (viaja igual al cliente); el api_secret sí, va por env.

const MEASUREMENT_ID = 'G-BMYP2N4LWM';

export async function sendGa4Event(
    clientId: string | undefined,
    eventName: string,
    params: Record<string, unknown> = {},
) {
    const apiSecret = process.env.GA4_API_SECRET;
    if (!apiSecret) return; // sin secreto configurado, se omite (no rompe el flujo)

    // client_id valido de GA (formato "123.456"); si no vino uno, generamos uno.
    const cid =
        clientId && /^\d+\.\d+$/.test(clientId)
            ? clientId
            : `${Date.now()}.${Math.floor(Math.random() * 1_000_000_000)}`;

    try {
        await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${apiSecret}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    client_id: cid,
                    events: [{ name: eventName, params }],
                }),
            },
        );
    } catch (e) {
        console.error('[ga4] measurement protocol error:', e);
    }
}
