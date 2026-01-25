'use client';

import { BackgroundLogo } from "@/components/effects/BackgroundLogo";
import { ParticleField } from "@/components/effects/ParticleField";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, LineChart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
             <ParticleField />
             
             {/* Background Decoration */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--liquid-copper)] opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10"></div>

            <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-block px-3 py-1 bg-[rgba(184,115,51,0.1)] border border-[rgba(184,115,51,0.2)] rounded-full text-[var(--liquid-copper)] text-sm font-bold tracking-wider mb-4 animate-fade-in">
                        SOBRE EL FUNDADOR
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight animate-fade-in-up">
                        De la Ingeniería a la <br />
                        <span className="text-gradient-copper">Revolución Inmobiliaria</span>
                    </h1>
                </div>

                {/* Profile Card & Bio */}
                <div className="grid md:grid-cols-12 gap-12 mb-24 items-start">
                    {/* Image Column */}
                    <div className="md:col-span-5 relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--liquid-copper)] to-purple-900 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(184,115,51,0.2)] shadow-2xl">
                             {/* Placeholder for Leo's photo - using a generic abstract dark tech placeholder or user provided image later */}
                             <div className="w-full h-full bg-slate-900 relative">
                                {/* <Image src="/leo-profile.jpg" fill alt="Leonardo Osterrietch" className="object-cover" /> */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-700 bg-gradient-to-br from-slate-900 to-slate-800">
                                    <span className="text-center px-4">
                                        [Foto de Leonardo] <br/>
                                        <span className="text-xs text-silver mt-2 block">Ingeniero & Especialista en Crecimiento</span>
                                    </span>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Bio Column */}
                    <div className="md:col-span-7 space-y-6 text-silver text-lg leading-relaxed">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Hola, soy <span className="text-[var(--liquid-copper)]">Leo Osterrietch</span>.
                        </h2>
                        <p>
                            No soy un "guru" de ventas ni un coach motivacional. Soy Ingeniero. Mi trabajo consiste en construir sistemas que funcionen de manera predecible, eficiente y escalable.
                        </p>
                        <p>
                            Durante años, me dediqué a optimizar sistemas complejos en ingeniería. Pero me di cuenta de una desconexión masiva en el mundo de los negocios de alto ticket, especialmente en Real Estate:
                        </p>
                        <blockquote className="border-l-4 border-[var(--liquid-copper)] pl-6 py-2 my-8 italic text-white bg-white/5 rounded-r-xl">
                            "Los mejores asesores pasan el 70% de su tiempo haciendo trabajo administrativo de bajo valor, en lugar de estar cerrando tratos."
                        </blockquote>
                        <p>
                            Esa ineficiencia me obsesionó. Fundé Vakdor con una misión clara: <strong className="text-white">Eliminar la fricción operativa del Real Estate.</strong>
                        </p>
                        <p>
                            Hoy, ayudo a inmobiliarias y asesores top a implementar infraestructuras de Inteligencia Artificial que no solo "ahorran tiempo", sino que multiplican la capacidad de facturación sin necesidad de multiplicar el tamaño del equipo.
                        </p>
                        
                        <div className="pt-6">
                            <a 
                                href="https://www.linkedin.com/in/osterrietchleonardo/"
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-[var(--liquid-copper)] font-bold hover:underline underline-offset-4 group"
                            >
                                Conectemos en LinkedIn 
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Values / Philosophy */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                     <div className="glass p-8 rounded-2xl hover:border-[var(--liquid-copper)]/40 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-[var(--liquid-copper)]/10 flex items-center justify-center text-[var(--liquid-copper)] mb-6 group-hover:bg-[var(--liquid-copper)]/20 transition-colors">
                            <BrainCircuit size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Ingeniería sobre Motivación</h3>
                        <p className="text-silver text-sm">
                            El entusiasmo fluctúa. Los sistemas permanecen. Construimos flujos de trabajo que no dependen de que tengas "un buen día".
                        </p>
                     </div>

                     <div className="glass p-8 rounded-2xl hover:border-[var(--liquid-copper)]/40 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-[var(--liquid-copper)]/10 flex items-center justify-center text-[var(--liquid-copper)] mb-6 group-hover:bg-[var(--liquid-copper)]/20 transition-colors">
                            <LineChart size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Datos sobre Intuición</h3>
                        <p className="text-silver text-sm">
                            Lo que no se mide, no se mejora. Implementamos métricas claras para tomar decisiones basadas en realidad, no en corazonadas.
                        </p>
                     </div>

                     <div className="glass p-8 rounded-2xl hover:border-[var(--liquid-copper)]/40 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-[var(--liquid-copper)]/10 flex items-center justify-center text-[var(--liquid-copper)] mb-6 group-hover:bg-[var(--liquid-copper)]/20 transition-colors">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Calidad sobre Cantidad</h3>
                        <p className="text-silver text-sm">
                            No buscamos llenar tu agenda de curiosos. Filtramos violentamente para que solo hables con quien tiene el dinero y la urgencia.
                        </p>
                     </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-b from-[#0F172A] to-[#020617] rounded-3xl p-12 border border-[rgba(184,115,51,0.2)] relative overflow-hidden">
                     {/* Glow effect */}
                     <div className="absolute inset-0 bg-[var(--liquid-copper)] opacity-5 blur-3xl"></div>
                     
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-display font-bold text-white mb-6">
                            ¿Listo para operar como una empresa de tecnología?
                        </h2>
                        <p className="text-silver mb-8 text-lg">
                            Una auditoría estratégica de 30 minutos donde vemos cómo aplica el sistema a tu caso específico.
                        </p>
                        <a
                            href="https://www.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
                        >
                            Agendar Auditoría con Leo
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
