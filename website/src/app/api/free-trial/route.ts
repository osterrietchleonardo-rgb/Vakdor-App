import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Validación de email en el servidor (además de la del navegador).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    let body: { email?: string; source?: string };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
    }

    const email = String(body?.email ?? '').toLowerCase().trim();
    const source = String(body?.source ?? 'website').slice(0, 60);

    if (!EMAIL_RE.test(email) || email.length > 254) {
        return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });
    }

    // 1) Guardar el lead en Supabase (tabla newsletter_subscribers).
    let duplicate = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any)
        .from('newsletter_subscribers')
        .insert([{ email, source }]);

    if (error) {
        if (error.code === '23505') {
            duplicate = true; // email ya registrado (constraint único)
        } else {
            console.error('[free-trial] supabase insert error:', error);
            return NextResponse.json({ ok: false, error: 'db_error' }, { status: 500 });
        }
    }

    // 2) Avisar por email a Leonardo vía Resend (solo si hay API key y es un registro nuevo).
    //    Si falta RESEND_API_KEY, el lead igual quedó guardado: el aviso simplemente se omite.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && !duplicate) {
        const to = process.env.LEAD_NOTIFY_TO || 'osterrietchleonardo@vakdor.com';
        const from = process.env.RESEND_FROM || 'PRISMA <onboarding@resend.dev>';
        const fecha = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
        try {
            const res = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${resendKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from,
                    to: [to],
                    reply_to: email,
                    subject: `Nuevo "mes gratis" PRISMA: ${email}`,
                    html: `
                        <div style="font-family:Arial,Helvetica,sans-serif;color:#0F172A;max-width:520px">
                          <h2 style="color:#B87333;margin:0 0 16px">Nuevo registro de "Quiero mi mes gratis"</h2>
                          <p style="margin:0 0 4px;color:#64748B;font-size:13px">Email registrado:</p>
                          <p style="margin:0 0 18px;font-size:22px;font-weight:bold">
                            <a href="mailto:${email}" style="color:#0F172A;text-decoration:none">${email}</a>
                          </p>
                          <p style="margin:4px 0;font-size:14px"><strong>Origen:</strong> ${source}</p>
                          <p style="margin:4px 0;font-size:14px"><strong>Fecha:</strong> ${fecha}</p>
                          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
                          <p style="color:#64748B;font-size:12px;margin:0">Respondé este mail para escribirle directo al lead. Aviso automático desde vakdor.com</p>
                        </div>`,
                }),
            });
            if (!res.ok) {
                console.error('[free-trial] resend error:', res.status, await res.text());
            }
        } catch (e) {
            console.error('[free-trial] resend fetch failed:', e);
        }
    }

    return NextResponse.json({ ok: true, duplicate });
}
