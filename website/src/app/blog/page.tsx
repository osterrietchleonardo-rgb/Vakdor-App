import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
        // Attempt to fetch from Supabase
        posts = await getPublishedPosts();
    } catch (e) {
        console.error('Supabase fetch failed, using fallback', e);
    }

    // Use fallback if no posts found in Supabase
    const displayedPosts = posts.length > 0 ? posts : FALLBACK_POSTS;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 md:py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-black mb-4">
                            Blog Vakdor
                        </h1>
                        <p className="text-lg text-slate-300">
                            Estrategias, casos de éxito y guías para escalar tu negocio inmobiliario con IA
                        </p>
                    </div>
                </section>

                {/* Posts Grid */}
                <section className="py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </div>

                        {/* Newsletter CTA */}
                        <div className="mt-16 text-center p-8 md:p-12 bg-blue-600 text-white rounded-3xl shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">No te pierdas ninguna actualización</h3>
                                <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
                                    Recibí las últimas estrategias sobre IA inmobiliaria directamente en tu email.
                                    Sin spam, solo valor real.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Tu email principal"
                                        className="flex-1 px-5 py-3 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                    <button className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all whitespace-nowrap active:scale-95">
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
