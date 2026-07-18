import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { CheckCircle2, Heart, Lightbulb, Shield, Award, Play } from 'lucide-react';

export default function SobreMiPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] relative">
            <ParticleField />
            <Header />

            <main className="flex-1 relative z-10">
                {/* Hero - Halbert: Dramatic + Ziglar: Empathy */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">La Historia Detrás de PRISMA</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6">
                            No construí un software. Construí la <span className="text-gradient-copper">arquitectura</span> que el sector se negaba a tener.
                        </h1>
                        <p className="text-xl text-[#94A3B8] mb-8">
                            Por qué dejé de parchar inmobiliarias y empecé a darles un Sistema Operativo.
                        </p>

                        {/* Founder signature */}
                        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#0F172A]/80 border border-[#B87333]/30">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                LO
                            </div>
                            <div className="text-left leading-tight">
                                <p className="text-[#F8FAFC] font-bold text-sm">Leonardo Osterrietch</p>
                                <p className="text-[#94A3B8] text-xs">Founder &amp; CEO de Vakdor · Creador de PRISMA IA</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content - SPIN Selling: Problem + Implication */}
                <section className="py-16 md:py-24 px-4 bg-[#0F172A]/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8 text-[#CBD5E1]">
                            {/* The Pain - Ziglar: Empathy */}
                            <div className="kinetic-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">El patrón que no pude ignorar</h2>
                                <p className="mb-6 text-lg leading-relaxed">
                                    Desde 2022 me obsesioné con una pregunta: ¿por qué el sector inmobiliario, que mueve semejante volumen de dinero, sigue operando con la tecnología del pasado? Cuanto más lo analizaba, más se repetía el mismo patrón. Uno que casi nadie se anima a admitir.
                                </p>
                                <blockquote className="border-l-4 border-[#B87333] pl-6 my-6 italic text-lg">
                                    &quot;Asesores top despertándose a las 3 AM porque entró un lead y no podían dejarlo sin responder.
                                    Directores invirtiendo <span className="text-[#B87333] font-semibold">50 mil dólares</span> en marketing
                                    y perdiendo el 60% de esos leads porque nadie hacía seguimiento.
                                    <br /><br />
                                    La conclusión fue incómoda: <span className="text-white">no era un problema de gente ni de esfuerzo. Era la ausencia total de un sistema. El sector lideraba a ciegas y lo había normalizado.</span>&quot;
                                </blockquote>
                            </div>

                            {/* The Discovery */}
                            <div className="kinetic-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">De la teoría a la prueba</h2>
                                <p className="mb-4">
                                    No me quedé en el diagnóstico. Me metí en el código: IA conversacional, modelos de clasificación de leads, scraping de portales, integración con CRM. En 6 meses tenía un prototipo funcionando que automatizaba el 80% del trabajo repetitivo de una mesa comercial.
                                </p>
                                <p className="mb-4">Lo puse a operar con 5 asesores reales. Sin promesas: con números medibles.</p>
                                <ul className="space-y-3 mb-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span><span className="text-[#B87333] font-bold">25%</span> más visitas agendadas</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span><span className="text-[#B87333] font-bold">15 horas</span> semanales ahorradas por asesor</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span><span className="text-[#B87333] font-bold">0 leads</span> perdidos por horario</span>
                                    </li>
                                </ul>
                                <p className="text-[#B87333] font-semibold text-lg">Eso que empezó como un prototipo hoy es PRISMA.</p>
                                <p className="mt-4 leading-relaxed">
                                    Hoy, una de las inmobiliarias de <span className="text-white font-semibold">lujo</span> más reconocidas del país —referente de <span className="text-white font-semibold">Leading Real Estate Companies of the World</span>— opera sus <span className="text-white font-semibold">60 asesores</span> con PRISMA.
                                </p>
                            </div>

                            {/* The Mission - Kennedy: Differentiation */}
                            <div className="kinetic-card p-8 rounded-2xl border-2 border-[#B87333]/30">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">Mi convicción: el voluntarismo no escala.</h2>
                                <h3 className="text-xl text-[#B87333] font-semibold mb-4">Por eso construí un Sistema Operativo, no otro software más.</h3>
                                <p className="mb-4 text-lg">
                                    PRISMA se ubica por encima de tus herramientas actuales —conecta tu CRM (Tokko Broker) con WhatsApp— y le da gobernanza y trazabilidad matemática a tu agencia. Control integral, sin depender del criterio humano ni de desarrolladores externos.
                                </p>
                                <p className="text-white font-semibold text-xl">
                                    Tu data, tus reglas. Tu agencia, bajo un único panel de control.
                                </p>
                            </div>
                        </div>

                        {/* Pillars - Cialdini: Authority + Mary Kay: Recognition */}
                        <div className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-8 text-center">
                                Cómo Trabajo
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Shield,
                                        title: 'Transparencia Radical',
                                        description: 'Si PRISMA no es la solución para tu operación, te lo decimos en la primera evaluación. No vendemos por vender: calificamos antes de implementar.'
                                    },
                                    {
                                        icon: Award,
                                        title: 'Decisiones por Datos, no por Sensación',
                                        description: 'Todo lo que afirmamos se respalda con trazabilidad: cada lead, cada conversación y la performance exacta de cada asesor quedan registrados. Datos duros, no relatos de fin de mes.'
                                    },
                                    {
                                        icon: Heart,
                                        title: 'Acompañamiento Estratégico',
                                        description: 'No sos un número. Implementamos en formato Llave en Mano y optimizamos tu sistema de forma continua para sostener la máxima performance.'
                                    },
                                    {
                                        icon: Lightbulb,
                                        title: 'Innovación Continua',
                                        description: 'PRISMA evoluciona todos los meses. Operás con una arquitectura de IA que tus competidores todavía no tienen.'
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
                        <p className="font-accent text-[#B87333] text-lg mb-4">¿Querés ver el sistema por dentro?</p>
                        <h2 className="text-3xl font-bold text-[#F8FAFC] mb-6">Mirá la Demostración Ejecutiva</h2>
                        <p className="text-[#94A3B8] mb-8">
                            Una presentación ejecutiva de 17 minutos donde analizamos el sistema funcionando en vivo y mostramos cómo eliminar la dependencia operativa.
                        </p>
                        <Link
                            href="/demostracion"
                            className="inline-flex items-center gap-3 cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow font-bold"
                        >
                            <Play size={20} className="fill-white" />
                            Ver Demostración de PRISMA
                        </Link>
                        <p className="text-sm text-[#64748B] mt-6">
                            — Leonardo Osterrietch, Founder &amp; CEO de Vakdor · Creador de PRISMA IA
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
