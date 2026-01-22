import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, Target, Heart, Lightbulb } from 'lucide-react';

export default function SobreMiPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">
                            Por Qué Hice Vakdor
                        </h1>
                        <p className="text-xl text-slate-300">
                            La historia real detrás del proyecto
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 md:py-24 px-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <h2>El Problema que Vi</h2>
                            <p className="text-slate-600">
                                En 2022 trabajé con una inmobiliaria en Buenos Aires. Vi a asesores top que se despertaban a las 3 AM porque llegó un lead y no podían dejarlo sin responder. Vi a directores invirtiendo 50 mil dólares en marketing y perdiendo el 60% de esos leads porque nadie hacía seguimiento.
                            </p>
                            <p className="text-slate-600">
                                La pregunta que me quedó dando vueltas fue: <strong>¿Por qué el sector inmobiliario no usa la misma tecnología que Amazon para personalizar, automatizar y escalar?</strong>
                            </p>

                            <h2 className="mt-12">El Descubrimiento</h2>
                            <p className="text-slate-600">
                                Empecé a probar IA conversacional, modelos de clasificación de leads, scraping de portales. En 6 meses armé un prototipo que automatizaba el 80% del trabajo repetitivo.
                            </p>
                            <p className="text-slate-600">
                                Lo probé con 5 asesores. Los resultados fueron claros:
                            </p>
                            <ul className="text-slate-600">
                                <li>25% más visitas agendadas</li>
                                <li>15 horas semanales ahorradas</li>
                                <li>0 leads perdidos por horario</li>
                            </ul>
                            <p className="text-slate-600">
                                Ahí arrancó Vakdor.
                            </p>

                            <h2 className="mt-12">La Misión</h2>
                            <p className="text-slate-600">
                                No vendo software. Resuelvo un problema: que asesores y directores puedan competir con las herramientas que solo tienen los gigantes del sector.
                            </p>
                            <p className="text-slate-600">
                                Vakdor no es solo IA. Es darte el control total sin tener que contratar un equipo de desarrollo o vivir pegado al CRM.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="mt-16 grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <CheckCircle2 className="text-emerald-600" size={24} />
                                    <h3 className="text-xl font-bold">Transparencia</h3>
                                </div>
                                <p className="text-slate-600">
                                    Si la IA no es para vos, te lo decimos en la primera llamada. No vendemos a cualquiera.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Target className="text-blue-600" size={24} />
                                    <h3 className="text-xl font-bold">Resultados</h3>
                                </div>
                                <p className="text-slate-600">
                                    90 días de garantía. Si no funciona, te devolvemos todo.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Lightbulb className="text-amber-600" size={24} />
                                    <h3 className="text-xl font-bold">Mejora Continua</h3>
                                </div>
                                <p className="text-slate-600">
                                    No implementamos y desaparecemos. Mejoramos tu operación constantemente.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Heart className="text-rose-600" size={24} />
                                    <h3 className="text-xl font-bold">Educación Primero</h3>
                                </div>
                                <p className="text-slate-600">
                                    El 60% de nuestro contenido es gratis porque ayudamos primero, vendemos después.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
