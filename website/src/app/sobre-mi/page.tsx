import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { CheckCircle2, Target, Heart, Lightbulb, Shield, Award } from 'lucide-react';

export default function SobreMiPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] relative">
            <ParticleField />
            <Header />

            <main className="flex-1 relative z-10">
                {/* Hero - Halbert: Dramatic + Ziglar: Empathy */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">La Historia Detrás</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6">
                            La Historia de un Problema que <span className="text-gradient-copper">Nadie Quiso Resolver.</span>
                        </h1>
                        <p className="text-xl text-[#94A3B8]">
                            Y Por Qué Tuvimos que Construir la Solución.
                        </p>
                    </div>
                </section>

                {/* Content - SPIN Selling: Problem + Implication */}
                <section className="py-16 md:py-24 px-4 bg-[#0F172A]/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8 text-[#CBD5E1]">
                            {/* The Pain - Ziglar: Empathy */}
                            <div className="kinetic-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">El Problema que Vi</h2>
                                <p className="mb-6 text-lg leading-relaxed">
                                    En 2022 trabajé con una inmobiliaria en Buenos Aires. Vi lo que nadie quiere ver.
                                </p>
                                <blockquote className="border-l-4 border-[#B87333] pl-6 my-6 italic text-lg">
                                    "Vi a asesores top que se despertaban a las 3 AM porque llegó un lead y no podían dejarlo sin responder.
                                    Vi a directores invirtiendo <span className="text-[#B87333] font-semibold">50 mil dólares</span> en marketing
                                    y perdiendo el 60% de esos leads porque nadie hacía seguimiento.
                                    <br /><br />
                                    Me pregunté: <span className="text-white">¿Por qué el sector que construye el futuro sigue operando
                                        con la tecnología del pasado?</span>"
                                </blockquote>
                            </div>

                            {/* The Discovery */}
                            <div className="kinetic-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">El Descubrimiento</h2>
                                <p className="mb-4">
                                    Empecé a probar IA conversacional, modelos de clasificación de leads, scraping de portales.
                                    En 6 meses armé un prototipo que automatizaba el 80% del trabajo repetitivo.
                                </p>
                                <p className="mb-4">Lo probé con 5 asesores. Los resultados fueron claros:</p>
                                <ul className="space-y-3 mb-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span><span className="text-[#B87333] font-bold">25%</span> más visitas agendadas</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span><span className="text-[#B87333] font-bold">15 horas</span> semanales ahorradas</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span><span className="text-[#B87333] font-bold">0 leads</span> perdidos por horario</span>
                                    </li>
                                </ul>
                                <p className="text-[#B87333] font-semibold text-lg">Ahí nació Vakdor.</p>
                            </div>

                            {/* The Mission - Kennedy: Differentiation */}
                            <div className="kinetic-card p-8 rounded-2xl border-2 border-[#B87333]/30">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">La Misión: No Vendemos Software.</h2>
                                <h3 className="text-xl text-[#B87333] font-semibold mb-4">Instalamos un Sistema de Control Total.</h3>
                                <p className="mb-4 text-lg">
                                    Vakdor es tu infraestructura de ventas autónoma. Te damos el control total sin depender
                                    de desarrolladores, ni de CRMs rígidos.
                                </p>
                                <p className="text-white font-semibold text-xl">
                                    Tu data, tus reglas.
                                </p>
                            </div>
                        </div>

                        {/* Pillars - Cialdini: Authority + Mary Kay: Recognition */}
                        <div className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-8 text-center">
                                Nuestros Pilares
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Shield,
                                        title: 'Transparencia Radical',
                                        description: 'Si Vakdor no es la solución para tu operación, te lo decimos en la primera llamada. No vendemos por vender.'
                                    },
                                    {
                                        icon: Target,
                                        title: 'Resultados Garantizados',
                                        description: '90 días de garantía. Si no lográs el ROI que proyectamos, te devolvemos tu inversión. Así de simple.'
                                    },
                                    {
                                        icon: Heart,
                                        title: 'Acompañamiento Estratégico',
                                        description: 'No sos un número. Nuestro equipo optimiza tu sistema semanalmente para asegurar la máxima performance.'
                                    },
                                    {
                                        icon: Lightbulb,
                                        title: 'Innovación Continua',
                                        description: 'Cada mes la herramienta mejora. Sos early adopter de tecnología que tus competidores no tienen.'
                                    },
                                ].map((value, index) => (
                                    <div key={index} className="kinetic-card p-6 rounded-2xl">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#B87333]/20 flex items-center justify-center">
                                                <value.icon className="text-[#B87333]" size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#F8FAFC]">{value.title}</h3>
                                        </div>
                                        <p className="text-[#94A3B8]">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA - Belfort: Certainty */}
                <section className="py-16 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">¿Querés saber más?</p>
                        <h2 className="text-3xl font-bold text-[#F8FAFC] mb-6">Hablemos de Tu Operación</h2>
                        <p className="text-[#94A3B8] mb-8">
                            Una auditoría estratégica de 30 minutos donde vemos cómo aplica el sistema a tu caso específico.
                        </p>
                        <a
                            href="https://www.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
                        >
                            Agendar Auditoría Estratégica
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
