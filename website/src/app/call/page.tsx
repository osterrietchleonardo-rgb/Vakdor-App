import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticleField } from "@/components/effects/ParticleField";
import { PreFilterForm } from "@/components/booking/PreFilterForm";
import { CheckCircle2, Zap, Shield, TrendingUp, Sparkles } from "lucide-react";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata = {
    title: "Sesión de Evaluación Ejecutiva | Vakdor PRISMA",
    description: "Agendá una sesión ejecutiva de 30 minutos para evaluar si tu inmobiliaria reúne las condiciones para implementar PRISMA y eliminar la dependencia operativa.",
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
                <div className="max-w-5xl mx-auto space-y-12">

                    {/* 1. Encabezado Centrado de Alta Autoridad */}
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333] text-sm font-semibold tracking-wide uppercase shadow-lg">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B87333] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87333]"></span>
                            </span>
                            Sesión de Evaluación Ejecutiva · 30 Minutos
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
                            Evaluación de Viabilidad: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87333] via-[#D4AF37] to-[#B87333] animate-gradient-x">
                                ¿Tu Inmobiliaria está Lista para PRISMA?
                            </span>
                        </h1>

                        <p className="font-accent text-[#B87333] text-base md:text-lg italic bg-[#5C3D2E]/20 border border-[#B87333]/20 rounded-xl py-2 px-6 inline-block">
                            "El voluntarismo no escala. Lo que no se mide, no se controla ni se rentabiliza."
                        </p>

                        <p className="text-base md:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
                            En esta sesión de 30 minutos evaluamos juntos la arquitectura de tu empresa para ver <strong className="text-white font-semibold">si realmente podemos ayudarte</strong> y si tu inmobiliaria reúne las condiciones para implementar PRISMA: el Sistema Operativo con IA que conecta tu CRM <span className="text-white font-medium">(Tokko Broker, CRM propio o cualquier plataforma del sector)</span> con tu <span className="text-white font-medium">WhatsApp</span>.
                        </p>
                    </div>

                    {/* 2. Pre-Filtro Ejecutivo e Integración del Calendario */}
                    <PreFilterForm />

                    {/* 4. Grilla de Pilares de Valor e Impacto (Debajo del Calendario) */}
                    <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                        <div className="kinetic-card p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                            <div className="p-3 w-fit rounded-xl bg-[#B87333]/10 text-[#B87333] border border-[#B87333]/20">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg">Speed-to-Lead (2 min)</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Conectamos el punto ciego entre tu CRM y WhatsApp. Cada oportunidad atendida, pre-calificada y registrada de inmediato. Cero fugas.
                            </p>
                        </div>

                        <div className="kinetic-card p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                            <div className="p-3 w-fit rounded-xl bg-[#B87333]/10 text-[#B87333] border border-[#B87333]/20">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg">Tracking Directivo</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Se acabó la incertidumbre. Un tablero directivo en tiempo real con datos matemáticos para medir la productividad real de tus asesores.
                            </p>
                        </div>

                        <div className="kinetic-card p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                            <div className="p-3 w-fit rounded-xl bg-[#B87333]/10 text-[#B87333] border border-[#B87333]/20">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg">Setup Llave en Mano (72hs)</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Sin que vos ni tu equipo configuren nada ni toquen código. Adaptamos la IA a tu metodología desde la primera semana.
                            </p>
                        </div>
                    </div>

                    {/* Prueba Social */}
                    <div className="pt-4 text-center space-y-2">
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#020617] bg-slate-700 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-medium text-white">
                                Ya operan con PRISMA, incluida una inmobiliaria de lujo referente de Leading Real Estate Companies of the World (60 asesores).
                            </div>
                        </div>
                        <p className="text-xs text-slate-500">
                            * Cupos limitados por mes para garantizar implementaciones Llave en Mano de máxima calidad.
                        </p>
                    </div>

                </div>
            </main>

            {/* Newsletter Section */}
            <NewsletterSection source="call" />

            <Footer hideCTA />
        </div>
    );
}
