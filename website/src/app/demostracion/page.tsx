import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticleField } from "@/components/effects/ParticleField";
import { NewsletterSection } from "@/components/NewsletterSection";
import { DemostracionClient } from "./DemostracionClient";

export const metadata = {
  title: "Demostración Exclusiva: El Sistema Operativo PRISMA | Vakdor",
  description:
    "Mirá en 7 minutos PRISMA funcionando: super agentes que atienden, siguen y derivan cada consulta, con cada decisión a la vista. Conectado a Tokko Broker y a tu WhatsApp.",
  alternates: { canonical: "/demostracion" },
  openGraph: {
    title: "Demostración Exclusiva: El Sistema Operativo PRISMA | Vakdor",
    description:
      "Descubrí cómo eliminar la dependencia operativa y darle trazabilidad matemática a tu inmobiliaria.",
    url: "https://vakdor.com/demostracion",
    images: [{ url: "/demostracion-portada.jpg", width: 1920, height: 1080 }],
    siteName: "Vakdor PRISMA",
    locale: "es_AR",
    type: "website",
  },
};

export default function DemostracionPage() {
  // Presentación de PRISMA para directores (v2, 6:46). Release público del repo Vakdor-App.
  const videoUrl = "https://github.com/osterrietchleonardo-rgb/Vakdor-App/releases/download/v2.0.0/prisma-directores-v2.mp4";
  const posterUrl = "/demostracion-portada.jpg";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#B87333]/30">
      <ParticleField />

      {/* Header flotante */}
      <div className="relative z-50">
        <Header hideCTA />
      </div>

      <main className="relative z-40 pt-24 md:pt-28 pb-20 px-4 md:px-6">
        <DemostracionClient videoUrl={videoUrl} posterUrl={posterUrl} />
      </main>

      {/* Newsletter */}
      <NewsletterSection source="demostracion" />

      <Footer hideCTA />
    </div>
  );
}
