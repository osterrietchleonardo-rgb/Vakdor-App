'use client';

import { BackgroundLogo } from "@/components/effects/BackgroundLogo";
import { ParticleField } from "@/components/effects/ParticleField";
import { RoiCalculator } from "@/components/RoiCalculator"; // Assuming we'll reuse or create this
import { FAQSection } from "@/components/FAQSection"; // Assuming common FAQ component
import { Check, ArrowRight, Building2, Users2, LineChart, ShieldAlert } from "lucide-react";
import Link from 'next/link';

export default function InmobiliariaPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
             <ParticleField />
            
            {/* --- HERO SECTION --- */}
            <div className="container mx-auto px-4 max-w-[1240px] relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-block px-3 py-1 bg-[rgba(184,115,51,0.1)] border border-[rgba(184,115,51,0.2)] rounded-full text-[var(--liquid-copper)] text-sm font-bold tracking-wider mb-4 animate-fade-in uppercase">
                        Para Dueños de Inmobiliarias
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up">
                        Escalá tu Estructura <br />
                        <span className="text-gradient-copper">Sin Aumentar el Caos</span>
                    </h1>
                    <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                        Tu problema no es la falta de leads. Es la ineficiencia operativa. 
                        Implementamos la infraestructura de IA que permite a tu equipo gestionar 10x más volumen con mayor calidad.
                    </p>
                </div>

                {/* --- PROBLEM/AGITATION --- */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                     <div className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
                        <h2 className="text-3xl font-display font-bold text-white">
                            El "Techo de Cristal" de las Inmobiliarias Tradicionales
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-red-900/20 p-2 rounded-lg h-fit text-red-500">
                                    <ShieldAlert size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Dependencia de "Superestrellas"</h3>
                                    <p className="text-silver text-sm">Si tu mejor vendedor se va, se lleva su cartera y tu facturación cae un 30%.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-red-900/20 p-2 rounded-lg h-fit text-red-500">
                                    <ShieldAlert size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Leads Quemados</h3>
                                    <p className="text-silver text-sm">Marketing trae leads, pero los asesores tardan horas en responder. El dinero se quema en la espera.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-red-900/20 p-2 rounded-lg h-fit text-red-500">
                                    <ShieldAlert size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Ceguera de Datos</h3>
                                    <p className="text-silver text-sm">No sabés realmente qué pasa en las llamadas. Solo ves el resultado final (se vendió o no), sin poder optimizar el proceso.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                     
                     {/* Visual/Metaphor */}
                     <div className="relative h-[400px] bg-slate-900/50 rounded-2xl border border-slate-800 p-8 flex items-center justify-center animate-fade-in-up [animation-delay:500ms]">
                        {/* Placeholder for a dashboard or chaotic diagram vs ordered diagram */}
                        <div className="text-center space-y-4 opacity-50">
                            <Building2 size={64} className="mx-auto text-slate-600" />
                            <p className="text-slate-500 font-mono text-sm">EL MODELO TRADICIONAL <br/> ESTÁ ROTO</p>
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                     </div>
                </div>

                {/* --- SOLUTION/FEATURES --- */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-white mb-16">
                        Infraestructura de <span className="text-gradient-copper">Alto Rendimiento</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-[#0F172A] border border-[rgba(184,115,51,0.1)] p-8 rounded-2xl hover:border-[var(--liquid-copper)]/50 transition-all duration-300 group">
                            <div className="mb-6 bg-slate-900 w-fit p-3 rounded-xl group-hover:bg-[var(--liquid-copper)]/20 transition-colors">
                                <Users2 className="text-[var(--liquid-copper)]" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Centralización de Activos</h3>
                            <p className="text-silver">
                                La data es de la agencia, no del asesor. Todos los leads, conversaciones y seguimientos quedan registrados en Tu sistema central. Tu negocio se vuelve transferible y seguro.
                            </p>
                        </div>

                         {/* Feature 2 */}
                         <div className="bg-[#0F172A] border border-[rgba(184,115,51,0.1)] p-8 rounded-2xl hover:border-[var(--liquid-copper)]/50 transition-all duration-300 group">
                            <div className="mb-6 bg-slate-900 w-fit p-3 rounded-xl group-hover:bg-[var(--liquid-copper)]/20 transition-colors">
                                <LineChart className="text-[var(--liquid-copper)]" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Visibilidad Total</h3>
                            <p className="text-silver">
                                Dashboards en tiempo real. Sabé exactamente cuántas citas generó cada asesor, cuál es la tasa de cierre y dónde está el cuello de botella, sin perseguir a nadie.
                            </p>
                        </div>

                         {/* Feature 3 */}
                         <div className="bg-[#0F172A] border border-[rgba(184,115,51,0.1)] p-8 rounded-2xl hover:border-[var(--liquid-copper)]/50 transition-all duration-300 group">
                            <div className="mb-6 bg-slate-900 w-fit p-3 rounded-xl group-hover:bg-[var(--liquid-copper)]/20 transition-colors">
                                <Users2 className="text-[var(--liquid-copper)]" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Onboarding Automático</h3>
                            <p className="text-silver">
                                Capacita nuevos asesores en días, no meses. Nuestro sistema de roleplay con IA entrena a tu equipo 24/7 con tus mejores guiones de venta.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- ROI CALCULATOR --- */}
                <RoiCalculator />

                {/* --- FAQ SECTION --- */}
                <div className="mt-24">
                   <FAQSection 
                        title="Dudas Frecuentes de Dueños de Agencia"
                        questions={[
                            {
                                question: "¿Cómo evito que mis agentes sientan que los estoy 'controlando'?",
                                answer: "El enfoque es 'Candado de Valor'. No implementamos un sistema para vigilarlos, sino para *darles* leads calificados. Cuando el agente ve que el sistema le llena la agenda de citas listas para cerrar (y que si se va, pierde ese flujo), la adopción es inmediata y la retención aumenta."
                            },
                            {
                                question: "¿Tengo que cambiar todo mi CRM actual (Tokko, Salesforce, etc.)?",
                                answer: "No necesariamente. Vakdor actúa como una capa de inteligencia *sobre* tu CRM actual o puede reemplazarlo si buscas centralizar. Nos integramos vía API para que la data fluya sin fricción. No buscamos romper lo que funciona, sino potenciarlo."
                            },
                            {
                                question: "¿Es rentable para una inmobiliaria con menos de 5 agentes?",
                                answer: "Depende de tu ticket promedio. Si vendes propiedades de alto valor (>150k USD), cerrar solo UNA venta extra al trimestre paga todo el sistema. Para equipos chicos, la automatización es vital porque no tienen personal de sobra para tareas administrativas."
                            },
                            {
                                question: "¿La IA va a reemplazar a mis vendedores?",
                                answer: "No. La IA es pésima en empatía humana, negociación compleja y recorridos presenciales (lo que cierra ventas). Pero es excelente en velocidad, seguimiento y calificación (lo que quema tiempo). Vakdor libera a tus humanos para que sean *más humanos*, no menos."
                            }
                        ]}
                   />
                </div>

                {/* --- CTA FINAL --- */}
                <div className="mt-24 text-center pb-20 border-t border-[rgba(184,115,51,0.1)] pt-20">
                    <h2 className="text-4xl font-display font-bold text-white mb-8">
                        Construye un Activo, No Un Autoempleo
                    </h2>
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-xl text-silver max-w-2xl">
                            Auditoría Estratégica de 30 minutos donde analizamos qué sistemas aplican a tu operación, proyectamos el ROI real y diseñamos la implementación sin interrumpir nada.
                        </p>
                        <a
                            href="https://www.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-copper inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all active:scale-95"
                        >
                            Agendar Consultoría de Escalamiento <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </main>
    )
}
