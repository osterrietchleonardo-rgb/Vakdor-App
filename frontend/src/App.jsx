import React, { useState, useEffect, useRef } from 'react';
import {
  AlertCircle, MessageSquare, CheckCheck, TrendingUp, UserCheck, ShieldCheck,
  RotateCcw, Play, Pause, Search, Zap, Database, ChevronRight, Calendar, PhoneCall
} from 'lucide-react';
import { SALES_SCRIPT, PROSPECTS, CAPTACION_SCRIPT } from './data/mockData';
import { Header } from './components/Header';
import { ChatBubble } from './components/ChatBubble';
import { TypingIndicator } from './components/TypingIndicator';
import { WhatsAppInput } from './components/WhatsAppInput';
import { ProspectCard } from './components/ProspectCard';

export default function AureFlowDemo() {
  const [activeTab, setActiveTab] = useState('sales');
  const [messages, setMessages] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [captacionMessages, setCaptacionMessages] = useState([]);
  const [captacionStepIndex, setCaptacionStepIndex] = useState(0);
  const [isCaptacionTyping, setIsCaptacionTyping] = useState(false);
  const [isCaptacionPlaying, setIsCaptacionPlaying] = useState(false);

  const chatEndRef = useRef(null);
  const captacionEndRef = useRef(null);
  const salesSectionRef = useRef(null);
  const prospectingSectionRef = useRef(null);

  const scrollToSection = (section) => {
    const ref = section === 'sales' ? salesSectionRef : prospectingSectionRef;
    setActiveTab(section);
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      const chatContainer = chatEndRef.current.parentElement;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (captacionEndRef.current) {
      const chatContainer = captacionEndRef.current.parentElement;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [captacionMessages, isCaptacionTyping]);

  useEffect(() => {
    if (activeTab !== 'sales') return;

    let timeoutId;
    const runStep = () => {
      if (stepIndex >= SALES_SCRIPT.length) {
        setIsPlaying(false);
        return;
      }
      const currentStep = SALES_SCRIPT[stepIndex];
      const isUser = currentStep.sender === 'user';

      if (!isUser) {
        setIsTyping(true);
        const typingDelay = 1000;
        timeoutId = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, currentStep]);
          setStepIndex(prev => prev + 1);
        }, typingDelay);
      } else {
        setMessages(prev => [...prev, currentStep]);
        setStepIndex(prev => prev + 1);
      }
    };

    if (isPlaying) {
      const currentStep = SALES_SCRIPT[stepIndex];
      const stepDelay = currentStep ? currentStep.delay : 1000;
      timeoutId = setTimeout(runStep, stepDelay);
    }
    return () => clearTimeout(timeoutId);
  }, [isPlaying, stepIndex, activeTab]);

  useEffect(() => {
    if (activeTab !== 'prospecting') return;

    let timeoutId;
    const runStep = () => {
      if (captacionStepIndex >= CAPTACION_SCRIPT.length) {
        setIsCaptacionPlaying(false);
        return;
      }
      const currentStep = CAPTACION_SCRIPT[captacionStepIndex];
      const isUser = currentStep.sender === 'user';

      if (!isUser) {
        setIsCaptacionTyping(true);
        const typingDelay = 1000;
        timeoutId = setTimeout(() => {
          setIsCaptacionTyping(false);
          setCaptacionMessages(prev => [...prev, currentStep]);
          setCaptacionStepIndex(prev => prev + 1);
        }, typingDelay);
      } else {
        setCaptacionMessages(prev => [...prev, currentStep]);
        setCaptacionStepIndex(prev => prev + 1);
      }
    };

    if (isCaptacionPlaying) {
      const currentStep = CAPTACION_SCRIPT[captacionStepIndex];
      const stepDelay = currentStep ? currentStep.delay : 1000;
      timeoutId = setTimeout(runStep, stepDelay);
    }
    return () => clearTimeout(timeoutId);
  }, [isCaptacionPlaying, captacionStepIndex, activeTab]);

  const handleReset = () => {
    setIsPlaying(false);
    setMessages([]);
    setStepIndex(0);
    setIsTyping(false);
  };

  const handleCaptacionReset = () => {
    setIsCaptacionPlaying(false);
    setCaptacionMessages([]);
    setCaptacionStepIndex(0);
    setIsCaptacionTyping(false);
  };

  useEffect(() => {
    if (activeTab === 'sales') {
      handleCaptacionReset();
    } else {
      handleReset();
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-lg">
                🚀 Para Asesores Inmobiliarios que buscan Escalar
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight px-4">
              Dejá de ser un esclavo de los mensajes
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                y recuperá tu tiempo
              </span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              El sistema 24/7 que automatiza el filtrado, el seguimiento y el análisis de tus leads.<br />
              <span className="text-emerald-400 font-semibold">Dejá de tratar a todos igual y enfocate solo en los que firman.</span>
            </p>
          </div>

          {/* PAIN POINTS */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-white/10 mx-4">
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-center">¿Te suena familiar?</h3>
            <div className="grid md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                <p className="text-slate-300">Pasás <strong>20 horas por semana</strong> haciendo copy-paste de respuestas genéricas</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                <p className="text-slate-300">Un lead que escribe a las 23hs y <strong>no recibe respuesta</strong> mañana le compra a otro</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                <p className="text-slate-300"><strong>Tratás igual</strong> a un inversor real que a un curioso que boludea en Facebook</p>
              </div>
            </div>
          </div>

          {/* PRICING CARDS */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mt-8 md:mt-12 px-4">
            {/* Plan 1: Chat IA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start justify-between mb-4 md:mb-6 gap-3">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Asesor de Ventas IA</h3>
                  <p className="text-slate-300 text-xs md:text-sm">Atención 24/7 que parece humana</p>
                </div>
                <MessageSquare className="text-emerald-400 flex-shrink-0" size={28} />
              </div>

              <div className="mb-4 md:mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-black text-white">$300</span>
                  <span className="text-slate-400 text-base md:text-lg">/mes USD</span>
                </div>
                <div className="space-y-1">
                  <p className="text-emerald-400 text-xs md:text-sm font-semibold">✓ +20% más visitas agendadas</p>
                  <p className="text-emerald-400 text-xs md:text-sm font-semibold">✓ 0% No-Shows</p>
                  <p className="text-emerald-400 text-xs md:text-sm font-semibold">✓ 100% Consultas Atendidas</p>
                  <p className="text-slate-400 text-[10px] md:text-xs mt-2">Implementación en 15 días</p>
                </div>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Gestión completa:</strong> WhatsApp + CRM (Tokko u otros)</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Filtrado inteligente:</strong> Detecta quién tiene la plata hoy</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Registro automático:</strong> Todos los datos en tu CRM</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Notificaciones y seguimientos</strong> programados automáticamente</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Dashboard de rendimiento:</strong> Sabé qué anuncios funcionan</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToSection('sales')}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 md:py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 active:scale-95 text-sm md:text-base"
              >
                Ver Demo en Vivo
              </button>
            </div>

            {/* Plan 2: Prospección */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start justify-between mb-4 md:mb-6 gap-3">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Captación Automática</h3>
                  <p className="text-slate-300 text-xs md:text-sm">Exclusivas antes que la competencia</p>
                </div>
                <Search className="text-blue-400 flex-shrink-0" size={28} />
              </div>

              <div className="mb-4 md:mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-black text-white">$500</span>
                  <span className="text-slate-400 text-base md:text-lg">/mes USD</span>
                </div>
                <div className="space-y-1">
                  <p className="text-blue-400 text-xs md:text-sm font-semibold">✓ +5 Tasaciones Mensuales</p>
                  <p className="text-blue-400 text-xs md:text-sm font-semibold">✓ Dueños Directos Contactados</p>
                  <p className="text-blue-400 text-xs md:text-sm font-semibold">✓ Visitas Agendadas por Vos</p>
                  <p className="text-slate-400 text-[10px] md:text-xs mt-2">Rastreo diario inteligente</p>
                </div>
              </div>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-blue-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Rastreo diario</strong> en ZonaProp, ArgenProp y ML</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-blue-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Contacto prioritario:</strong> Llegamos primero al dueño directo</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-blue-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Nurturing 15 días:</strong> Seguimiento hasta que necesite tasar</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-blue-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Scripts probados</strong> que desarman la resistencia</span>
                </li>
                <li className="flex items-start gap-2 text-slate-200">
                  <CheckCheck size={16} className="text-blue-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm"><strong>Tasaciones agendadas</strong> directo en tu calendario</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToSection('prospecting')}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 md:py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 active:scale-95 text-sm md:text-base"
              >
                Explorar Sistema
              </button>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-10 px-4">
            <p className="text-slate-400 text-xs md:text-sm mb-2">
              💡 <strong className="text-white">Combo Completo:</strong> $700/mes USD (ahorrás $100)
            </p>
            <p className="text-[10px] md:text-xs text-slate-500 mb-1">
              Contrato mínimo 12 meses · 90 días de garantía
            </p>
            <p className="text-[10px] md:text-xs text-slate-500">
              Cero laburo para vos, 100% de resultados para tu bolsillo
            </p>
          </div>
        </div>
      </div>

      {/* GLOBAL HEADER TOGGLE */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 px-3 md:px-4 py-2 md:py-3 shadow-sm flex justify-center">
        <div className="bg-gray-100 p-1 rounded-full flex gap-1 relative w-full max-w-md md:max-w-none md:w-auto">
          <button
            onClick={() => setActiveTab('sales')}
            className={`flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all flex-1 md:flex-initial ${activeTab === 'sales' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <MessageSquare size={14} className="md:w-4 md:h-4" />
            <span className="truncate">Chat Venta IA</span>
          </button>
          <button
            onClick={() => setActiveTab('prospecting')}
            className={`flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all flex-1 md:flex-initial ${activeTab === 'prospecting' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <Search size={14} className="md:w-4 md:h-4" />
            <span className="truncate">Captación Automática</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full p-3 md:p-6 gap-4 md:gap-8 items-start">

        {/* LEFT PANEL: CONTEXT & VALUE PROP */}
        <div className="flex-1 space-y-4 md:space-y-6 animate-fade-in w-full">

          {activeTab === 'sales' ? (
            // CONTENT FOR SALES MODE
            <div ref={salesSectionRef}>
              <div className="bg-gradient-to-br from-emerald-600 to-teal-800 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-5 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 pointer-events-none"></div>

                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl">
                    <MessageSquare size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold">Asesor de Ventas IA</h2>
                    <p className="text-emerald-100 text-xs md:text-sm">$300/mes USD · Done-for-you</p>
                  </div>
                </div>

                <p className="text-emerald-50 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  Tu negocio funcionando en piloto automático, con el toque humano que tu CRM solo no te da. <strong>Nosotros configuramos todo por vos en 15 días.</strong>
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-lg border border-white/20">
                    <div className="text-xl md:text-2xl font-bold">+20%</div>
                    <div className="text-[10px] md:text-xs opacity-80">Más Visitas</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-lg border border-white/20">
                    <div className="text-xl md:text-2xl font-bold">0%</div>
                    <div className="text-[10px] md:text-xs opacity-80">No-Shows</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                  <TrendingUp className="text-emerald-600" size={18} />
                  Gestión completa de tus consultas:
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex gap-2 md:gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded text-green-600 h-fit"><CheckCheck size={14} className="md:w-4 md:h-4" /></div>
                    <div>
                      <strong className="block text-gray-900 text-xs md:text-sm">WhatsApp + CRM Integrado</strong>
                      <span className="text-gray-500 text-[11px] md:text-xs">Gestión unificada de todas las consultas desde WhatsApp y tu CRM preferido (Tokko, u otros sistemas).</span>
                    </div>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded text-green-600 h-fit"><UserCheck size={14} className="md:w-4 md:h-4" /></div>
                    <div>
                      <strong className="block text-gray-900 text-xs md:text-sm">Registro Automático en CRM</strong>
                      <span className="text-gray-500 text-[11px] md:text-xs">Todos los datos de contacto, preferencias y seguimiento se registran automáticamente en tu sistema.</span>
                    </div>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded text-green-600 h-fit"><ShieldCheck size={14} className="md:w-4 md:h-4" /></div>
                    <div>
                      <strong className="block text-gray-900 text-xs md:text-sm">Notificaciones y Seguimientos</strong>
                      <span className="text-gray-500 text-[11px] md:text-xs">Sistema inteligente de recordatorios, re-confirmaciones y nurturing programado automáticamente.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* BONUS STACK */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-emerald-200">
                <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-xs md:text-sm flex items-center gap-2">
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] md:text-xs">BONUS</span>
                  Si arrancás esta semana
                </h4>
                <ul className="space-y-1.5 md:space-y-2 text-[11px] md:text-xs text-gray-700">
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <CheckCheck size={12} className="text-emerald-600 mt-0.5 flex-shrink-0 md:w-3.5 md:h-3.5" />
                    <span><strong>Módulo "Anti-Plantón":</strong> Recordatorios 24hs y 2hs antes. No-Shows bajados a menos del 10%.</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <CheckCheck size={12} className="text-emerald-600 mt-0.5 flex-shrink-0 md:w-3.5 md:h-3.5" />
                    <span><strong>Dashboard de Inversión Real:</strong> Ver qué anuncios rinden y cuáles son gasto innecesario.</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <CheckCheck size={12} className="text-emerald-600 mt-0.5 flex-shrink-0 md:w-3.5 md:h-3.5" />
                    <span><strong>Soporte "Guante Blanco" 24/7:</strong> Si algo falla un sábado a la noche, nosotros lo arreglamos.</span>
                  </li>
                </ul>
              </div>

              {/* CONTROLS */}
              <div className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-100 flex items-center justify-between gap-2">
                <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wide">
                  Control de Demo
                </div>
                <div className="flex gap-1.5 md:gap-2">
                  <button onClick={handleReset} className="p-1.5 md:p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                    <RotateCcw size={16} className="md:w-4 md:h-4" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full font-bold text-white transition-all shadow-md active:scale-95 text-xs md:text-sm ${isPlaying ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-600 hover:bg-emerald-700'}`}
                  >
                    {isPlaying ? <><Pause size={14} className="md:w-4 md:h-4" /> Pausar</> : <><Play size={14} className="md:w-4 md:h-4" /> Iniciar Demo</>}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // CONTENT FOR PROSPECTING MODE
            <div ref={prospectingSectionRef}>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white opacity-5 skew-y-6 pointer-events-none"></div>

                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl">
                    <Search size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold">Captación Automática</h2>
                    <p className="text-blue-100 text-xs md:text-sm">$500/mes USD · Done-for-you</p>
                  </div>
                </div>

                <p className="text-blue-50 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  <strong>Cartera de exclusivas en piloto automático.</strong> Captá dueños directos antes que tu competencia, sin pasar un segundo scrolleando portales.
                </p>

                <div className="inline-flex items-center gap-2 bg-white/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-white/10">
                  <Zap size={14} className="text-yellow-300 md:w-4 md:h-4" />
                  Rastreo diario respetando la privacidad de los sistemas
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                  <Database className="text-blue-600" size={18} />
                  Del "Buscador" al "Elegido":
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex gap-2 md:gap-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded text-blue-600 h-fit font-bold text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <strong className="block text-gray-900 text-xs md:text-sm">Rastreo Inteligente Diario</strong>
                      <span className="text-gray-500 text-[11px] md:text-xs">Nuestra IA barre ZonaProp, ArgenProp y ML una vez al día buscando avisos nuevos de dueños directos, respetando los sistemas.</span>
                    </div>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded text-blue-600 h-fit font-bold text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <strong className="block text-gray-900 text-xs md:text-sm">Contacto Prioritario</strong>
                      <span className="text-gray-500 text-[11px] md:text-xs">En cuanto detectamos una oportunidad, el dueño recibe un WhatsApp personalizado que no parece bot, ofreciendo valor real.</span>
                    </div>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded text-blue-600 h-fit font-bold text-[10px] md:text-xs w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <strong className="block text-gray-900 text-xs md:text-sm">Nurturing de Confianza</strong>
                      <span className="text-gray-500 text-[11px] md:text-xs">Si no contesta, el sistema hace seguimiento por email y WhatsApp durante 15 días con datos del mercado.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* BONUS STACK */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-200">
                <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-xs md:text-sm flex items-center gap-2">
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] md:text-xs">BONUS</span>
                  Si activamos tu zona esta semana
                </h4>
                <ul className="space-y-1.5 md:space-y-2 text-[11px] md:text-xs text-gray-700">
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <CheckCheck size={12} className="text-blue-600 mt-0.5 flex-shrink-0 md:w-3.5 md:h-3.5" />
                    <span><strong>Scripts de Impacto:</strong> Secuencias de mensajes probadas que desarman la resistencia del dueño que "no quiere inmobiliaria".</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <CheckCheck size={12} className="text-blue-600 mt-0.5 flex-shrink-0 md:w-3.5 md:h-3.5" />
                    <span><strong>Informe de Mercado Automático:</strong> Un PDF personalizado con los precios de cierre de la zona en tu nombre.</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <CheckCheck size={12} className="text-blue-600 mt-0.5 flex-shrink-0 md:w-3.5 md:h-3.5" />
                    <span><strong>Filtro Anti-Colegas:</strong> Limpiamos leads para que no pierdas tiempo con inmobiliarias disfrazadas.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-200">
                <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-xs md:text-sm">💰 Garantía de Tasaciones Reales</h4>
                <p className="text-gray-600 text-[11px] md:text-sm leading-relaxed mb-2 md:mb-3">
                  Si en los primeros <strong>90 días no te generamos al menos 5 tasaciones mensuales promedio</strong>, podés rescindir el contrato sin problemas.
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 italic">
                  No pagás por "intentos", pagás por resultados. Tasaciones agendadas en tu calendario.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT PANEL: SIMULATOR OR DASHBOARD */}
        <div className="w-full lg:max-w-[900px] flex-shrink-0 flex justify-center lg:block">

          {activeTab === 'sales' ? (
            // PHONE SIMULATOR
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[650px] sm:h-[750px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-[6px] sm:border-[8px] border-gray-800 overflow-hidden flex flex-col">
              <div className="bg-[#075e54] h-6 sm:h-8 w-full flex items-center justify-center relative z-20">
                <div className="w-20 h-3 sm:w-24 sm:h-4 bg-black rounded-b-xl absolute top-0"></div>
              </div>
              <Header />
              <div
                className="flex-1 overflow-y-auto p-2 sm:p-3 bg-[#e5ddd5]"
                style={{
                  backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "400px"
                }}
              >
                {messages.map((msg, idx) => (
                  <ChatBubble key={idx} message={msg} />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={chatEndRef} />
              </div>
              <div className="z-10">
                <WhatsAppInput />
              </div>
              <div className="bg-white h-5 sm:h-6 w-full flex justify-center items-center">
                <div className="w-24 h-1 sm:w-32 sm:h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ) : (
            // PROSPECTING: TWO COLUMN LAYOUT
            <div className="w-full">
              {/* INDICADOR DE FLUJO */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 md:p-4 rounded-xl border border-blue-200 mb-3 md:mb-4">
                <div className="flex items-center justify-center gap-3 md:gap-6 overflow-x-auto pb-2 md:pb-0">
                  <div className="flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
                    <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">1</div>
                    <span className="text-xs md:text-sm font-bold text-gray-800">Detección</span>
                  </div>
                  <ChevronRight className="text-blue-400 flex-shrink-0" size={16} />
                  <div className="flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
                    <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">2</div>
                    <span className="text-xs md:text-sm font-bold text-gray-800">Contacto</span>
                  </div>
                  <ChevronRight className="text-blue-400 flex-shrink-0" size={16} />
                  <div className="flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
                    <div className="bg-green-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">✓</div>
                    <span className="text-xs md:text-sm font-bold text-gray-800">Tasación Agendada</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
                {/* COLUMNA 1: LISTA DE PROSPECCIÓN */}
                <div className="w-full lg:max-w-[420px] h-[400px] lg:h-[750px] bg-gray-50 rounded-xl md:rounded-2xl shadow-xl border border-gray-200 flex flex-col overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 md:p-3 text-center">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Paso 1: Detección</p>
                  </div>

                  <div className="bg-white p-3 md:p-5 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base">Oportunidades Hoy</h3>
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 md:py-1 rounded-md text-[10px] md:text-xs font-bold">
                        34 Nuevos
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-lg p-1.5 md:p-2 flex items-center gap-1.5 md:gap-2 text-gray-500 text-[10px] md:text-xs">
                        <Search size={12} className="flex-shrink-0 md:w-3.5 md:h-3.5" />
                        <span className="truncate">Buscar zona...</span>
                      </div>
                      <button className="bg-blue-600 text-white p-1.5 md:p-2 rounded-lg flex-shrink-0">
                        <Search size={12} className="md:w-3.5 md:h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-2 md:space-y-3">
                    {PROSPECTS.map((prop, idx) => (
                      <ProspectCard key={prop.id} data={prop} isActive={idx === 0} />
                    ))}

                    <div className="text-center py-3 md:py-4">
                      <button className="text-[10px] md:text-xs text-blue-600 font-semibold flex items-center justify-center gap-1 mx-auto hover:underline">
                        Ver 29 resultados más <ChevronRight size={10} className="md:w-3 md:h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border-t border-gray-200 p-2 md:p-3 flex justify-around text-gray-400">
                    <div className="flex flex-col items-center gap-0.5 md:gap-1 text-blue-600">
                      <Search size={16} className="md:w-5 md:h-5" />
                      <span className="text-[9px] md:text-[10px] font-bold">Buscar</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 md:gap-1 hover:text-gray-600 cursor-pointer">
                      <MessageSquare size={16} className="md:w-5 md:h-5" />
                      <span className="text-[9px] md:text-[10px]">Chats</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 md:gap-1 hover:text-gray-600 cursor-pointer">
                      <UserCheck size={16} className="md:w-5 md:h-5" />
                      <span className="text-[9px] md:text-[10px]">Agenda</span>
                    </div>
                  </div>
                </div>

                {/* COLUMNA 2: CHAT DE CAPTACIÓN */}
                <div className="w-full lg:max-w-[420px] flex flex-col gap-3 md:gap-4">
                  <div className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-1.5 md:p-2 rounded-lg">
                        <MessageSquare size={16} className="text-blue-600 md:w-4 md:h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wide">Paso 2</p>
                        <p className="text-xs md:text-sm font-bold text-gray-800">Contacto Automático</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 md:gap-2">
                      <button onClick={handleCaptacionReset} className="p-1.5 md:p-2 text-gray-500 hover:bg-gray-100 rounded-full" title="Reiniciar">
                        <RotateCcw size={16} className="md:w-4 md:h-4" />
                      </button>
                      <button
                        onClick={() => setIsCaptacionPlaying(!isCaptacionPlaying)}
                        className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-white transition-all shadow-md active:scale-95 text-xs md:text-sm whitespace-nowrap ${isCaptacionPlaying ? 'bg-amber-500 hover:bg-amber-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                      >
                        {isCaptacionPlaying ? <><Pause size={12} className="md:w-3.5 md:h-3.5" /> Pausar</> : <><Play size={12} className="md:w-3.5 md:h-3.5" /> Iniciar</>}
                      </button>
                    </div>
                  </div>

                  <div className="relative w-full h-[600px] lg:h-[680px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-[6px] sm:border-[8px] border-gray-800 overflow-hidden flex flex-col">
                    <div className="bg-[#075e54] h-6 sm:h-8 w-full flex items-center justify-center relative z-20">
                      <div className="w-20 h-3 sm:w-24 sm:h-4 bg-black rounded-b-xl absolute top-0"></div>
                    </div>

                    {/* Header Chat Captación */}
                    <div className="bg-[#075e54] text-white p-2 sm:p-3 flex items-center justify-between shadow-md z-10">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <ArrowLeft size={16} className="cursor-pointer sm:w-5 sm:h-5" />
                        <div className="relative">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-sm sm:text-base">
                            V
                          </div>
                          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-[#075e54]"></div>
                        </div>
                        <div className="leading-tight">
                          <h3 className="font-semibold text-sm sm:text-base">Victoria Simonini</h3>
                          <p className="text-[10px] sm:text-xs text-green-100 opacity-90">en línea</p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4 pr-2">
                        <Video size={16} className="sm:w-5 sm:h-5" />
                        <Phone size={16} className="sm:w-5 sm:h-5" />
                        <MoreVertical size={16} className="sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <div
                      className="flex-1 overflow-y-auto p-2 sm:p-3 bg-[#e5ddd5]"
                      style={{
                        backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "400px"
                      }}
                    >
                      {captacionMessages.map((msg, idx) => (
                        <ChatBubble key={idx} message={msg} />
                      ))}
                      {isCaptacionTyping && <TypingIndicator />}
                      <div ref={captacionEndRef} />
                    </div>

                    <div className="z-10">
                      <WhatsAppInput />
                    </div>
                    <div className="bg-white h-5 sm:h-6 w-full flex justify-center items-center">
                      <div className="w-24 h-1 sm:w-32 sm:h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* FOOTER CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 md:py-16 px-4 md:px-6 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">¿Valdría la pena charlar 15 minutos?</h3>
          <p className="text-base md:text-lg text-slate-300 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
            No estoy seguro de si este sistema es exactamente lo que necesitás hoy, pero si estás cansado de ser un "bot humano" contestando siempre lo mismo...
          </p>
          <p className="text-emerald-400 font-semibold mb-6 md:mb-8 text-sm md:text-base">
            ...valdría la pena que charlemos un ratito.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
            <a
              href="https://vakdor.com/call_vsl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/50 active:scale-95 text-sm md:text-base"
            >
              <Calendar size={18} className="md:w-5 md:h-5" />
              Agendar Llamada de 15 min
            </a>

            <a
              href="https://wa.me/542213089334?text=Hola!%20Quiero%20ver%20si%20AureFlow%20puede%20ayudarme"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all active:scale-95 text-sm md:text-base"
            >
              <PhoneCall size={18} className="md:w-5 md:h-5" />
              WhatsApp Directo
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 mb-6 md:mb-8">
            <h4 className="font-bold mb-2 md:mb-3 text-base md:text-lg">En la llamada vamos a:</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-slate-300 max-w-xl mx-auto text-left">
              <li className="flex items-start gap-1.5 md:gap-2">
                <CheckCheck size={14} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                <span>Analizar dónde se te están escapando los leads hoy</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-2">
                <CheckCheck size={14} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                <span>Sacarte cualquier duda técnica sobre tu CRM o la IA</span>
              </li>
              <li className="flex items-start gap-1.5 md:gap-2">
                <CheckCheck size={14} className="text-emerald-400 mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                <span>Ver si realmente te podemos ayudar a escalar</span>
              </li>
            </ul>
            <p className="text-[10px] md:text-xs text-slate-400 mt-3 md:mt-4 italic">
              Si vemos que no es para vos, te vas con un diagnóstico claro de tu embudo de ventas. Sin compromiso.
            </p>
          </div>

          <div className="pt-6 md:pt-8 border-t border-white/10">
            <h4 className="font-bold text-xs md:text-sm mb-3 md:mb-4 text-slate-300">Garantía de 90 Días:</h4>
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mb-4">
              Si en los primeros <strong className="text-white">90 días no cumplimos con lo prometido</strong> (Asesor IA: +20% visitas, 0% no-shows, 100% atendidos · Captación: +5 tasaciones/mes),
              <strong className="text-emerald-400"> podés rescindir el contrato sin problemas ni multas</strong>.
            </p>
            <p className="text-slate-500 text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed">
              Contrato mínimo de 12 meses. Si decidís cancelar después de los 90 días de garantía, necesitamos aviso con 60 días de anticipación más 2 meses de servicio como multa de rescisión.
            </p>
          </div>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
            <p className="text-slate-400 text-[10px] md:text-sm">
              🔒 Contrato 12 meses · ✅ 90 días de garantía · 🚀 Setup en 15 días · 💬 Soporte 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
