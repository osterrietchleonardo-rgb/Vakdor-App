import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticleField } from "@/components/effects/ParticleField";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";

export const metadata = {
    title: "Agendar Llamada | Vakdor - Sovereign Intelligence",
    description: "Agenda tu auditoría estratégica gratuita. Descubre cómo la IA puede escalar tu negocio inmobiliario.",
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
                                Auditoría Estratégica Gratuita
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                                Dejá de Perder Leads. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87333] via-[#D4AF37] to-[#B87333] animate-gradient-x">Empezá a Escalar.</span>
                            </h1>

                            {/* Ogilvy: Big Idea Quote */}
                            <p className="font-accent text-[#B87333] text-base italic">
                                "El tiempo que perdés respondiendo consultas es tiempo que no estás cerrando ventas."
                            </p>

                            <p className="text-lg text-slate-400 leading-relaxed">
                                En 30 minutos analizamos tu operación, identificamos cuánto dinero estás dejando sobre la mesa y te mostramos el sistema exacto que necesitás para recuperarlo. Ya seas asesor top o dirijas una inmobiliaria.
                            </p>

                            <div className="space-y-6 pt-6">
                                <div className="flex gap-4 items-start group">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 text-[#B87333] group-hover:border-[#B87333]/50 transition-colors shadow-lg">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#B87333] transition-colors">Para Asesores: AureFlow</h3>
                                        <p className="text-slate-400 text-sm">Tu asistente de WhatsApp que responde, califica y agenda 24/7. Vos solo te presentás a cerrar.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 text-[#B87333] group-hover:border-[#B87333]/50 transition-colors shadow-lg">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#B87333] transition-colors">Para Inmobiliarias: Partner Tecnológico</h3>
                                        <p className="text-slate-400 text-sm">Captación automática, recuperación de leads, tracking de equipo y tutor IA para tus nuevos asesores.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700 text-[#B87333] group-hover:border-[#B87333]/50 transition-colors shadow-lg">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#B87333] transition-colors">Sin Riesgo: 90 Días de Garantía</h3>
                                        <p className="text-slate-400 text-sm">Si no lográs el ROI proyectado, te devolvemos tu inversión. Así de seguros estamos.</p>
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
                                        +50 Profesionales confían en Vakdor
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500">
                                    * Espacios limitados por mes para garantizar la calidad del servicio.
                                </p>
                                {/* Caples: Specific Data */}
                                <p className="text-xs text-[#B87333] mt-2 font-medium">
                                    📊 El 82% de nuestros clientes recuperan la inversión en los primeros 60 días.
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

            <Footer hideCTA />
        </div>
    );
}
