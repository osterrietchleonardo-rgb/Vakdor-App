import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { CheckCircle2, Target, Heart, Lightbulb } from 'lucide-react';

export default function SobreMiPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] relative">
            <ParticleField />
            <Header />

            <main className="flex-1 relative z-10">
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">La Historia Detrás</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6">
                            Por Qué Hice <span className="text-gradient-copper">Vakdor</span>
                        </h1>
                        <p className="text-xl text-[#94A3B8]">
                            La historia real detrás del proyecto
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-24 px-4 bg-[#0F172A]/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8 text-[#CBD5E1]">
                            <div className="kinetic-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">El Problema que Vi</h2>
                                <p className="mb-4">
                                    En 2022 trabajé con una inmobiliaria en Buenos Aires. Vi a asesores top que se despertaban a las 3 AM porque llegó un lead y no podían dejarlo sin responder. Vi a directores invirtiendo 50 mil dólares en marketing y perdiendo el 60% de esos leads porque nadie hacía seguimiento.
                                </p>
                                <p className="font-accent text-[#B87333] text-lg italic">
                                    "¿Por qué el sector inmobiliario no usa la misma tecnología que Amazon para personalizar, automatizar y escalar?"
                                </p>
                            </div>

                            <div className="kinetic-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">El Descubrimiento</h2>
                                <p className="mb-4">
                                    Empecé a probar IA conversacional, modelos de clasificación de leads, scraping de portales. En 6 meses armé un prototipo que automatizaba el 80% del trabajo repetitivo.
                                </p>
                                <p className="mb-4">Lo probé con 5 asesores. Los resultados fueron claros:</p>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span>25% más visitas agendadas</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span>15 horas semanales ahorradas</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#B87333] flex-shrink-0" size={20} />
                                        <span>0 leads perdidos por horario</span>
                                    </li>
                                </ul>
                                <p className="text-[#B87333] font-semibold">Ahí arrancó Vakdor.</p>
                            </div>

                            <div className="kinetic-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-4">La Misión</h2>
                                <p className="mb-4">
                                    No vendo software. Resuelvo un problema: que asesores y directores puedan competir con las herramientas que solo tienen los gigantes del sector.
                                </p>
                                <p>
                                    Vakdor no es solo IA. Es darte el control total sin tener que contratar un equipo de desarrollo o vivir pegado al CRM.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: CheckCircle2,
                                    title: 'Transparencia',
                                    description: 'Si la IA no es para vos, te lo decimos en la primera llamada. No vendemos a cualquiera.'
                                },
                                {
                                    icon: Target,
                                    title: 'Resultados',
                                    description: '90 días de garantía. Si no funciona, te devolvemos todo.'
                                },
                                {
                                    icon: Heart,
                                    title: 'Acompañamiento',
                                    description: 'No sos un número. Tenés un equipo que te asesora y optimiza tu sistema cada semana.'
                                },
                                {
                                    icon: Lightbulb,
                                    title: 'Innovación',
                                    description: 'Cada mes la herramienta mejora. Sos early adopter de tecnología que otros no tienen.'
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
                </section>

                <section className="py-16 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">¿Querés saber más?</p>
                        <h2 className="text-3xl font-bold text-[#F8FAFC] mb-6">Hablemos de Tu Inmobiliaria</h2>
                        <a
                            href="https://vakdor.com/call_vsl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
                        >
                            Agendar Llamada
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
