'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatBubble } from '@/components/mockups/ChatBubble';
import { WhatsAppInput } from '@/components/mockups/WhatsAppInput';
import { Search, MessageSquare, TrendingUp, Calendar, CheckCircle2, Play, Pause, RotateCcw } from 'lucide-react';
import { CAPTACION_SCRIPT } from '@/data/mockData';
import type { ChatMessage } from '@/data/mockData';

// Dynamic imports for non-critical visual components
const ParticleField = dynamic(
    () => import('@/components/effects/ParticleField').then(m => m.ParticleField),
    { ssr: false }
);

const ScrapingMockup = dynamic(
    () => import('@/components/mockups/ScrapingMockup').then(m => m.ScrapingMockup),
    { ssr: false }
);

const AdvisorDashboardMockup = dynamic(
    () => import('@/components/mockups/AdvisorDashboardMockup').then(m => m.AdvisorDashboardMockup),
    { ssr: false }
);

const RoiCalculator = dynamic(
    () => import('@/components/RoiCalculator').then(m => m.RoiCalculator),
    { ssr: false }
);

const NewsletterSection = dynamic(
    () => import('@/components/NewsletterSection').then(m => m.NewsletterSection),
    { ssr: false }
);

const FAQSection = dynamic(
    () => import('@/components/FAQSection').then(m => m.FAQSection),
    { ssr: false }
);

