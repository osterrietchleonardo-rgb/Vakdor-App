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
              "Donde el Legado se encuentra con el Algoritmo"
            </p>

            {/* Main Title - Halbert/Belfort: Pain + Transformation */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] mb-6 leading-tight animate-fade-in-up">
              El 80% de tu Esfuerzo es Ruido.
              <span className="block text-gradient-copper">Dejá de Ser un Operario</span>
              y Convertite en el Arquitecto de tu Negocio.
            </h1>

            {/* Subtitle - Sugarman: Slippery Slide */}
            <p className="text-lg md:text-xl text-[#94A3B8] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Te instalamos la <span className="text-[#B87333] font-semibold">Arquitectura de Venta Autónoma</span> que trabaja 24/7.
              El único sistema que te permite enfocarte en el cierre y <span className="text-white font-medium">recuperar tus fines de semana</span>.
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
                  Quiero Dejar de Ser un Esclavo del WhatsApp y <span className="text-[#B87333] font-semibold">Duplicar mis Cierres</span>.
                </p>
                <span className="inline-flex items-center gap-2 text-[#B87333] font-semibold text-sm group-hover:gap-3 transition-all">
                  VER EL SISTEMA QUE GARANTIZA EL ROI <ArrowRight size={16} />
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
                  Necesito <span className="text-[#B87333] font-semibold">Captación Exclusiva</span> y Control Total del ROI.
                </p>
                <span className="inline-flex items-center gap-2 text-[#B87333] font-semibold text-sm group-hover:gap-3 transition-all">
                  VER EL SISTEMA QUE GARANTIZA EL ROI <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section - Cialdini: Authority + Data */}
        <section className="py-20 px-4 bg-[#0F172A]/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC] mb-4">
              El Costo Oculto de la Fricción Manual: <span className="text-gradient-copper">¿Cuánto Dinero Dejás Sobre la Mesa?</span>
            </h2>
            <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
              Mientras otros sectores escalan con tecnología, el inmobiliario sigue atrapado en procesos que queman equipos y pierden clientes.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Si Sos Asesor',
                  description: 'Pasás 20+ horas semanales respondiendo las mismas preguntas. Tiempo que podrías usar para cerrar.',
                  stat: '20+ hrs',
                  statLabel: 'perdidas por semana'
                },
                {
                  icon: TrendingDown,
                  title: '33% de Leads Desperdiciados',
                  description: 'Un tercio de tu inversión en marketing se esfuma porque nadie hace seguimiento. Vakdor te devuelve ese dinero.',
                  stat: '33%',
                  statLabel: 'leads perdidos'
                },
                {
                  icon: AlertTriangle,
                  title: 'Mientras Dormís',
                  description: 'Tu competencia que sí usa tecnología se lleva los mejores clientes. La diferencia se mide en minutos.',
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
          </div>
        </section>

        {/* Solution Section - Kennedy: Unique Position */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-accent text-[#B87333] text-lg mb-4">La Arquitectura de Venta Autónoma</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                No Vendemos Software. <span className="text-gradient-copper">Instalamos un Sistema de Control Total.</span>
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto">
                Tu data, tus reglas. La IA hace el trabajo de bajo valor cognitivo mientras vos te enfocás en lo que la máquina no puede hacer: cerrar acuerdos complejos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Bot,
                  title: 'Asistente Virtual 24/7',
                  description: 'Responde consultas, califica leads y agenda visitas mientras dormís. Como tener un equipo que nunca descansa y nunca se queja.',
                },
                {
                  icon: Building2,
                  title: 'Captación Automática',
                  description: 'Rastrea portales inmobiliarios y contacta propietarios antes que tu competencia. Captación en piloto automático, 5+ exclusivas al mes.',
                },
                {
                  icon: Users,
                  title: 'Seguimiento Perpetuo',
                  description: 'Ningún lead se pierde. El sistema hace seguimiento personalizado durante 18 meses hasta que estén listos para comprar.',
                },
                {
                  icon: Trophy,
                  title: 'Dashboard de Performance',
                  description: 'Visualiza el rendimiento de tu equipo en tiempo real. Identificá quién convierte y quién está a punto de irse antes de que renuncie.',
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
            <p className="font-accent text-[#B87333] text-lg mb-4">¿Listo para la Transformación?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6">
              Descubrí la Arquitectura de la Venta Autónoma
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
              En una auditoría estratégica de 30 minutos te mostramos exactamente cuánto dinero está dejando
              tu operación sobre la mesa y cómo podemos ayudarte a recuperarlo. <span className="text-white font-medium">Espacios limitados por mes.</span>
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
