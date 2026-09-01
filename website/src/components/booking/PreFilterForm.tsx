"use client";

import React, { useEffect, useState } from "react";
import { BookingCalendar } from "./BookingCalendar";
import { trackLead, newEventId, trackViewPrefilterForm, trackViewCalendar, trackPrefilterNoCalificado, getTrackContext } from "@/lib/analytics";
import { CheckCircle2, Sparkles, AlertCircle, ArrowRight, ShieldCheck, User, Mail, Phone, Building2, Layers, CheckSquare, Lock } from "lucide-react";

export function PreFilterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    advisors: "+15",
    properties: "+300",
    crm: "Tokko Broker",
    investmentReady: "si",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "submitted">("idle");
  const [isQualified, setIsQualified] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Paso 5 del embudo: el visitante llegó al formulario de pre-filtro.
  useEffect(() => {
    trackViewPrefilterForm("call_page");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim()) {
      setErrorMessage("Por favor completá tu nombre, email, teléfono y el nombre de la inmobiliaria.");
      return;
    }

    setStatus("loading");

    // Lógica de Calificación (Permite agendar a partir de 10+ asesores y 150+ propiedades)
    const qualified =
      formData.advisors !== "menos-10" &&
      formData.properties !== "menos-150" &&
      formData.investmentReady === "si";

    // Generar eventId compartido para deduplicar Pixel (navegador) con CAPI (servidor)
    const leadEventId = newEventId();

    try {
      await fetch("/api/prefilter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          qualified,
          eventId: leadEventId,
          // Contexto de GA4 para que el evento server-side se atribuya a esta sesión.
          ...getTrackContext(),
        }),
      });

      // Disparar Lead en el Pixel del navegador con el mismo eventId (dedupe con CAPI)
      trackLead('prefilter_prisma', leadEventId);

      setIsQualified(qualified);
      setStatus("submitted");
      // Paso 7 del embudo: solo los calificados ven el calendario.
      // Al que no califica lo contamos aparte: no es una fuga, es el filtro haciendo su trabajo.
      if (qualified) trackViewCalendar();
      else trackPrefilterNoCalificado('prefilter_prisma');
    } catch (err) {
      console.error("Error al enviar pre-filtro:", err);
      // Avanzar de todos modos para no bloquear al lead en caso de problema de red
      setIsQualified(qualified);
      setStatus("submitted");
      if (qualified) trackViewCalendar();
      else trackPrefilterNoCalificado('prefilter_prisma');
    }
  };

  return (
    <div className="w-full space-y-8">
      {status !== "submitted" && (
        <div className="max-w-3xl mx-auto bg-slate-900/80 border border-[#B87333]/40 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(184,115,51,0.15)] backdrop-blur-md relative overflow-hidden">
          {/* Luz sutil de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B87333]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 mb-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Paso 1 de 2: Pre-Filtro Ejecutivo de Viabilidad
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              Verificá el Encaje Operativo de tu Inmobiliaria
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Completá estos datos estratégicos para verificar si tu empresa reúne las condiciones para la implementación de <strong className="text-white">PRISMA</strong> antes de seleccionar el horario en el calendario.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Datos Personales y de Contacto */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#B87333]" /> Nombre y Apellido *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Marcelo Fernández"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#B87333]" /> Email Corporativo *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="marcelo@inmobiliaria.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#B87333]" /> WhatsApp / Celular *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 9 11 1234-5678"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                />
              </div>
            </div>

            {/* Datos de la Inmobiliaria */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#B87333]" /> Nombre de la Inmobiliaria *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Ej: Toribio Achával / Inmobiliaria Nordelta"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B87333]" /> Sitio Web de la Inmobiliaria
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="www.tuinmobiliaria.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                />
              </div>
            </div>

            {/* Preguntas Operativas del Pre-Filtro */}
            <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#B87333]" /> Equipo comercial (Asesores activamente operando)
                </label>
                <select
                  name="advisors"
                  value={formData.advisors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                >
                  <option value="+15">Más de 15 asesores (Recomendado)</option>
                  <option value="+30">Más de 30 asesores (Estructura Grande)</option>
                  <option value="10-14">De 10 a 14 asesores</option>
                  <option value="menos-10">Menos de 10 asesores</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#B87333]" /> Cartera activa de propiedades captadas
                </label>
                <select
                  name="properties"
                  value={formData.properties}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                >
                  <option value="+300">Más de 300 propiedades (Recomendado)</option>
                  <option value="+500">Más de 500 propiedades</option>
                  <option value="150-299">150 a 299 propiedades</option>
                  <option value="menos-150">Menos de 150 propiedades</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-[#B87333]" /> CRM en uso actualmente
                </label>
                <select
                  name="crm"
                  value={formData.crm}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                >
                  <option value="Tokko Broker">Tokko Broker</option>
                  <option value="Zonaprop / Argenprop CRM">Zonaprop / Argenprop CRM</option>
                  <option value="CRM Propio / In-House">CRM Propio o a Medida</option>
                  <option value="Otro CRM">Otro CRM inmobiliario</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B87333]" /> ¿Buscan sistematizar su operación este mes?
                </label>
                <select
                  name="investmentReady"
                  value={formData.investmentReady}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333] transition-all"
                >
                  <option value="si">Sí, listos para evaluar e implementar Llave en Mano</option>
                  <option value="evaluando">Solo estamos explorando información inicial</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#B87333]" />
                Tus datos están protegidos bajo estricto acuerdo de confidencialidad.
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#B87333] to-[#D4A574] text-slate-950 font-bold text-base hover:brightness-110 transition-all shadow-[0_0_30px_rgba(184,115,51,0.3)] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Evaluando requisitos...</span>
                ) : (
                  <>
                    <span>Verificar y Desbloquear Calendario</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* RESULTADO 1: CALIFICADO - MOSTRAR CALENDARIO */}
      {status === "submitted" && isQualified && (
        <div className="space-y-8 animate-fade-in">
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-center space-y-2 backdrop-blur-md shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Pre-Calificación Aprobada 100%
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white">
              ¡Tu Inmobiliaria reúne las condiciones para implementar PRISMA!
            </h4>
            <p className="text-xs md:text-sm text-emerald-300/80 max-w-2xl mx-auto">
              Seleccioná a continuación el día y la hora que mejor se adapten a tu agenda directiva para la sesión ejecutiva de 30 minutos.
            </p>
          </div>

          {/* Calendario Desbloqueado */}
          <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-3xl p-4 md:p-8 shadow-2xl backdrop-blur-md">
            <BookingCalendar />
          </div>
        </div>
      )}

      {/* RESULTADO 2: NO CALIFICADO AÚN - MUESTRA ASISTENCIA DIRECTA */}
      {status === "submitted" && !isQualified && (
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-slate-900/90 border border-amber-500/40 text-slate-200 space-y-6 text-center shadow-2xl backdrop-blur-md animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
            <AlertCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-bold text-white">
              Gracias por completar el pre-filtro de evaluación
            </h4>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Actualmente priorizamos la agendamiento directo de implementar <strong className="text-white">PRISMA</strong> para operaciones de mayor volumen (+15 asesores y +300 propiedades).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs md:text-sm space-y-2 max-w-lg mx-auto text-slate-400">
            <div className="font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B87333]" />
              Tu caso ha quedado guardado en prioridad:
            </div>
            <p>
              Nos pondremos en contacto a la brevedad al email <strong className="text-slate-200">{formData.email}</strong> para ofrecerte nuestros recursos de automatización iniciales o evaluar alternativas de implementación gradual.
            </p>
          </div>

          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Modificar respuestas del formulario
          </button>
        </div>
      )}
    </div>
  );
}
