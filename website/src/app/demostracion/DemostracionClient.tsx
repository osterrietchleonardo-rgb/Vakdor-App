"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { VslVideoPlayer } from "@/components/vsl/VslVideoPlayer";
import { FAQSection } from "@/components/FAQSection";
import { Zap, Shield, TrendingUp, Sparkles, Award, Calendar, ArrowRight } from "lucide-react";

import { trackViewDemostracion, trackVslWatch100, trackClickAgendarCTA } from "@/lib/analytics";

interface DemostracionClientProps {
  videoUrl: string;
  posterUrl?: string;
}

export const DemostracionClient: React.FC<DemostracionClientProps> = ({ videoUrl, posterUrl }) => {
  useEffect(() => {
    trackViewDemostracion();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
      {/* 1. ENCABEZADO */}
      <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333] text-xs md:text-sm font-semibold tracking-wide uppercase shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B87333] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87333]"></span>
          </span>
          Presentación de PRISMA · 7 minutos
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
          Dejá de Liderar a Ciegas: <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87333] via-[#D4A574] to-[#B87333]">
            Mirá Cómo PRISMA Elimina la Dependencia Operativa
          </span>{" "}
          en tu Inmobiliaria.
        </h1>

        <p className="text-sm md:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
          En 7 minutos te mostramos PRISMA funcionando y te contestamos las preguntas que se hace cualquiera que dirige una
          inmobiliaria: <strong className="text-white font-semibold">si es un bot más, qué pasa si la IA contesta mal, si tenés que configurar algo,
          cuánto tiempo te ahorra y por qué no armarlo vos.</strong>
        </p>

      </div>

      {/* 2. VIDEO */}
      <div className="relative">
        <VslVideoPlayer videoUrl={videoUrl} posterUrl={posterUrl} onCompletion={trackVslWatch100} />
      </div>

      {/* 3. AGENDAR: siempre visible, no hace falta terminar el video */}
      <div className="p-6 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#020617] to-[#1E293B] border-2 border-[#B87333] shadow-[0_0_60px_rgba(184,115,51,0.25)] text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
          <Sparkles className="w-40 h-40 text-[#B87333]" />
        </div>

        <h2 className="text-2xl md:text-5xl font-display font-extrabold text-white leading-tight">
          Conozcámonos y veamos si PRISMA te sirve de verdad
        </h2>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Una charla de 30 minutos: nos contás cómo trabaja hoy tu inmobiliaria, vemos juntos tus necesidades reales y, si
          PRISMA puede ayudarte, los próximos pasos. <span className="text-white font-semibold">Si no es para vos, te lo vamos a decir.</span>
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left pt-2">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-[#B87333] font-bold text-sm block">✓ Charla 1 a 1</span>
            <p className="text-xs text-slate-400">Directo con el equipo fundador de PRISMA.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-[#B87333] font-bold text-sm block">✓ Prioridad 72 hs</span>
            <p className="text-xs text-slate-400">Si avanzás, lo dejamos andando en menos de 72 horas.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-[#B87333] font-bold text-sm block">✓ 20% OFF primer mes</span>
            <p className="text-xs text-slate-400">Para quien agenda la charla desde esta página.</p>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/call"
            onClick={() => trackClickAgendarCTA('demostracion_vsl')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B87333] via-[#D4A574] to-[#B87333] hover:from-[#A05A2C] hover:to-[#8B4513] text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl text-base md:text-xl font-extrabold shadow-[0_0_35px_rgba(184,115,51,0.4)] hover:shadow-[0_0_50px_rgba(184,115,51,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0" />
            <span>Agendar una charla para conocernos</span>
            <ArrowRight className="w-5 h-5 text-white shrink-0" />
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 text-slate-400 text-xs font-mono bg-slate-950/80 px-4 py-2 rounded-lg border border-slate-800">
            <Award className="w-4 h-4 text-[#B87333] shrink-0" />
            <span>Cupos de onboarding limitados para garantizar soporte ejecutivo exclusivo a cada agencia.</span>
          </div>
        </div>
      </div>

      {/* 4. PILARES DE VALOR */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="kinetic-card p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
          <div className="p-3 w-fit rounded-xl bg-[#B87333]/10 text-[#B87333] border border-[#B87333]/20">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-white font-bold text-lg">Trazabilidad Total de Leads</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Eliminá la "caja negra" entre Tokko y WhatsApp. Cada oportunidad es atendida, pre-calificada y registrada en tiempo real.
          </p>
        </div>

        <div className="kinetic-card p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
          <div className="p-3 w-fit rounded-xl bg-[#B87333]/10 text-[#B87333] border border-[#B87333]/20">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-white font-bold text-lg">Tracking de Performance</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Tablero directivo con métricas objetivas para auditar la actividad de tus asesores sin depender de reportes manuales.
          </p>
        </div>

        <div className="kinetic-card p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
          <div className="p-3 w-fit rounded-xl bg-[#B87333]/10 text-[#B87333] border border-[#B87333]/20">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-white font-bold text-lg">Setup Llave en Mano (72hs)</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            SaaS ya desarrollado y probado. Nuestro equipo realiza la configuración personalizada de tu agencia sin fricción técnica.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="font-accent text-[#B87333] text-base md:text-lg italic bg-[#5C3D2E]/20 border border-[#B87333]/20 rounded-xl py-3 px-6 inline-block">
          "El voluntarismo no escala. Lo que no se mide, no se puede controlar ni rentabilizar."
        </p>
      </div>

      {/* 5. PREGUNTAS FRECUENTES */}
      <div className="pt-4">
        <FAQSection
          title="Preguntas Frecuentes de la Demostración"
          subtitle="Respuestas claras a las dudas más comunes sobre la implementación de PRISMA."
          items={[
            {
              question: "¿Qué es PRISMA y en qué se diferencia de un CRM o un bot tradicional?",
              answer:
                "PRISMA es el Sistema Operativo centralizado con IA diseñado para inmobiliarias. No es un CRM más ni un bot suelto: conecta Tokko Broker con WhatsApp para eliminar tu dependencia operativa, estandarizar tus procesos y entregarte un tablero con trazabilidad matemática de cada lead y cada asesor.",
            },
            {
              question: "¿Tengo que cambiar mi CRM actual (Tokko Broker)?",
              answer:
                "No. PRISMA se conecta nativamente con Tokko Broker y WhatsApp. Potencia tus herramientas actuales sin que tengas que migrar datos ni cambiar el CRM que tu equipo ya utiliza.",
            },
            {
              question: "¿Cuánto tarda la implementación Llave en Mano?",
              answer:
                "El Onboarding guiado (Setup Done-For-You) se completa en menos de 72 horas. Nuestro equipo realiza la configuración integral sin que vos ni tus asesores tengan que realizar trabajo técnico.",
            },
            {
              question: "¿Cómo funciona el beneficio del 20% OFF en el primer mes?",
              answer:
                "Si agendás la charla desde esta página y después decidís avanzar con PRISMA, tenés un 20% de descuento en tu primer mes de suscripción y prioridad en la cola de onboarding.",
            },
            {
              question: "¿Qué pasa si mis asesores no quieren cargar datos manualmente?",
              answer:
                "PRISMA opera directamente sobre WhatsApp. La IA asume la carga burocrática y califica a los prospectos, registrando la actividad sin esfuerzo manual y haciendo que tus asesores solo reciban prospectos listos para visitar.",
            },
          ]}
        />
      </div>
    </div>
  );
};
