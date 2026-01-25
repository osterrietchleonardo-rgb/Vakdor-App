import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Vakdor | IA para Inmobiliarias y Asesores",
    template: "%s | Vakdor"
  },
  description: "El Partner Tecnológico del Sector Inmobiliario. Automatiza la captación de propiedades, el seguimiento de leads y la capacitación de tu equipo con IA.",
  keywords: ["IA inmobiliaria", "automatización inmobiliaria", "captación propiedades", "CRM inmobiliario", "asesores inmobiliarios"],
  authors: [{ name: "Vakdor" }],
  creator: "Vakdor",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://propuesta.vakdor.com",
    siteName: "Vakdor",
    title: "Vakdor | IA para Inmobiliarias y Asesores",
    description: "El Partner Tecnológico del Sector Inmobiliario. Automatiza la captación de propiedades, el seguimiento de leads y la capacitación de tu equipo con IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vakdor | IA para Inmobiliarias y Asesores",
    description: "El Partner Tecnológico del Sector Inmobiliario.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: "Sdb8QQKE5tpEO0O9F5zpioLlBazb-hPCI75yogmMKCk",
  },
};

import { BackgroundLogo } from "@/components/effects/BackgroundLogo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${plusJakarta.variable} ${fraunces.variable} font-sans antialiased bg-[#020617]`}>
        <BackgroundLogo />
        {children}
      </body>
    </html>
  );
}
