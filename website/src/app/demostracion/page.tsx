import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticleField } from "@/components/effects/ParticleField";
import { NewsletterSection } from "@/components/NewsletterSection";
import { DemostracionClient } from "./DemostracionClient";

export const metadata = {
  title: "Demostración Exclusiva: El Sistema Operativo PRISMA | Vakdor",
  description:
    "Mirá la demostración ejecutiva de 17 minutos de PRISMA. Descubrí cómo conectar Tokko Broker con WhatsApp para eliminar la dependencia operativa en tu inmobiliaria.",
  alternates: { canonical: "/demostracion" },
  openGraph: {
    title: "Demostración Exclusiva: El Sistema Operativo PRISMA | Vakdor",
    description:
      "Descubrí cómo eliminar la dependencia operativa y darle trazabilidad matemática a tu inmobiliaria.",
    url: "https://vakdor.com/demostracion",
    siteName: "Vakdor PRISMA",
    locale: "es_AR",
    type: "website",
  },
};

export default function DemostracionPage() {
  const videoUrl =
    "https://upggigryxdvcmnuwafyl.supabase.co/storage/v1/object/public/videos/vsl/vsl-vakdor-prisma.mp4";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#B87333]/30">
      <ParticleField />

      {/* Header flotante */}
      <div className="relative z-50">
        <Header hideCTA />
      </div>

      <main className="relative z-40 pt-28 pb-20 px-4 md:px-6">
        <DemostracionClient videoUrl={videoUrl} />
      </main>

      {/* Newsletter */}
      <NewsletterSection source="demostracion" />

      <Footer hideCTA />
    </div>
  );
}
