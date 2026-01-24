import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Clock, User, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';

// Force dynamic rendering to always get fresh data from Supabase
export const dynamic = 'force-dynamic';

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post no encontrado' };

    return {
        title: post.title,
        description: post.meta_description,
        openGraph: {
            title: post.title,
            description: post.meta_description,
            type: 'article',
            images: post.featured_image_url ? [post.featured_image_url] : [],
        },
    };
}

export default async function BlogPostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Convert Markdown to HTML
    const htmlContent = await marked(post.content);

    return (
        <div className="min-h-screen flex flex-col bg-[#020617]">
            <Header />

            <main className="flex-1 pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Back link */}
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#B87333] mb-8 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft size={16} /> Volver al blog
                    </Link>

                    <article>
                        {/* Post Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-4">
                                <span className="bg-[#B87333]/20 text-[#B87333] px-3 py-1 rounded-full border border-[#B87333]/30">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-[#94A3B8] normal-case tracking-normal">
                                    <Clock size={14} /> {post.read_time_minutes} min lectura
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-[#F8FAFC] leading-tight mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 py-6 border-y border-[#1E293B] mb-8">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B87333] to-[#5C3D2E] flex items-center justify-center text-white">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#F8FAFC]">{post.author}</p>
                                    <p className="text-xs text-[#94A3B8]">
                                        {new Date(post.published_at!).toLocaleDateString('es-AR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        {post.featured_image_url && (
                            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-[#1E293B]">
                                <img 
                                    src={post.featured_image_url} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                        )}

                        {/* Content with custom blog-content class */}
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />

                        {/* Tags */}
                        {post.seo_keywords && post.seo_keywords.length > 0 && (
                            <div className="mt-16 pt-8 border-t border-[#1E293B] flex flex-wrap gap-2">
                                <span className="text-sm font-bold text-[#94A3B8] mr-2 flex items-center gap-1.5">
                                    <Tag size={14} /> Tags:
                                </span>
                                {post.seo_keywords.map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="text-xs bg-[#1E293B] text-[#94A3B8] px-3 py-1 rounded-full border border-[#334155] hover:border-[#B87333] hover:text-[#B87333] transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </article>
                </div>
            </main>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-[#B87333] to-[#5C3D2E] py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Te gustaría implementar esto en tu inmobiliaria?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ayudamos a inmobiliarias a automatizar sus procesos de venta y captación con IA.
                        Charlá 15 minutos con nosotros para ver cómo podemos ayudarte.
                    </p>
                    <a
                        href="https://propuesta.vakdor.com/call"
                        className="bg-[#020617] hover:bg-black text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 inline-block"
                    >
                        Agendar Llamada Estratégica
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
