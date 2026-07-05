import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticleField } from "@/components/effects/ParticleField";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata = {
    title: "Agendar Diagnóstico Operativo | Vakdor PRISMA",
    description: "Agendá tu Diagnóstico Operativo gratuito y vé PRISMA en vivo. Descubrí cómo darle trazabilidad matemática a tu inmobiliaria conectando Tokko Broker con WhatsApp.",
    alternates: { canonical: '/call' },
};

export default function CallPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#B87333]/30">
            <ParticleField />

            {/* Header con z-index alto para estar sobre las partículas */}
            <div className="relative z-50">
                <Header hideCTA />
            </div>

            <main className="relative z-40 pt-32 pb-20 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Columna Izquierda: Copy y Valor */}
                        <div className="space-y-8 lg:sticky lg:top-32">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333] text-sm font-semibold tracking-wide uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B87333] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87333]"></span>
                                </span>
                                Diagnóstico Operativo Gratuito
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                                Dejá de Liderar a Ciegas. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87333] via-[#D4AF37] to-[#B87333] animate-gradient-x">Asumí el Control Integral.</span>
                            </h1>

                            {/* Ogilvy: Big Idea Quote */}
                            <p className="font-accent text-[#B87333] text-base italic">
                                "El voluntarismo no escala. Lo que no se mide, no se controla."
                            </p>

                            <p className="text-lg text-slate-400 leading-relaxed">
                                En 30 minutos auditamos tu operación, detectamos dónde se fugan tus leads y tu rentabilidad, y te mostramos PRISMA en vivo: el Sistema Operativo que conecta tu CRM (Tokko Broker) con WhatsApp para darle trazabilidad matemática a tu agencia.
                            </p>

                            <div className="space-y-6 pt-6">
                                <div className="flex gap-4 items-start group">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 text-[#B87333] group-hover:border-[#B87333]/50 transition-colors shadow-lg">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#B87333] transition-colors">Trazabilidad de Leads (Speed-to-Lead)</h3>
                                        <p className="text-slate-400 text-sm">Conectamos el punto ciego entre Tokko y WhatsApp. Cada oportunidad atendida, pre-calificada y registrada en menos de 2 minutos. Cero fugas.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 text-[#B87333] group-hover:border-[#B87333]/50 transition-colors shadow-lg">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#B87333] transition-colors">Control y Performance de Asesores</h3>
                                        <p className="text-slate-400 text-sm">Se acabó el liderazgo a ciegas. Un tablero en tiempo real con datos matemáticos para saber quién convierte y quién quema los leads.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 text-[#B87333] group-hover:border-[#B87333]/50 transition-colors shadow-lg">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#B87333] transition-colors">Implementación Llave en Mano en 72hs</h3>
                                        <p className="text-slate-400 text-sm">Sin que vos ni tu equipo configuren nada ni toquen una línea de código. Recuperás el control desde la primera semana.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-700 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                                                {/* Placeholder avatars if needed, or simple gradients */}
                                                <div className={`w-full h-full bg-gradient-to-br from-slate-600 to-slate-800`} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                        Ya operan con PRISMA, incluida una inmobiliaria de lujo referente de Leading Real Estate Companies of the World (60 asesores).
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500">
                                    * Cupos limitados por mes para garantizar implementaciones Llave en Mano de calidad.
                                </p>
                                {/* Prueba concreta: antes vs después */}
                                <p className="text-xs text-[#B87333] mt-3 font-medium">
                                    ACM: 2 hs → 5 seg · Contrato: 30 min → 5 min · Seguimiento automático 24/7 · Tracking en tiempo real.
                                </p>
                            </div>
                        </div>

                        {/* Columna Derecha: Calendario */}
                        <div className="w-full h-full">
                            <BookingCalendar />
                        </div>
                    </div>
                </div>
            </main>

            {/* Newsletter Section */}
            <NewsletterSection source="call" />

            <Footer hideCTA />
        </div>
    );
}
