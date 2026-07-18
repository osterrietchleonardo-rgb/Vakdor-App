"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { VslVideoPlayer } from "@/components/vsl/VslVideoPlayer";
import { FAQSection } from "@/components/FAQSection";
import { Zap, Shield, TrendingUp, Lock, Unlock, CheckCircle2, ArrowDown, Sparkles, Award, Calendar, ArrowRight } from "lucide-react";

interface DemostracionClientProps {
  videoUrl: string;
}

const STORAGE_KEY = "vakdor_vsl_progress_v1";

export const DemostracionClient: React.FC<DemostracionClientProps> = ({ videoUrl }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const bookingRef = useRef<HTMLDivElement | null>(null);

  // Verificar si ya fue visto 100% anteriormente
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.isCompleted) {
          setIsUnlocked(true);
        }
      }
    } catch (e) {}
  }, []);

  const handleVideoCompletion = () => {
    setIsUnlocked(true);
    // Smooth scroll al calendario al desbloquear
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* 1. SECCIÓN DE ENCABEZADO Y COPY DE ALTA AUTORIDAD */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        {/* Badge Ejecutivo */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333] text-xs md:text-sm font-semibold tracking-wide uppercase shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B87333] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87333]"></span>
          </span>
          Demostración Ejecutiva Exclusiva · 17 Minutos
        </div>

        {/* Título Principal Potente (H1) */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
          Dejá de Liderar a Ciegas: <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87333] via-[#D4A574] to-[#B87333]">
            Mirá Cómo PRISMA Elimina la Dependencia Operativa
          </span>{" "}
          en tu Inmobiliaria.
        </h1>

        {/* Subtítulo Descriptivo */}
        <p className="text-base md:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
          En esta demostración ejecutiva, Leo (Fundador y CEO de Vakdor) te muestra por dentro la arquitectura que conecta{" "}
          <strong className="text-white font-semibold">Tokko Broker con WhatsApp</strong> para transformar el caos diario en trazabilidad matemática.
        </p>

        {/* Big Idea Quote */}
        <div className="pt-2">
          <p className="font-accent text-[#B87333] text-base md:text-lg italic bg-[#5C3D2E]/20 border border-[#B87333]/20 rounded-xl py-3 px-6 inline-block">
            "El voluntarismo no escala. Lo que no se mide, no se puede controlar ni rentabilizar."
          </p>
        </div>
      </div>

      {/* 2. REPRODUCTOR DE VIDEO VSL CUSTOM CON ANTI-SKIP */}
      <div className="relative">
        <VslVideoPlayer videoUrl={videoUrl} onCompletion={handleVideoCompletion} />
      </div>

      {/* 3. GRILLA DE PILARES DE VALOR (3 Ejes) */}
      <div className="grid md:grid-cols-3 gap-6 pt-6">
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

      {/* 4. SECCIÓN DE AGENDAMIENTO DESBLOQUEADA AL 100% */}
      <div ref={bookingRef} className="pt-8">
        {isUnlocked ? (
          <div className="space-y-6 animate-fade-in">
            {/* Encabezado Desbloqueado de Alto Impacto */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#020617] to-[#1E293B] border-2 border-[#B87333] shadow-[0_0_60px_rgba(184,115,51,0.25)] text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Sparkles className="w-40 h-40 text-[#B87333]" />
              </div>

              {/* Badge Desbloqueado */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Acceso Desbloqueado · 100% Demostración Completada</span>
              </div>

              {/* Titular Potente */}
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
                ¿Listo para Evaluar si PRISMA es para Tu Inmobiliaria?
              </h2>

              {/* Subtítulo con Beneficios Exclusivos */}
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Al haber completado los 17 minutos de demostración ejecutiva, tenés reservada{" "}
                <span className="text-[#B87333] font-semibold">Prioridad de Setup en 72hs + 20% OFF en tu primer mes</span> para tu agendamiento.
              </p>

              {/* Bullet Points de Valor */}
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left pt-2">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-[#B87333] font-bold text-sm block">✓ Prioridad 72hs</span>
                  <p className="text-xs text-slate-400">Setup Llave en Mano garantizado sin espera técnica.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-[#B87333] font-bold text-sm block">✓ 20% OFF Primer Mes</span>
                  <p className="text-xs text-slate-400">Beneficio exclusivo por completar la demostración.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-[#B87333] font-bold text-sm block">✓ Evaluación 1 a 1</span>
                  <p className="text-xs text-slate-400">Sesión ejecutiva directa con el equipo fundador.</p>
                </div>
              </div>

              {/* Botón Principal CTA a /call */}
              <div className="pt-4">
                <Link
                  href="/call"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B87333] via-[#D4A574] to-[#B87333] hover:from-[#A05A2C] hover:to-[#8B4513] text-white px-8 py-5 rounded-2xl text-lg md:text-xl font-extrabold shadow-[0_0_35px_rgba(184,115,51,0.4)] hover:shadow-[0_0_50px_rgba(184,115,51,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Calendar className="w-6 h-6 text-white" />
                  <span>Agendar Mi Sesión de Evaluación (Prioridad + 20% OFF)</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>

              {/* Escasez y Garantía */}
              <div className="pt-2 flex justify-center">
                <div className="inline-flex items-center gap-2 text-slate-400 text-xs font-mono bg-slate-950/80 px-4 py-2 rounded-lg border border-slate-800">
                  <Award className="w-4 h-4 text-[#B87333]" />
                  <span>Cupos de onboarding limitados para garantizar soporte ejecutivo exclusivo a cada agencia.</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Estado Bloqueado */
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-6 backdrop-blur-sm">
            <div className="p-4 w-fit mx-auto rounded-2xl bg-slate-800/80 border border-slate-700 text-[#B87333]">
              <Lock className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Agenda Bloqueada Temporalmente
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Para asegurar que recibas propuestas 100% personalizadas, la agenda se habilitará automáticamente al completar el 100% de la demostración en video.
              </p>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B87333] bg-[#B87333]/10 px-4 py-2 rounded-full border border-[#B87333]/20">
                <span>Mirá el video de 17 minutos para desbloquear la reserva</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5. SECCIÓN FAQ (Preguntas Frecuentes) */}
      <div className="pt-12">
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
                "Al haber completado el 100% de esta demostración, accedés automáticamente a un descuento del 20% en tu primer mes de suscripción y prioridad en la cola de onboarding al agendar tu Diagnóstico Operativo de 30 minutos.",
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
