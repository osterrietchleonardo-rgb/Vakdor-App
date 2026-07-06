import { NextResponse } from 'next/server';
import { sendGa4Event } from '@/lib/ga-server';
import { sendMetaCapiEvent, metaMatchFromRequest } from '@/lib/meta-capi';

// Traduce el evento interno al nombre estándar de Meta.
const META_EVENT: Record<string, 'Lead' | 'Schedule'> = { schedule_call: 'Schedule' };

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Solo eventos conocidos (evita que alguien inyecte eventos arbitrarios a GA4).
const ALLOWED = new Set(['schedule_call']);

export async function POST(req: Request) {
    let body: { event?: string; clientId?: string; eventId?: string; params?: Record<string, unknown> };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
    }

    const event = String(body?.event ?? '');
    if (!ALLOWED.has(event)) {
        return NextResponse.json({ ok: false, error: 'event_not_allowed' }, { status: 422 });
    }

    const clientId = typeof body?.clientId === 'string' ? body.clientId : undefined;
    const eventId = typeof body?.eventId === 'string' ? body.eventId : undefined;
    await sendGa4Event(clientId, event, body?.params ?? {});

    const metaEvent = META_EVENT[event];
    if (metaEvent) {
        await sendMetaCapiEvent({ eventName: metaEvent, eventId, ...metaMatchFromRequest(req) });
    }

    return NextResponse.json({ ok: true });
}
