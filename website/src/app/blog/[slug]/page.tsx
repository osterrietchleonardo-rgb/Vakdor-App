'use client';

// This is a minimal implementation for a blog post layout
// In a real app, you would fetch post data based on the slug
// For now, we'll just show the structure

import { ParticleField } from "@/components/effects/ParticleField";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params in React 19 / Next 15+ 
    const { slug } = React.use(params);

    return (
        <main className="min-h-screen pt-24 pb-16 relative">
            <ParticleField />
            
            <article className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-silver hover:text-[var(--liquid-copper)] mb-8 transition-colors">
                    <ArrowLeft size={18} /> Volver al inicio
                </Link>

                <header className="mb-12">
                    <div className="text-[var(--liquid-copper)] font-bold tracking-wider text-sm mb-4 uppercase">
                        Blog / Estrategia
                    </div>
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        La Era de la Venta Autónoma: Por qué el modelo tradicional [Título Placeholder para {slug}]
                    </h1>
                    <div className="flex items-center gap-4 text-silver text-sm border-y border-[rgba(184,115,51,0.2)] py-4">
                        <span>Por Leo Osterrietch</span>
                        <span>•</span>
                        <span>5 min lectura</span>
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                    <p className="lead text-xl text-white font-medium mb-8">
                        *Nota: Este es un template para los posts del blog. Aquí iría el contenido real del artículo generado o traído de un CMS.*
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3>El Problema del Seguimiento Manual</h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* More content placeholders */}
                </div>

                <div className="mt-16 p-8 bg-slate-900/50 border border-[rgba(184,115,51,0.3)] rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">¿Querés implementar esto en tu negocio?</h3>
                    <p className="text-silver mb-8">
                        Charlá 15 minutos con nosotros para ver cómo podemos ayudarte.
                    </p>
                    <a
                        href="https://www.vakdor.com/call"
                        className="bg-[#020617] hover:bg-black text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 inline-block"
                    >
                        Agendar Llamada Estratégica
                    </a>
                </div>
            </article>
        </main>
    );
}
