import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/seo/JsonLd";
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

// Datos estructurados globales (schema.org) — SEO (rich results) + GEO (que las IAs entiendan y citen el sitio).
const siteSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vakdor',
    url: 'https://www.vakdor.com',
    logo: 'https://www.vakdor.com/logo.png',
    description:
      'Vakdor desarrolla PRISMA, el Sistema Operativo con IA para inmobiliarias que conecta el CRM Tokko Broker con WhatsApp.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vakdor PRISMA',
    url: 'https://www.vakdor.com',
    inLanguage: 'es-AR',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PRISMA',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: 'es-AR',
    description:
      'Sistema Operativo con IA para inmobiliarias: conecta el CRM Tokko Broker con WhatsApp para dar trazabilidad de leads, controlar la performance de los asesores y automatizar procesos (análisis de mercado/ACM, contratos, seguimiento, marketing y capacitación).',
    publisher: { '@type': 'Organization', name: 'Vakdor', url: 'https://www.vakdor.com' },
  },
];

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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1251885583217784');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}


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
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1251885583217784&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <BackgroundLogo />
        <JsonLd data={siteSchema} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

