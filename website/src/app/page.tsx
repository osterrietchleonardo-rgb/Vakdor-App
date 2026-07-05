import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { NewsletterSection } from '@/components/NewsletterSection';
import { AntesDespuesSection } from '@/components/AntesDespuesSection';
import { FAQSection } from '@/components/FAQSection';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  Calendar,
  ArrowRight,
  EyeOff,
  BarChart3,
  FileStack,
  Gauge,
  Zap,
  FileText,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';

const CALL_URL = 'https://www.vakdor.com/call';

export default function HomePage() {
  const faqs = [
    {
      question: '¿Qué es PRISMA exactamente?',
      answer: 'PRISMA es un Sistema Operativo con IA para inmobiliarias. Se conecta por encima de tu CRM (Tokko Broker) y de tu WhatsApp para darte trazabilidad total de los leads, control de la performance de cada asesor y automatización de los procesos: análisis de mercado, contratos, seguimiento, marketing y capacitación del equipo.',
    },
    {
      question: '¿Tengo que cambiar mi CRM o mis herramientas?',
      answer: 'No. PRISMA se ubica por encima de lo que ya usás: se integra con Tokko Broker y con tu WhatsApp sin que tengas que migrar ni reemplazar nada.',
    },
    {
      question: '¿Cuánto tarda la implementación?',
      answer: '72 horas, llave en mano. Nosotros configuramos PRISMA para tu agencia; ni vos ni tu equipo tienen que tocar una línea de código.',
    },
    {
      question: '¿Para qué inmobiliarias es PRISMA?',
      answer: 'Para directores de inmobiliarias con 5 o más asesores que operan con Tokko Broker y quieren control real y trazable sobre su operación y su inversión en marketing.',
    },
    {
      question: '¿La IA reemplaza a mis asesores?',
      answer: 'No. La IA se ocupa de la atención inmediata, el seguimiento y la carga operativa. Tu asesor recibe los leads ya calificados y listos para cerrar, y recupera el tiempo que hoy pierde en tareas repetitivas.',
    },
    {
      question: '¿Cómo controlo la performance de mi equipo?',
      answer: 'Con un tablero en tiempo real: ranking de asesores, objetivos vs. alcanzado y la trazabilidad de cada lead. Tomás decisiones con datos duros, no con el "relato de fin de mes".',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] relative">
      {/* Particle Background */}
      <ParticleField />

      <Header />

      <main className="flex-1 relative z-10">
        {/* ============================================
            1. HERO
            ============================================ */}
        <section className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Pre-Título (Filtro) */}
            <p className="font-accent text-[#B87333] text-base md:text-lg mb-6 uppercase tracking-widest animate-fade-in">
              Exclusivo para Alta Dirección Inmobiliaria
            </p>

            {/* Titular Principal (H1) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] mb-6 leading-tight animate-fade-in-up">
              Rompé la Dependencia Operativa.
              <span className="block text-gradient-copper">Asumí el Control Integral.</span>
            </h1>

            {/* Subtítulo (H2) */}
            <p className="text-lg md:text-xl text-[#94A3B8] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-[#B87333] font-semibold">PRISMA</span> es el Sistema Operativo centralizado con IA que conecta tu CRM <span className="text-white font-medium">(Tokko Broker)</span> con tu <span className="text-white font-medium">WhatsApp</span>. Estandarizamos tus procesos, auditamos la performance de tus asesores y le damos trazabilidad matemática a tu agencia para que tu rentabilidad escale, no tu carga horaria.
            </p>

            {/* CTA Principal */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href={CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
              >
                <Calendar size={20} />
                Ver el Sistema en Vivo (Agendar Diagnóstico)
              </a>
            </div>

            {/* Prueba social inmediata */}
            <p className="mt-8 text-sm text-[#94A3B8] animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Ya lo usa una inmobiliaria de <span className="text-[#CBD5E1] font-medium">lujo</span>, referente de{' '}
              <span className="text-[#CBD5E1] font-medium">Leading Real Estate Companies of the World</span>, con sus{' '}
              <span className="text-[#CBD5E1] font-medium">60 asesores</span>.
            </p>
          </div>
        </section>

        {/* ============================================
            2. AGITACIÓN DEL PROBLEMA — La "Caja Negra"
            ============================================ */}
        <section className="py-20 px-4 bg-[#0F172A]/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F8FAFC] mb-4">
              La falta de trazabilidad te obliga a <span className="text-gradient-copper">liderar a ciegas.</span>
            </h2>
            <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
              Tu agencia opera como una caja negra: entra tu inversión, salen resultados, pero vos no tenés idea de lo que pasa en el medio. Y eso, en el fondo, te quita el sueño.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: EyeOff,
                  title: 'Inversión Ciega',
                  description: 'Pagás fortunas en Zonaprop y Meta Ads, pero la atención ocurre en los celulares personales de tus asesores. No sabés a qué hora contestan, qué dicen ni por qué se enfría una operación. Estás financiando un proceso que no podés ver.',
                },
                {
                  icon: BarChart3,
                  title: 'El Relato de Fin de Mes',
                  description: 'Llega el cierre y tu única fuente de verdad es lo que tu equipo decide contarte. Tomás decisiones sobre tu dinero a partir de la "sensación" del mercado y de excusas, no de hechos. En el fondo, sospechás que te estás perdiendo algo.',
                },
                {
                  icon: FileStack,
                  title: 'Sos Esclavo de la Operación',
                  description: 'Tasaciones, marketing, cruzar demanda: cientos de horas manuales que terminan recayendo en vos. Dejaste de dirigir tu agencia para apagar incendios. Tu tiempo físico se volvió el techo del negocio… y de tu propia vida.',
                },
              ].map((item, index) => (
                <div key={index} className="kinetic-card p-8 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center mb-5">
                    <item.icon className="text-[#B87333]" size={24} />
                  </div>
                  <h3 className="font-bold text-[#F8FAFC] text-lg mb-3">{item.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            3. EL GIRO — El Cambio de Paradigma
            ============================================ */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-8 leading-tight">
              Tu problema no es la retención de talento. <span className="text-gradient-copper">Es la falta de arquitectura.</span>
            </h2>
            <div className="kinetic-card rounded-2xl p-8 md:p-10 border-l-2 border-[#B87333]/40">
              <p className="text-lg md:text-xl text-[#CBD5E1] leading-relaxed">
                El voluntarismo no escala. Si querés crecer sin multiplicar tus costos fijos ni consumir tu vida apagando incendios operativos, tenés que dejar de depender del criterio humano. Es hora de conectar los cables sueltos de tu inmobiliaria bajo un <span className="text-white font-semibold">único panel de control.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            4. LA SOLUCIÓN — El Sistema PRISMA
            ============================================ */}
        <section className="py-20 px-4 bg-[#0F172A]/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-accent text-[#B87333] text-lg mb-4">El Sistema PRISMA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6 leading-tight">
                El Sistema Operativo que convierte el caos en una <span className="text-gradient-copper">Línea de Ensamble.</span>
              </h2>
              <p className="text-[#94A3B8] max-w-3xl mx-auto">
                PRISMA no es un chatbot. Es un SaaS integral que se ubica por encima de tus herramientas actuales para darte <span className="text-white font-medium">gobernanza total.</span>
              </p>
            </div>

            {/* Video Demo de PRISMA */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative rounded-2xl overflow-hidden border border-[#B87333]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] shadow-[#B87333]/10">
                {/* Glow */}
                <div className="absolute -inset-4 bg-[#B87333]/20 blur-3xl -z-10 rounded-full" />
                <video
                  className="w-full h-auto block bg-[#020617]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="https://upggigryxdvcmnuwafyl.supabase.co/storage/v1/object/public/videos/prisma-poster.png"
                >
                  <source src="https://upggigryxdvcmnuwafyl.supabase.co/storage/v1/object/public/videos/prisma-demo.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
              <p className="text-center text-xs text-[#64748B] mt-3 italic">
                PRISMA en acción: del lead a la trazabilidad total bajo un único panel de control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  tag: 'Módulo 1',
                  title: 'Cero Fugas',
                  description: 'Dejá de ver cómo cada peso que invertís en marketing se evapora. PRISMA atiende, pre-califica y perfila cada lead que entra en menos de 2 minutos, cualquier día y a cualquier hora. Conectamos el punto ciego entre tu publicidad y tu CRM: ni una sola oportunidad vuelve a enfriarse por falta de respuesta.',
                },
                {
                  icon: Gauge,
                  tag: 'Módulo 2',
                  title: 'Trazabilidad y Performance',
                  description: 'Se acabó el liderazgo a ciegas y el "relato de fin de mes". Desde tu panel de director tenés la verdad en tiempo real: sabés exactamente qué asesor marca el ritmo y quién deja enfriar las operaciones. Volvés a tomar decisiones con datos duros y a dormir tranquilo.',
                },
                {
                  icon: FileText,
                  tag: 'Módulo 3',
                  title: 'Eliminación de Burocracia',
                  description: 'Recuperá tu tiempo y tu vida. La IA cruza la demanda con tu stock en segundos, genera los contratos y estandariza el marketing de todo tu equipo con un clic. La máquina arma la marca; tu gente cierra. Tu agenda deja de ser el techo de crecimiento del negocio.',
                },
                {
                  icon: GraduationCap,
                  tag: 'Módulo 4',
                  title: 'Clonamos tu Cerebro (Tutor IA)',
                  description: 'Que un asesor renuncie deja de ser una herida. El Tutor y el Consultor IA asisten y entrenan a tu equipo 24/7 con tu propia metodología de venta. El conocimiento ya no se va por la puerta: queda centralizado en tu empresa, para siempre.',
                },
              ].map((item, index) => (
                <div key={index} className="kinetic-card p-8 rounded-2xl flex gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#B87333] mb-2">{item.tag}</span>
                    <h3 className="font-bold text-[#F8FAFC] text-xl mb-2">{item.title}</h3>
                    <p className="text-[#94A3B8] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            4.5. RESULTADOS — Antes vs Después (prueba concreta)
            ============================================ */}
        <AntesDespuesSection />

        {/* ============================================
            5. CALIFICACIÓN — El Filtro
            ============================================ */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4 leading-tight">
                PRISMA opera a nivel Enterprise. <span className="text-gradient-copper">No es para cualquier agencia.</span>
              </h2>
            </div>

            <div className="kinetic-card rounded-2xl p-8 md:p-10 space-y-5">
              {[
                'Exclusivo para inmobiliarias operando con Tokko Broker.',
                'Equipos comerciales de 5 o más asesores.',
                'Directores que exigen trazabilidad real sobre su inversión en marketing.',
                'Líderes dispuestos a cambiar excusas por datos duros.',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-[#B87333] mt-0.5 flex-shrink-0" />
                  <p className="text-[#CBD5E1] text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            5.5. PREGUNTAS FRECUENTES (FAQ visible + schema para SEO/GEO)
            ============================================ */}
        <FAQSection items={faqs} />
        <JsonLd data={faqSchema} />

        {/* ============================================
            6. CIERRE Y CTA FINAL
            ============================================ */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617] relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-[#B87333]/20 rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6 leading-tight">
              ¿Listo para dejar de ser empleado de tu propia agencia?
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto leading-relaxed">
              Sistematizamos el control integral de tu agencia en formato <span className="text-white font-medium">&quot;Llave en Mano&quot;</span>. Implementación en <span className="text-[#B87333] font-semibold">72 horas</span>, sin que vos ni tu equipo tengan que configurar nada ni tocar una línea de código. Recuperá el control hoy mismo.
            </p>
            <a
              href={CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
            >
              <Calendar size={20} />
              Agendar Diagnóstico Operativo (Ver PRISMA en Vivo)
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection source="home" />
      </main>

      <Footer />
    </div>
  );
}
