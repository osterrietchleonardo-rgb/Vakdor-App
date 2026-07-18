import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendGa4Event } from '@/lib/ga-server';
import { sendMetaCapiEvent, metaMatchFromRequest } from '@/lib/meta-capi';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, advisors, properties, crm, investmentReady, qualified, eventId } = body;

    const cleanEmail = String(email || '').toLowerCase().trim();
    if (!EMAIL_RE.test(cleanEmail)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });
    }

    // 1. Guardar en Supabase (si la tabla existe o en newsletter_subscribers con metadatos)
    try {
      await (supabase as any)
        .from('newsletter_subscribers')
        .insert([{ 
          email: cleanEmail, 
          source: `call-prefilter-${qualified ? 'qualified' : 'waitlist'}` 
        }]);
    } catch (e) {
      // Ignorar error de duplicado
    }

    // 2. Notificación por Resend a Leonardo con los datos de calificación
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const to = process.env.LEAD_NOTIFY_TO || 'osterrietchleonardo@vakdor.com';
      const from = process.env.RESEND_FROM || 'PRISMA <onboarding@resend.dev>';
      const fecha = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
      const estadoBadge = qualified 
        ? '<span style="background:#10b981;color:#fff;padding:4px 10px;border-radius:20px;font-weight:bold;">CALIFICADO ✅</span>'
        : '<span style="background:#f59e0b;color:#fff;padding:4px 10px;border-radius:20px;font-weight:bold;">EN CRECIMIENTO (PRE-FILTRO)</span>';

      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from,
            to: [to],
            reply_to: cleanEmail,
            subject: `[PRE-FILTRO ${qualified ? '✅ CALIFICADO' : 'PENDIENTE'}] Lead /call: ${name} (${cleanEmail})`,
            html: `
              <div style="font-family:Arial,sans-serif;color:#0F172A;max-width:560px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;padding:24px;">
                <h2 style="color:#B87333;margin-top:0;">Nuevo Lead Pre-Filtrado para PRISMA</h2>
                <p style="margin-bottom:16px;"><strong>Estado:</strong> ${estadoBadge}</p>
                <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
                <p style="margin:6px 0;"><strong>Nombre:</strong> ${name || 'N/A'}</p>
                <p style="margin:6px 0;"><strong>Email:</strong> ${cleanEmail}</p>
                <p style="margin:6px 0;"><strong>Teléfono / WhatsApp:</strong> ${phone || 'N/A'}</p>
                <p style="margin:6px 0;"><strong>Asesores en equipo:</strong> ${advisors || 'N/A'}</p>
                <p style="margin:6px 0;"><strong>Propiedades en cartera:</strong> ${properties || 'N/A'}</p>
                <p style="margin:6px 0;"><strong>CRM actual:</strong> ${crm || 'N/A'}</p>
                <p style="margin:6px 0;"><strong>Decisión de inversión:</strong> ${investmentReady || 'N/A'}</p>
                <p style="margin:6px 0;color:#64748B;font-size:12px;"><strong>Fecha:</strong> ${fecha}</p>
              </div>`,
          }),
        });
      } catch (e) {
        console.error('[prefilter] error enviando mail por Resend:', e);
      }
    }

    // 3. Crear / Actualizar suscriptor en MailerLite (si MAILERLITE_API_KEY está configurada)
    const mailerliteKey = process.env.MAILERLITE_API_KEY;
    if (mailerliteKey) {
      try {
        await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${mailerliteKey}`,
          },
          body: JSON.stringify({
            email: cleanEmail,
            fields: {
              name: name || '',
              phone: phone || '',
              company: `${crm || 'CRM'} (${advisors || 'Asesores'} | ${properties || 'Propiedades'})`,
            },
            status: 'active',
          }),
        });
      } catch (e) {
        console.error('[prefilter] Error al sincronizar suscriptor en MailerLite:', e);
      }
    }

    // 4. Evento Meta CAPI & GA4 si está calificado o es lead nuevo
    await sendMetaCapiEvent({
      eventName: 'Lead',
      eventId,
      email: cleanEmail,
      customData: { content_name: 'prefilter', qualified },
      ...metaMatchFromRequest(req),
    });

    return NextResponse.json({ ok: true, qualified });
  } catch (error) {
    console.error('[prefilter] Error general:', error);
    return NextResponse.json({ ok: false, error: 'internal_error' }, { status: 500 });
  }
}
