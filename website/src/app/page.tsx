import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { ArrowRight, Bot, Building2, Users, Zap, Trophy, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] relative">
      {/* Particle Background */}
      <ParticleField />

      <Header />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Accent Quote */}
            <p className="font-accent text-[#B87333] text-lg md:text-xl mb-6 animate-fade-in">
              "Donde el legado se encuentra con el algoritmo"
            </p>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] mb-6 leading-tight animate-fade-in-up">
              La Mayoría de las Inmobiliarias
              <span className="block text-gradient-copper">Pierde Miles de Dólares</span>
              al Año Sin Saberlo
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#94A3B8] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              No es por falta de esfuerzo. Es porque responder WhatsApps a las 11 de la noche
              y perseguir leads manualmente no escala. Te mostramos cómo la IA hace ese trabajo por vos.
            </p>

            {/* Segmentador Buttons */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/asesor-top"
                className="kinetic-card p-8 rounded-2xl text-left group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={28} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#F8FAFC] mb-2">
                  SOY ASESOR INMOBILIARIO
                </h2>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Quiero dejar de trabajar fines de semana y ganar más sin vivir pegado al celular
                </p>
                <span className="inline-flex items-center gap-2 text-[#B87333] font-semibold text-sm group-hover:gap-3 transition-all">
                  VER CÓMO FUNCIONA <ArrowRight size={16} />
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
                  Necesito que mi equipo sea más productivo sin tener que estar vigilándolos todo el tiempo
                </p>
                <span className="inline-flex items-center gap-2 text-[#B87333] font-semibold text-sm group-hover:gap-3 transition-all">
                  VER LA SOLUCIÓN <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 bg-[#0F172A]/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC] mb-4">
              La Realidad del Sector Inmobiliario Hoy
            </h2>
            <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
              Mientras otros sectores avanzan con tecnología, el inmobiliario sigue atrapado en procesos manuales
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Si eres Asesor',
                  description: 'Pasás 20+ horas semanales respondiendo las mismas preguntas por WhatsApp.',
                  stat: '20+ hrs',
                  statLabel: 'perdidas por semana'
                },
                {
                  icon: Trophy,
                  title: 'Si dirigís una Inmobiliaria',
                  description: 'Un tercio de tus leads se pierden porque nadie hace seguimiento después del primer mes.',
                  stat: '33%',
                  statLabel: 'leads perdidos'
                },
                {
                  icon: Zap,
                  title: 'Lo que pasa si no hacés nada',
                  description: 'Mientras dormís, tu competencia que sí usa tecnología se lleva los mejores clientes.',
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

        {/* Solution Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-accent text-[#B87333] text-lg mb-4">La Solución</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                Automatización Inteligente para el Sector Inmobiliario
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto">
                No reemplazamos tu trabajo, lo potenciamos. La IA hace el seguimiento 24/7 mientras vos cerrás operaciones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Bot,
                  title: 'Asistente Virtual 24/7',
                  description: 'Responde consultas, califica leads y agenda visitas mientras dormís. Como tener un equipo que nunca descansa.',
                },
                {
                  icon: Building2,
                  title: 'Captación Automática',
                  description: 'Rastrea portales inmobiliarios y contacta propietarios antes que tu competencia. Captación en piloto automático.',
                },
                {
                  icon: Users,
                  title: 'Seguimiento Inteligente',
                  description: 'Ningún lead se pierde. El sistema hace seguimiento personalizado hasta que estén listos para comprar.',
                },
                {
                  icon: Trophy,
                  title: 'Dashboard de Rendimiento',
                  description: 'Visualiza el rendimiento de tu equipo en tiempo real. Identifica oportunidades y problemas al instante.',
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

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0F172A]/50 to-[#020617]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-accent text-[#B87333] text-lg mb-4">¿Listo para empezar?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6">
              Descubrí Cuánto Estás Perdiendo y Cómo Recuperarlo
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
              En una llamada de 15 minutos te mostramos exactamente cuánto dinero está dejando
              tu inmobiliaria sobre la mesa y cómo podemos ayudarte a recuperarlo.
            </p>
            <a
              href="https://propuesta.vakdor.com/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
            >
              Agendar Llamada Estratégica
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
