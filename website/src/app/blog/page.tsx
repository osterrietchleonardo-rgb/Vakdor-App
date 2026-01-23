import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { getPublishedPosts } from '@/lib/blog';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import type { Metadata } from 'next';
import type { BlogPost } from '@/types/supabase';
import { FALLBACK_POSTS } from '@/data/mockData';

export const metadata: Metadata = {
    title: 'Blog - IA para Inmobiliarias',
    description: 'Artículos, guías y casos de éxito sobre cómo usar IA para automatizar y escalar tu negocio inmobiliario.',
};

export default async function BlogPage() {
    let posts: BlogPost[] = [];

    try {
        posts = await getPublishedPosts();
    } catch (e) {
        console.error('Supabase fetch failed, using fallback', e);
    }

    const displayedPosts = posts.length > 0 ? posts : FALLBACK_POSTS;

    return (
        <div className="min-h-screen flex flex-col bg-[#020617] relative">
            <ParticleField />
            <Header />

            <main className="flex-1 relative z-10">
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-accent text-[#B87333] text-lg mb-4">Conocimiento que Convierte</p>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#F8FAFC] mb-4">
                            Blog <span className="text-gradient-copper">Vakdor</span>
                        </h1>
                        <p className="text-lg text-[#94A3B8]">
                            Estrategias, casos de éxito y guías para escalar tu negocio inmobiliario con IA
                        </p>
                    </div>
                </section>

                <section className="py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </div>

                        <div className="mt-16 text-center p-8 md:p-12 bg-gradient-to-br from-[#B87333] to-[#5C3D2E] rounded-3xl shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">No te pierdas ninguna actualización</h3>
                                <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg">
                                    Recibí las últimas estrategias sobre IA inmobiliaria directamente en tu email.
                                    Sin spam, solo valor real.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Tu email principal"
                                        className="executive-input flex-1 px-5 py-3 rounded-xl"
                                    />
                                    <button className="bg-[#020617] hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all whitespace-nowrap active:scale-95">
                                        Unirme ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
