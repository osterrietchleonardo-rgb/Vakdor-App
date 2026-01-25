'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { ChatBubble } from '@/components/mockups/ChatBubble';
import { WhatsAppInput } from '@/components/mockups/WhatsAppInput';
import { CrmMockup } from '@/components/mockups/CrmMockup';
import { Play, Pause, RotateCcw, CheckCircle2, Calendar, MessageSquare, Database, TrendingUp } from 'lucide-react';
import { SALES_SCRIPT, FOLLOW_UP_SCRIPT } from '@/data/mockData';
import type { ChatMessage } from '@/data/mockData';

export default function AsesorTopPage() {
    const [salesScenario, setSalesScenario] = useState<'initial' | 'crm' | 'followup'>('initial');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Scroll Fix: Manually scroll the container
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

    // Cleanup timers
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    // Reset when scenario changes
    useEffect(() => {
        handleReset();
    }, [salesScenario]);

    // Script Runner
    useEffect(() => {
        const currentScript = salesScenario === 'followup' ? FOLLOW_UP_SCRIPT : SALES_SCRIPT;

        if (!isPlaying || stepIndex >= currentScript.length) return;

        const currentMessage = currentScript[stepIndex];

        // Calculate typing delay
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
    }, [isPlaying, stepIndex, salesScenario]);

    const handleReset = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsPlaying(false);
        setMessages([]);
        setStepIndex(0);
        setIsTyping(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#020617] relative">
            <ParticleField />
            <Header />

            <main className="flex-1 relative z-10">
                {/* Hero Section - Ziglar: Emotional Freedom + Belfort: Line */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">Para Asesores Inmobiliarios Top</p>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6 leading-tight">
                            Dejá de Ser un Asistente y <span className="text-gradient-copper">Convertite en el Arquitecto de tu Negocio.</span>
                            <span className="block text-2xl md:text-3xl mt-2 text-[#94A3B8]">(Recuperá tus Fines de Semana).</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] mb-4 max-w-4xl mx-auto">
                            ¿Y si tu <span className="text-[#B87333] font-semibold">Asistente de IA</span> se Encargara del 80% del Ruido Operativo?
                            Cerrá más ventas sin vivir pegado al celular.
                        </p>
                        {/* Cardone: 10X Emphasis */}
                        <p className="text-sm text-[#B87333] font-medium">
                            📈 Nuestros usuarios reportan <span className="text-white">3x más cierres</span> sin aumentar sus horas de trabajo.
                        </p>
                    </div>
                </section>

                {/* Interactive Demo */}
                <section className="py-12 md:py-20 px-4 bg-[#0F172A]/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                            {/* Left: Description & Controls */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-6">
                                    Mirá Cómo Funciona en Vivo
                                </h2>
                                <p className="text-[#94A3B8] mb-6">
                                    Este es el flujo real que tu asistente de IA ejecuta cuando llega un lead. Responde, filtra, recomienda propiedades y agenda visitas automáticamente.
                                </p>

                                {/* Scenario Tabs */}
                                <div className="bg-[#1E293B] p-2 rounded-xl inline-flex gap-2 mb-8 border border-[rgba(184,115,51,0.2)]">
                                    <button
                                        onClick={() => setSalesScenario('initial')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${salesScenario === 'initial'
                                            ? 'bg-[#B87333] text-white shadow-sm'
                                            : 'text-[#94A3B8] hover:text-white'
                                            }`}
                                    >
                                        <MessageSquare size={16} />
                                        1. Chat Inicial
                                    </button>
                                    <button
                                        onClick={() => setSalesScenario('crm')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${salesScenario === 'crm'
                                            ? 'bg-[#B87333] text-white shadow-sm'
                                            : 'text-[#94A3B8] hover:text-white'
                                            }`}
                                    >
                                        <Database size={16} />
                                        2. Registro CRM
                                    </button>
                                    <button
                                        onClick={() => setSalesScenario('followup')}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${salesScenario === 'followup'
                                            ? 'bg-[#B87333] text-white shadow-sm'
                                            : 'text-[#94A3B8] hover:text-white'
                                            }`}
                                    >
                                        <TrendingUp size={16} />
                                        3. Reactivación
                                    </button>
                                </div>

                                {salesScenario !== 'crm' && (
                                    <div className="flex gap-3 mb-6">
                                        <button
                                            onClick={handleReset}
                                            className="p-3 text-[#94A3B8] hover:text-[#B87333] hover:bg-[#B87333]/10 rounded-full transition-colors"
                                            title="Reiniciar"
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
                                                    <Pause size={18} /> Pausar Demo
                                                </>
                                            ) : (
                                                <>
                                                    <Play size={18} /> Iniciar Demo
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}

                                {/* Scenario Descriptions */}
                                <div className="bg-[#0F172A]/60 p-6 rounded-xl border border-[#B87333]/20 backdrop-blur-sm">
                                    {salesScenario === 'initial' && (
                                        <>
                                            <h3 className="font-bold text-lg mb-2 text-[#F8FAFC]">Paso 1: Filtrado y Agenda</h3>
                                            <p className="text-sm text-[#94A3B8]">
                                                La IA recibe mensajes por WhatsApp, liquida las consultas (presupuesto, zona, urgencia), recomienda propiedades específicas de tu stock y agenda una visita.
                                            </p>
                                        </>
                                    )}
                                    {salesScenario === 'crm' && (
                                        <>
                                            <h3 className="font-bold text-lg mb-2 text-[#F8FAFC]">Paso 2: Registro Automático</h3>
                                            <p className="text-sm text-[#94A3B8]">
                                                Toda la data recolectada se carga sola en tu CRM. Estado, clasificación, historial de chat y próxima acción definida.
                                            </p>
                                        </>
                                    )}
                                    {salesScenario === 'followup' && (
                                        <>
                                            <h3 className="font-bold text-lg mb-2 text-[#F8FAFC]">Paso 3: Reactivación de Base</h3>
                                            <p className="text-sm text-[#94A3B8]">
                                                El sistema detecta leads viejos que no compraron y les avisa cuando entra una propiedad que matchea con su búsqueda.
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Right: Mockup Display */}
                            <div className="relative w-full max-w-[380px] mx-auto">
                                {salesScenario === 'crm' ? (
                                    <div className="w-full h-[650px] animate-fade-in">
                                        <CrmMockup />
                                    </div>
                                ) : (
                                    <div className="relative w-full h-[650px] bg-gray-900 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden flex flex-col">
                                        {/* Phone Notch */}
                                        <div className="bg-[#075e54] h-8 w-full flex items-center justify-center relative z-20">
                                            <div className="w-24 h-4 bg-black rounded-b-xl absolute top-0"></div>
                                        </div>

                                        {/* WhatsApp Header */}
                                        <div className="bg-[#075e54] text-white p-3 flex items-center justify-between shadow-md z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="relative">
                                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold">
                                                        C
                                                    </div>
                                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#075e54]"></div>
                                                </div>
                                                <div className="leading-tight">
                                                    <h3 className="font-semibold text-sm">Cliente Potencial</h3>
                                                    <p className="text-xs text-green-100 opacity-90">en línea</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Chat Messages */}
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

                                        {/* Input */}
                                        <div className="z-10">
                                            <WhatsAppInput />
                                        </div>

                                        {/* Phone Bottom Bar */}
                                        <div className="bg-white h-6 w-full flex justify-center items-center">
                                            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                )}
                                <p className="text-center text-[10px] text-slate-400 mt-4 italic">
                                    * Simulación con fines demostrativos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits - 6 Pillars */}
                <section className="py-12 md:py-20 px-4 bg-slate-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            Lo Que Hace el Asistente de IA (Sin Humo)
                        </h2>
                        {/* Cardone: 10X Scale Message */}
                        <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
                            Escalá tu negocio 10x sin escalar tu esfuerzo. Cada hora que la IA trabaja es una hora que vos ganás.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: '🌙',
                                    title: 'Responde Consultas 24/7',
                                    description: 'Un lead te escribe a las 11 PM. La IA responde en segundos, hace preguntas y manda opciones. Vos te enterás al otro día con la cita agendada.'
                                },
                                {
                                    icon: '🎯',
                                    title: 'Filtro de Calificación Precisa',
                                    description: 'La IA analiza presupuesto, zona y urgencia. Solo te notifica cuando hay un comprador real. (No más curiosos).'
                                },
                                {
                                    icon: '🏠',
                                    title: 'Recomienda las Propiedades Correctas',
                                    description: 'Busca en tu inventario y manda las 2-3 opciones que mejor calzan. Automáticamente, sin que pierdas un segundo.'
                                },
                                {
                                    icon: '📅',
                                    title: 'Agenda las Visitas por Vos',
                                    description: 'Propone horarios, el lead elige, y queda agendado en tu CRM. Sin intercambio de 20 mensajes.'
                                },
                                {
                                    icon: '📊',
                                    title: 'Actualiza tu CRM Automáticamente',
                                    description: 'Cada conversación se registra sola. No más copy-paste ni olvidarte de actualizar a las 10 PM.'
                                },
                                {
                                    icon: '♾️',
                                    title: 'El Resucitador de Leads',
                                    description: 'Retomá contacto con leads de hace 6 meses con ofertas personalizadas. No perdés más contactos, los nutrís automáticamente.'
                                }
                            ].map((benefit, idx) => (
                                <div key={idx} className="kinetic-card p-6 rounded-xl">
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-[#F8FAFC]">{benefit.title}</h3>
                                    <p className="text-[#94A3B8]">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617] text-white relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-96 h-96 bg-[#B87333]/20 rounded-full blur-3xl"></div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F8FAFC]">
                            ¿Querés Ver Cómo Funciona en tu Caso Específico?
                        </h2>
                        <p className="text-lg text-[#94A3B8] mb-8">
                            No es una demo genérica. Es una llamada de 15 minutos donde diseñamos tu Sistema de Venta Autónoma y vemos cómo se integra con tu CRM actual.
                        </p>
                        <a
                            href="https://propuesta.vakdor.com/call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-copper inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all active:scale-95"
                        >
                            <Calendar size={20} />
                            Agendá tu Llamada de 15 Minutos: Diseñemos tu Sistema
                        </a>
                        <p className="text-sm text-[#94A3B8] mt-6">
                            ✅ 90 días de garantía - Si no funciona, te devolvemos todo.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
