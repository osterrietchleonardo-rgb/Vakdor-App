import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Segmentador */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
              La Mayoría de las Inmobiliarias Pierde Miles de Dólares al Año Sin Saberlo
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-4xl mx-auto">
              No es por falta de esfuerzo. Es porque responder WhatsApps a las 11 de la noche y perseguir leads manualmente no escala. Te mostramos cómo la IA hace ese trabajo por vos.
            </p>

            {/* Segmentador Buttons */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              <Link
                href="/asesor-top"
                className="bg-green-600 hover:bg-green-700 text-white p-6 md:p-8 rounded-2xl shadow-xl transition-all active:scale-95 group"
              >
                <div className="text-4xl mb-3">🎯</div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">SOY ASESOR INMOBILIARIO</h2>
                <p className="text-sm text-green-100">
                  Quiero dejar de trabajar fines de semana y ganar más sin vivir pegado al celular
                </p>
                <div className="mt-4 text-sm font-bold text-green-200 group-hover:text-white transition-colors">
                  VER CÓMO FUNCIONA →
                </div>
              </Link>

              <Link
                href="/inmobiliaria"
                className="bg-blue-600 hover:bg-blue-700 text-white p-6 md:p-8 rounded-2xl shadow-xl transition-all active:scale-95 group"
              >
                <div className="text-4xl mb-3">📊</div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">DIRIJO UNA INMOBILIARIA</h2>
                <p className="text-sm text-blue-100">
                  Necesito que mi equipo sea más productivo sin tener que estar vigilándolos todo el tiempo
                </p>
                <div className="mt-4 text-sm font-bold text-blue-200 group-hover:text-white transition-colors">
                  VER LA SOLUCIÓN →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Problema Universal */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              La Realidad del Sector Inmobiliario Hoy
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="font-bold text-lg mb-2">Si eres Asesor</h3>
                <p className="text-slate-600">
                  Pasás 20+ horas semanales respondiendo las mismas preguntas por WhatsApp.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">💸</div>
                <h3 className="font-bold text-lg mb-2">Si dirigís una Inmobiliaria</h3>
                <p className="text-slate-600">
                  Un tercio de tus leads se pierden porque nadie hace seguimiento después del primer mes.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🚫</div>
                <h3 className="font-bold text-lg mb-2">Lo que pasa si no hacés nada</h3>
                <p className="text-slate-600">
                  Mientras dormís, tu competencia que sí usa tecnología se lleva los mejores clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
