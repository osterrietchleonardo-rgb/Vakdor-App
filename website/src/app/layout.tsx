import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
