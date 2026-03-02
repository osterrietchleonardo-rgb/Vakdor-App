import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
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
    url: "https://www.vakdor.com",
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

import { BackgroundLogo } from '@/components/effects/BackgroundLogo';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BMYP2N4LWM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BMYP2N4LWM');
          `}
        </Script>

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
        <BackgroundLogo />
        {children}
      </body>
    </html>
  );
}
