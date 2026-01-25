import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { ArrowRight, Bot, Building2, Users, Zap, Trophy, Clock, AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] relative">
      {/* Particle Background */}
      <ParticleField />

      <Header />

      <main className="flex-1 relative z-10">
        {/* Hero Section - Belfort: Straight Line + Halbert: Emotional Hook */}
        <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Accent Quote - Ogilvy: Big Idea */}
            <p className="font-accent text-[#B87333] text-lg md:text-xl mb-6 animate-fade-in">
              "Cada Lead Perdido es una Comisión que se Evapora"
            </p>

            {/* Main Title - Halbert/Belfort: Pain + Transformation */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] mb-6 leading-tight animate-fade-in-up">
              Mientras Vos Dormís, tu Competencia Cierra.
              <span className="block text-gradient-copper">¿Y si Pudieras Escalar</span>
              sin Sacrificar tu Vida?
            </h1>

            {/* Subtitle - Sugarman: Slippery Slide */}
            <p className="text-lg md:text-xl text-[#94A3B8] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-[#B87333] font-semibold">Sistemas de IA</span> que trabajan 24/7 para que vos te enfoques en lo que mejor hacés: cerrar ventas y liderar tu equipo.
              <span className="text-white font-medium">Sin más tareas repetitivas. Sin más leads perdidos.</span>
            </p>

            {/* Segmentador Buttons - Caples: Specific Benefits */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/asesor-top"
                className="kinetic-card p-8 rounded-2xl text-left group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={28} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#F8FAFC] mb-2">
                  SOY ASESOR TOP
                </h2>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Quiero que la IA <span className="text-[#B87333] font-semibold">Responda, Califique y Agende por Mí</span>. Yo Solo Me Presento a Cerrar.
                </p>
                <span className="inline-flex items-center gap-2 text-[#B87333] font-semibold text-sm group-hover:gap-3 transition-all">
                  CONOCER AUREFLOW <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                href="/inmobiliaria"
                className="kinetic-card p-8 rounded-2xl text-left group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="text-white" size={28} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#F8FAFC] mb-2">
                  DIRIJO UNA INMOBILIARIA
                </h2>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Necesito un <span className="text-[#B87333] font-semibold">Partner Tecnológico</span>: Leads Recuperados, Captación Automática y Performance en Tiempo Real.
                </p>
                <span className="inline-flex items-center gap-2 text-[#B87333] font-semibold text-sm group-hover:gap-3 transition-all">
                  VER LAS SOLUCIONES <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section - Cialdini: Authority + Data */}
        <section className="py-20 px-4 bg-[#0F172A]/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC] mb-4">
              ¿Cuánto Dinero Estás Dejando <span className="text-gradient-copper">Sobre la Mesa?</span>
            </h2>
            <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
              Mientras otros sectores escalan con tecnología, el inmobiliario sigue atrapado en procesos que queman equipos y pierden clientes.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'El Tiempo es Dinero',
                  description: 'Responder las mismas preguntas una y otra vez te roba horas que podrías usar para cerrar negocios o escalar tu equipo.',
                  stat: '20+ hrs',
                  statLabel: 'perdidas por semana'
                },
                {
                  icon: TrendingDown,
                  title: 'Leads que Nadie Siguió',
                  description: 'Un tercio de tu inversión en marketing desaparece porque falta seguimiento. Vakdor los recupera automáticamente.',
                  stat: '33%',
                  statLabel: 'leads perdidos'
                },
                {
                  icon: AlertTriangle,
                  title: 'La Ventaja es de Minutos',
                  description: 'Cuando tardás 4 horas en responder, tu competencia que usa tecnología ya cerró la cita.',
                  stat: '∞',
                  statLabel: 'oportunidades perdidas'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="kinetic-card p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-[#B87333]" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-[#B87333] mb-1">{item.stat}</div>
                  <div className="text-xs text-[#64748B] uppercase tracking-wider mb-4">{item.statLabel}</div>
                  <h3 className="font-bold text-[#F8FAFC] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#94A3B8] text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Hopkins: Objection Handling */}
            <div className="max-w-2xl mx-auto mt-12 bg-[#020617]/80 border border-[#B87333]/30 rounded-xl p-6">
              <p className="text-[#B87333] font-bold mb-2">"No tengo tiempo para implementar algo nuevo..."</p>
              <p className="text-[#94A3B8] text-sm">
                Ese es precisamente el problema. Estás tan ocupado apagando incendios que no podés construir el sistema que los prevenga.
                <span className="text-white font-medium"> Vakdor se implementa sin interrumpir tu operación actual.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section - Kennedy: Unique Position */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-accent text-[#B87333] text-lg mb-4">Soluciones para Cada Necesidad</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                No Vendemos Software. <span className="text-gradient-copper">Instalamos Resultados.</span>
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto">
                Tu data, tus reglas. La IA hace el trabajo de bajo valor cognitivo mientras vos te enfocás en lo que la máquina no puede hacer: cerrar acuerdos complejos y liderar equipos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Bot,
                  title: 'AureFlow: Tu Asistente 24/7',
                  description: 'Para asesores: La IA responde consultas, califica leads y agenda visitas por WhatsApp mientras dormís. Vos solo te presentás a cerrar.',
                },
                {
                  icon: Users,
                  title: 'Recuperador de Leads',
                  description: 'Reactivá automáticamente leads que no compraron. El sistema les avisa cuando aparece una propiedad que matchea. No perdés más oportunidades.',
                },
                {
                  icon: Building2,
                  title: 'Captación de Propiedades',
                  description: 'Para inmobiliarias: La IA rastrea portales y contacta dueños directos antes que la competencia. 5+ exclusivas al mes en piloto automático.',
                },
                {
                  icon: Trophy,
                  title: 'Performance + Capacitación',
                  description: 'Dashboard de rendimiento en tiempo real + Tutor IA que entrena a tus nuevos asesores. Control total sin micromanagement.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="kinetic-card p-8 rounded-2xl flex gap-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#F8FAFC] text-xl mb-2">{item.title}</h3>
                    <p className="text-[#94A3B8]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Cialdini: Scarcity + Bencivenga: Irresistibility */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0F172A]/50 to-[#020617]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-accent text-[#B87333] text-lg mb-4">¿Listo para Dejar de Perder Dinero?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6">
              Descubrí Cuánto Estás Dejando Sobre la Mesa
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
              En una auditoría de 30 minutos analizamos tu operación actual, identificamos las fugas de leads y diseñamos un plan concreto para tu situación. <span className="text-white font-medium">Ya seas asesor top o dirijas una inmobiliaria.</span>
            </p>
            <a
              href="https://propuesta.vakdor.com/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
            >
              Agendar Auditoría Estratégica Gratuita
            </a>
            <p className="text-sm text-[#64748B] mt-4">
              ✅ 90 días de garantía - Si no lográs el ROI proyectado, te devolvemos tu inversión.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