export default function InmobiliariaPage() {
    const [activeTab, setActiveTab] = useState<'rastreo' | 'contacto' | 'tracking'>('rastreo');

    // Chat State for "Contacto Prioritario"
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Scroll Fix
    useEffect(() => {
        if (chatEndRef.current) {
            const chatContainer = chatEndRef.current.parentElement;
            if (chatContainer) {
                chatContainer.scrollTo({
                    top: chatContainer.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }, [messages, isTyping]);

    // Timer Cleanup
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    // Script Runner
    useEffect(() => {
        if (activeTab !== 'contacto' || !isPlaying || stepIndex >= CAPTACION_SCRIPT.length) return;

        const currentMessage = CAPTACION_SCRIPT[stepIndex];

        const typingDelay = currentMessage.sender === 'ai'
            ? Math.min(Math.max((currentMessage.text?.length || 0) * 40, 1000), 3000)
            : 0;

        timerRef.current = setTimeout(() => {
            if (currentMessage.sender === 'ai') {
                setIsTyping(true);
                timerRef.current = setTimeout(() => {
                    setMessages(prev => [...prev, currentMessage]);
                    setIsTyping(false);
                    setStepIndex(prev => prev + 1);
                }, typingDelay);
            } else {
                setMessages(prev => [...prev, currentMessage]);
                setStepIndex(prev => prev + 1);
            }
        }, currentMessage.delay);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isPlaying, stepIndex, activeTab]);

    const handleReset = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsPlaying(false);
        setMessages([]);
        setStepIndex(0);
        setIsTyping(false);
    };

    // Reset when tab changes
    useEffect(() => {
        if (activeTab === 'contacto') {
            handleReset();
        }
    }, [activeTab]);

    return (
        <div className="min-h-screen flex flex-col bg-[#020617] relative">
            <ParticleField />
            <Header />

            <main className="flex-1 relative z-10">
                {/* Hero Section - Caples: Urgency + Belfort: Certainty */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">Para Directores de Inmobiliaria</p>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6 leading-tight">
                            El Costo Oculto: Tu Inmobiliaria Pierde <span className="text-gradient-copper">$120,000 USD al Año.</span>
                            <span className="block text-2xl md:text-3xl mt-2 text-[#94A3B8]">Garantizado. (Y Sabés que es Verdad).</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-5xl mx-auto">
                            Vakdor es tu <span className="text-[#B87333] font-semibold">Partner Tecnológico</span>: Recuperación de Leads Perdidos, Captación Automática de Propiedades, Tracking de Equipo y Tutor IA para Nuevos Asesores.
                        </p>

                        {/* Hopkins: Objection Handling - Injected */}
                        <div className="max-w-2xl mx-auto bg-[#0F172A]/80 border border-[#B87333]/30 rounded-xl p-6 mb-8">
                            <p className="text-[#B87333] font-bold mb-2">"¿Es muy caro?"</p>
                            <p className="text-[#94A3B8] text-sm">
                                El costo de <span className="text-white">no</span> tener este sistema es de $120,000 USD al año.
                                La pregunta no es si podés pagar Vakdor, sino <span className="text-white font-medium">si podés permitirte seguir perdiendo ese dinero</span>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3-Tab Mockup System */}
                <section className="py-12 md:py-20 px-4 bg-[#0F172A]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F8FAFC]">
                            Los 3 Sistemas que Implementamos
                        </h2>

                        {/* Tab Navigation */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <button
                                onClick={() => setActiveTab('rastreo')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'rastreo'
                                    ? 'bg-[#B87333] text-white shadow-lg shadow-[#B87333]/30'
                                    : 'bg-[#020617]/60 text-[#94A3B8] hover:bg-[#B87333]/20 border border-[#B87333]/20'
                                    }`}
                            >
                                <Search size={18} />
                                1. Rastreo Automático
                            </button>
                            <button
                                onClick={() => setActiveTab('contacto')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'contacto'
                                    ? 'bg-[#B87333] text-white shadow-lg shadow-[#B87333]/30'
                                    : 'bg-[#020617]/60 text-[#94A3B8] hover:bg-[#B87333]/20 border border-[#B87333]/20'
                                    }`}
                            >
                                <MessageSquare size={18} />
                                2. Contacto Prioritario
                            </button>
                            <button
                                onClick={() => setActiveTab('tracking')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'tracking'
                                    ? 'bg-[#B87333] text-white shadow-lg shadow-[#B87333]/30'
                                    : 'bg-[#020617]/60 text-[#94A3B8] hover:bg-[#B87333]/20 border border-[#B87333]/20'
                                    }`}
                            >
                                <TrendingUp size={18} />
                                3. Tracking de Equipo
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                            {/* Left: Description */}
                            <div>
                                {activeTab === 'rastreo' && (
                                    <>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#F8FAFC]">
                                            Captación Automática 24/7
                                        </h3>
                                        <p className="text-[#94A3B8] mb-6">
                                            La IA escanea ZonaProp, ArgenProp y Mercado Libre cada 6 horas, detecta propiedades de dueños directos y extrae sus contactos antes que tu competencia.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">5+ Propiedades Exclusivas al Mes</h4>
                                                    <p className="text-sm text-[#94A3B8]">En promedio, sin que tus asesores salgan a buscar</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Llegás Primero</h4>
                                                    <p className="text-sm text-[#94A3B8]">El sistema contacta en menos de 30 minutos desde que se publica</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Se Integra con tu CRM</h4>
                                                    <p className="text-sm text-[#94A3B8]">Todos los contactos se registran automáticamente</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'contacto' && (
                                    <>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#F8FAFC]">
                                            Outreach Automático a Dueños
                                        </h3>
                                        <p className="text-[#94A3B8] mb-6">
                                            Una vez detectado el dueño directo, la IA le envía un mensaje por WhatsApp ofreciendo una tasación gratuita y agenda la visita automáticamente.
                                        </p>

                                        {/* Playback Controls */}
                                        <div className="flex gap-3 mb-8">
                                            <button
                                                onClick={handleReset}
                                                className="p-3 text-[#94A3B8] hover:text-[#B87333] hover:bg-[#B87333]/10 rounded-full transition-colors"
                                                title="Reiniciar Conv"
                                            >
                                                <RotateCcw size={20} />
                                            </button>
                                            <button
                                                onClick={() => setIsPlaying(!isPlaying)}
                                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all shadow-md active:scale-95 ${isPlaying ? 'bg-[#B87333] hover:bg-[#A0522D]' : 'cta-copper'
                                                    }`}
                                            >
                                                {isPlaying ? (
                                                    <>
                                                        <Pause size={18} /> Pausar
                                                    </>
                                                ) : (
                                                    <>
                                                        <Play size={18} /> Ver Conversación
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Mensaje Personalizado</h4>
                                                    <p className="text-sm text-[#94A3B8]">La IA adapta el tono según el perfil del dueño</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Agenda Automática</h4>
                                                    <p className="text-sm text-[#94A3B8]">Si acepta, coordina fecha y hora sin intervención manual</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Tasa de Respuesta 40%</h4>
                                                    <p className="text-sm text-[#94A3B8]">4 de cada 10 dueños contactados responden positivamente</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'tracking' && (
                                    <>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#F8FAFC]">
                                            Dashboard de Performance Real
                                        </h3>
                                        <p className="text-[#94A3B8] mb-6">
                                            Ve en tiempo real quién responde rápido, quién convierte y quién está a punto de irse. El sistema te alerta antes de que renuncien.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Métricas en Tiempo Real</h4>
                                                    <p className="text-sm text-[#94A3B8]">Tasa de respuesta, conversión y leads perdidos por asesor</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Alertas Predictivas</h4>
                                                    <p className="text-sm text-[#94A3B8]">Te avisa cuando detecta patrones de riesgo de rotación</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-[#F8FAFC]">Reducción 50% Rotación</h4>
                                                    <p className="text-sm text-[#94A3B8]">Intervención temprana = asesores más felices y productivos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Right: Mockup */}
                            <div className="w-full h-[650px]">
                                {activeTab === 'rastreo' && <ScrapingMockup />}

                                {activeTab === 'contacto' && (
                                    <>
                                        <div className="relative w-full h-full bg-gray-900 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden flex flex-col">
                                            <div className="bg-[#075e54] h-8 w-full flex items-center justify-center relative z-20">
                                                <div className="w-24 h-4 bg-black rounded-b-xl absolute top-0"></div>
                                            </div>

                                            <div className="bg-[#075e54] text-white p-3 flex items-center justify-between shadow-md z-10">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold">
                                                        C
                                                    </div>
                                                    <div className="leading-tight">
                                                        <h3 className="font-semibold text-sm">Carlos Méndez (Propietario)</h3>
                                                        <p className="text-xs text-green-100 opacity-90">en línea</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 overflow-y-auto p-3 bg-[#e5ddd5]"
                                                style={{
                                                    backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                                                    backgroundRepeat: 'repeat',
                                                    backgroundSize: '400px'
                                                }}
                                            >
                                                {messages.map((msg, idx) => (
                                                    <ChatBubble key={idx} message={msg} />
                                                ))}
                                                {isTyping && (
                                                    <div className="flex justify-start mb-2">
                                                        <div className="bg-white p-2 rounded-lg shadow-sm">
                                                            <div className="flex gap-1">
                                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <div ref={chatEndRef} />
                                            </div>

                                            <div className="z-10">
                                                <WhatsAppInput />
                                            </div>

                                            <div className="bg-white h-6 w-full flex justify-center items-center">
                                                <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </div>
                                        <p className="text-center text-[10px] text-slate-400 mt-2 italic">
                                            * Simulación con fines demostrativos.
                                        </p>
                                    </>
                                )}

                                {activeTab === 'tracking' && <AdvisorDashboardMockup />}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI Calculator Section - Cialdini: Reciprocity */}
                <section className="py-12 md:py-20 px-4 bg-[#020617]">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F8FAFC]">
                            Validá tu ROI con Datos Reales: <span className="text-gradient-copper">Descubrí Cuánto Dejarías de Perder</span>
                        </h2>
                        <p className="text-center text-[#94A3B8] mb-8 max-w-3xl mx-auto">
                            Esta calculadora utiliza tus métricas actuales para proyectar cuánto facturarías extra implementando la Arquitectura de Venta Autónoma. Sin humo, solo matemática.
                        </p>
                        <div className="bg-[#B87333]/10 border border-[#B87333]/30 rounded-xl p-4 mb-8 text-sm text-[#F8FAFC] max-w-3xl mx-auto">
                            <strong>¿Cómo usarla?</strong> Ingresá la cantidad de asesores, el valor promedio de las propiedades y cuántas captaciones logran hoy. El sistema calcula tu potencial de crecimiento conservador.
                        </div>
                        <RoiCalculator />
                    </div>
                </section>


                {/* FAQ Section - Inmobiliarias */}
                <FAQSection
                    title="Preguntas Frecuentes Estratégicas"
                    subtitle="Resolviendo dudas para directores que buscan escalar."
                    items={[
                        {
                            question: "Mi dolor de cabeza es la retención. ¿Cómo ayudan con esto?",
                            answer: "Creamos un 'Candado de Valor'. Cuando su brokerage provee leads cualificados y citas agendadas, el agente sabe que irse significa volver al trabajo manual. Convertimos su infraestructura en una ventaja competitiva tan fuerte que abandonar su firma se vuelve una mala decisión financiera y operativa."
                        },
                        {
                            question: "He invertido en CRMs antes y nadie los usa. ¿Por qué esto es diferente?",
                            answer: "El problema es exigir a los agentes que sean secretarios de datos. Nuestra filosofía es 'Zero Data Entry'. La IA captura llamadas y actividades sola. Cuando la tecnología elimina trabajo en lugar de crearlo, la adopción es inmediata. Además, genera dinero desde el día uno, convirtiéndose en un centro de beneficios."
                        },
                        {
                            question: "Mis márgenes están comprimidos. ¿Es momento de invertir?",
                            answer: "Precisamente por eso. No se puede 'ahorrar' camino al crecimiento; se debe 'automatizar' camino a la rentabilidad. Nuestras soluciones desacoplan ingresos de costos operativos, permitiendo duplicar transacciones sin duplicar personal. En 2026, la tecnología es el escudo que protege su rentabilidad."
                        },
                        {
                            question: "¿Cómo sé que esto no es solo 'humo' (hype) de IA?",
                            answer: "No vendemos chatbots; implementamos Agentes Autónomos con arquitecturas probadas de Memoria, Planificación y Acción, alimentados con datos hiperlocales. Los resultados son métricas duras: tasas de respuesta, citas agendadas y reducción de horas administrativas. Le invitamos a una prueba de concepto con sus propios datos."
                        }
                    ]}
                />

                {/* CTA Final CTA Final Section needs to remain */}
                <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617] text-white relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-96 h-96 bg-[#B87333]/20 rounded-full blur-3xl"></div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F8FAFC]">
                            ¿Querés Ver Cómo Aplicaría en tu Inmobiliaria?
                        </h2>
                        <p className="text-lg text-[#94A3B8] mb-8">
                            Auditoría Estratégica de 30 minutos donde analizamos qué sistemas aplican a tu operación, proyectamos el ROI real y diseñamos la implementación sin interrumpir nada.
                        </p>
                        <a
                            href="https://www.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-copper inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all active:scale-95"
                        >
                            <Calendar size={20} />
                            Agendar Auditoría Estratégica Gratuita (Espacios Limitados)
                        </a>
                        <p className="text-sm text-[#94A3B8] mt-6">
                            ✅ 90 Días de Garantía: Si no lográs el ROI proyectado, te devolvemos tu inversión.
                        </p>
                    </div>
                </section>
            </main>

            {/* Newsletter Section */}
            <NewsletterSection source="inmobiliaria" />

            <Footer />
        </div >
    );
}
