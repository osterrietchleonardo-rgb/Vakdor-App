import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleField } from '@/components/effects/ParticleField';
import { getPublishedPosts } from '@/lib/blog';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { NewsletterSection } from '@/components/NewsletterSection';
import type { Metadata } from 'next';
import type { BlogPost } from '@/types/supabase';
import { FALLBACK_POSTS } from '@/data/mockData';

export const metadata: Metadata = {
    title: 'Blog - IA para Inmobiliarias',
    description: 'Artículos, guías y casos de éxito sobre cómo usar IA para automatizar y escalar tu negocio inmobiliario.',
};

// Force dynamic rendering to always get fresh data from Supabase
export const dynamic = 'force-dynamic';

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
                {/* Hero */}
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

                {/* Posts Grid */}
                <section className="py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </div>

                        {/* Newsletter CTA */}
                        <div className="mt-16">
                            <NewsletterSection source="blog" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
