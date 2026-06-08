import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced from 5 to 3 weights
  display: "swap", // Explicit font-display
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"], // Reduced from 3 to 2 weights
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vakdor.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Vakdor PRISMA | El Sistema Operativo con IA para Inmobiliarias",
    template: "%s | Vakdor"
  },
  description: "PRISMA es el Sistema Operativo centralizado con IA que conecta tu CRM (Tokko Broker) con WhatsApp. Trazabilidad total, control de performance de asesores y automatización de procesos para inmobiliarias Enterprise.",
  keywords: ["sistema operativo inmobiliario", "IA inmobiliaria", "Tokko Broker", "trazabilidad de leads", "performance de asesores", "automatización inmobiliaria", "CRM inmobiliario"],
  authors: [{ name: "Vakdor" }],
  creator: "Vakdor",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.vakdor.com",
    siteName: "Vakdor",
    title: "Vakdor PRISMA | El Sistema Operativo con IA para Inmobiliarias",
    description: "El Sistema Operativo centralizado con IA que conecta tu CRM (Tokko Broker) con WhatsApp. Trazabilidad matemática para tu agencia: control de asesores, speed-to-lead y cero burocracia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vakdor PRISMA | El Sistema Operativo con IA para Inmobiliarias",
    description: "Trazabilidad matemática para tu agencia. Conectamos Tokko Broker con WhatsApp bajo un único panel de control.",
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

import { BackgroundLogo } from '@/components/effects/BackgroundLogo';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5Q56SJX6');
          `}
        </Script>
        {/* End Google Tag Manager */}


        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS-prefetch for analytics (less critical) */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${plusJakarta.variable} ${fraunces.variable} font-sans antialiased bg-[#020617]`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Q56SJX6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <BackgroundLogo />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

