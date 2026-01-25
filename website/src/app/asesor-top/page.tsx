'use client';

import { ParticleField } from "@/components/effects/ParticleField";
import { FAQSection } from "@/components/FAQSection"; // Reuse FAQ component
import { Check, ArrowRight, Clock, DollarSign, Brain } from "lucide-react";

export default function AsesorTopPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
             <ParticleField />
            
            {/* --- HERO SECTION --- */}
            <div className="container mx-auto px-4 max-w-[1240px] relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-block px-3 py-1 bg-[rgba(184,115,51,0.1)] border border-[rgba(184,115,51,0.2)] rounded-full text-[var(--liquid-copper)] text-sm font-bold tracking-wider mb-4 animate-fade-in uppercase">
                        Para Asesores de Alto Rendimiento
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up">
                        Duplicá tu Facturación <br />
                        <span className="text-gradient-copper">No Tus Horas de Trabajo</span>
                    </h1>
                    <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                        Ya sos bueno vendiendo. El problema es que pasás el 70% de tu tiempo haciendo de asistente administrativo. 
                        Nuestra IA se encarga del *trabajo sucio* (prospectar, calificar, seguir) para que vos solo hagas el *trabajo de oro* (cerrar).
                    </p>
                </div>

                {/* --- PAIN POINTS --- */}
                <div className="grid md:grid-cols-3 gap-8 mb-32 animate-fade-in-up [animation-delay:400ms]">
                    <div className="bg-[#0F172A]/50 border border-slate-800 p-8 rounded-2xl">
                        <Clock className="text-red-500 mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Esclavitud de Agenda</h3>
                        <p className="text-silver text-sm">Contestando mensajes a las 10 PM. Fines de semana pegado al celular. Tu éxito actual te está costando tu vida.</p>
                    </div>
                     <div className="bg-[#0F172A]/50 border border-slate-800 p-8 rounded-2xl">
                        <DollarSign className="text-red-500 mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Montaña Rusa de Ingresos</h3>
                        <p className="text-silver text-sm">Meses récord seguidos de meses secos, porque cuando estás cerrando ventas, dejas de prospectar. El ciclo nunca termina.</p>
                    </div>
                     <div className="bg-[#0F172A]/50 border border-slate-800 p-8 rounded-2xl">
                        <Brain className="text-red-500 mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Burnout Operativo</h3>
                        <p className="text-silver text-sm">Te convertiste en un administrador de CRM caro, en lugar de un cerrador de elite.</p>
                    </div>
                </div>

                {/* --- VALUE PROPOSITION --- */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 md:order-1 relative">
                        {/* Placeholder for illustration/graphic */}
                        <div className="aspect-square rounded-full bg-gradient-to-tr from-[var(--liquid-copper)]/20 to-transparent border border-[var(--liquid-copper)]/30 flex items-center justify-center p-12">
                             <div className="text-center space-y-4">
                                <div className="text-6xl font-display font-bold text-white">24/7</div>
                                <div className="text-silver uppercase tracking-widest text-sm">Tu Gemelo Digital Trabajando</div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="order-1 md:order-2 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Tu "Gemelo Digital" de Ventas
                        </h2>
                        <p className="text-lg text-silver">
                            Imaginá clonarte a vos mismo en tu mejor día. Una versión tuya que:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Responde leads en 10 segundos, 24 horas al día.",
                                "Nunca se olvida de hacer seguimiento (ni después de 6 meses).",
                                "Califica implacablemente para que solo hables con gente lista para comprar.",
                                "Agenda citas directamente en tu calendario."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-silver">
                                    <div className="mt-1 bg-[var(--liquid-copper)]/20 p-1 rounded-full text-[var(--liquid-copper)] h-fit">
                                        <Check size={14} />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- FAQ SECTION --- */}
                <div className="mt-24">
                   <FAQSection 
                        title="Preguntas de Asesores Independientes"
                        questions={[
                            {
                                question: "¿Necesito saber de tecnología para usar esto?",
                                answer: "Cero. Si sabes usar WhatsApp, sabes usar Vakdor. Nosotros construimos toda la infraestructura 'llave en mano'. Vos solo te despertás con citas agendadas en tu calendario."
                            },
                            {
                                question: "¿Cómo mantengo el trato personal con mis clientes?",
                                answer: "El cliente de lujo valora la eficiencia. Nuestra IA se encarga de la inmediatez y la calificación inicial (lo 'robótico'), para que cuando vos entres en la conversación, puedas dedicarte 100% a la relación y el asesoramiento experto, sin prisas."
                            },
                            {
                                question: "¿Sirve si no tengo una inmobiliaria grande y trabajo solo?",
                                answer: "Es *ideal* para vos. Al no tener equipo de soporte, tu tiempo es tu activo más escaso. Vakdor es como contratar a 3 asistentes de ventas full-time por una fracción del costo, permitiéndote facturar como una agencia pequeña siendo una sola persona."
                            },
                            {
                                question: "¿Qué pasa con mis datos? ¿Están seguros?",
                                answer: "Absolutamente. A diferencia de las plataformas 'gratis', nosotros no vendemos tus datos. Tu base de clientes es tu activo más preciado y firmamos contratos de confidencialidad estricta. Todo corre en servidores encriptados."
                            }
                        ]}
                   />
                </div>

                {/* --- CTA FINAL --- */}
                <div className="mt-24 text-center pb-20 border-t border-[rgba(184,115,51,0.1)] pt-20">
                    <h2 className="text-4xl font-display font-bold text-white mb-8">
                        Dejá de ser un Autoempleado <br/> Convertite en Empresario
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-xl text-silver max-w-2xl">
                            No es una demo genérica. Es una llamada de 15 minutos donde diseñamos tu Sistema de Venta Autónoma y vemos cómo se integra con tu CRM actual.
                        </p>
                        <a
                            href="https://www.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-copper inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all active:scale-95"
                        >
                            Agendar Diseño de Sistema <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </main>
    )
}
