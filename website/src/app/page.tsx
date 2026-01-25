'use client';

import { BackgroundLogo } from "@/components/effects/BackgroundLogo";
import { ParticleField } from "@/components/effects/ParticleField";
import Link from "next/link";
import { ArrowRight, Bot, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <ParticleField />
        
        {/* Halo Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--liquid-copper)] opacity-5 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full border border-[rgba(184,115,51,0.3)] bg-[rgba(15,23,42,0.6)] text-[var(--liquid-copper)] text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
              Infraestructura de IA para Real Estate
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-8 animate-fade-in-up">
            Operá como <br/>
            <span className="text-gradient-copper">Soberano del Mercado</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Eliminamos la fricción operativa de tu inmobiliaria. Automatiza la prospección, calificación y seguimiento para que tu equipo solo haga una cosa: <span className="text-white font-semibold">Cerrar Tratos.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
            <Link 
              href="/inmobiliaria"
              className="group relative px-8 py-4 bg-[rgba(15,23,42,0.8)] border border-[rgba(184,115,51,0.3)] rounded-xl overflow-hidden hover:border-[var(--liquid-copper)] transition-all duration-300 w-full md:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--liquid-copper)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs text-[var(--liquid-copper)] font-bold uppercase tracking-wider mb-1">Para Dueños de Agencia</span>
                <span className="text-lg font-bold text-white group-hover:text-[var(--liquid-copper)] transition-colors flex items-center gap-2">
                  Escalar mi Inmobiliaria <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            <Link 
              href="/asesor-top"
              className="group relative px-8 py-4 bg-[rgba(15,23,42,0.8)] border border-slate-700 rounded-xl overflow-hidden hover:border-slate-500 transition-all duration-300 w-full md:w-auto"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
               <div className="flex flex-col items-start text-left">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Para Asesores Independientes</span>
                <span className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors flex items-center gap-2">
                  Automatizar mis Ventas <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Strip */}
      <div className="border-y border-[rgba(184,115,51,0.1)] bg-[#020617]/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-silver">
              <div className="animate-fade-in [animation-delay:500ms]">
                 <div className="text-3xl font-display font-bold text-white mb-1">24/7</div>
                 <div className="text-sm">Respuesta Inmediata</div>
              </div>
              <div className="animate-fade-in [animation-delay:600ms]">
                 <div className="text-3xl font-display font-bold text-white mb-1">+40%</div>
                 <div className="text-sm">Conversión de Leads</div>
              </div>
              <div className="animate-fade-in [animation-delay:700ms]">
                 <div className="text-3xl font-display font-bold text-white mb-1">0</div>
                 <div className="text-sm">Data Entry Manual</div>
              </div>
              <div className="animate-fade-in [animation-delay:800ms]">
                 <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                 <div className="text-sm">Control de Calidad</div>
              </div>
           </div>
        </div>
      </div>

      {/* Value Proposition Cards */}
      <section className="py-24 relative">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-white mb-16">
              El Nuevo Estándar <br/> <span className="text-gradient-copper">de Operación</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="kinetic-card rounded-2xl p-8 group">
                   <div className="w-14 h-14 rounded-xl bg-[var(--liquid-copper)]/10 flex items-center justify-center text-[var(--liquid-copper)] mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--liquid-copper)] transition-colors">Captación de Precisión</h3>
                   <p className="text-slate-400 leading-relaxed">
                      Deja de perseguir leads fríos. Nuestros sistemas identifican y nutren prospectos automáticamente, entregándote solo citas calificadas en tu calendario.
                   </p>
                </div>

                {/* Card 2 */}
                <div className="kinetic-card rounded-2xl p-8 group">
                   <div className="w-14 h-14 rounded-xl bg-[var(--liquid-copper)]/10 flex items-center justify-center text-[var(--liquid-copper)] mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Bot size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--liquid-copper)] transition-colors">Seguimiento Infinito</h3>
                   <p className="text-slate-400 leading-relaxed">
                      Un humano olvida hacer seguimiento después del tercer intento. Nuestra IA mantiene conversaciones personalizadas durante meses hasta que el cliente está listo para comprar.
                   </p>
                </div>

                {/* Card 3 */}
                <div className="kinetic-card rounded-2xl p-8 group">
                   <div className="w-14 h-14 rounded-xl bg-[var(--liquid-copper)]/10 flex items-center justify-center text-[var(--liquid-copper)] mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--liquid-copper)] transition-colors">Velocidad de Mercado</h3>
                   <p className="text-slate-400 leading-relaxed">
                      Responde a cada consulta en menos de 30 segundos, 24/7. Sé el primero en contactar, siempre. Gana el cliente antes que tu competencia despierte.
                   </p>
                </div>
            </div>
         </div>
      </section>

       {/* Direct CTA */}
       <section className="py-20 border-t border-[rgba(184,115,51,0.1)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              ¿Tu operación está lista para escalar?
            </h2>
            <p className="text-xl text-silver max-w-2xl mx-auto mb-10">
              En una auditoría de 30 minutos analizamos tu operación actual, identificamos las fugas de leads y diseñamos un plan concreto para tu situación. <span className="text-white font-medium">Ya seas asesor top o dirijas una inmobiliaria.</span>
            </p>
            <a
              href="https://www.vakdor.com/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cta-copper px-8 py-4 rounded-xl text-lg animate-copper-glow"
            >
              Agendar Auditoría Estratégica
            </a>
          </div>
       </section>

    </main>
  );
}
