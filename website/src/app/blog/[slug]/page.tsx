import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Clock, User, Calendar, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';

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

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 pt-8 pb-16">
                <div className="max-w-4xl mx-auto px-4">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft size={16} /> Volver al blog
                    </Link>

                    <article>
                        <div className="mb-8">
                            <div className="flex items-center gap-4 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                                <span className="bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                                <span className="flex items-center gap-1.5 text-slate-400 normal-case tracking-normal">
                                    <Clock size={14} /> {post.read_time_minutes} min lectura
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 py-6 border-y border-slate-100 mb-8">
                                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{post.author}</p>
                                    <p className="text-xs text-slate-500">
                                        {new Date(post.published_at!).toLocaleDateString('es-AR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {post.featured_image_url && (
                            <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-lg">
                                <img src={post.featured_image_url} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                        )}

                        <div
                            className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-black prose-headings:text-slate-900
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-a:text-blue-600 prose-a:font-bold hover:prose-a:text-blue-700 decoration-blue-100"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {post.seo_keywords && post.seo_keywords.length > 0 && (
                            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                                <span className="text-sm font-bold text-slate-400 mr-2 flex items-center gap-1.5">
                                    <Tag size={14} /> Tags:
                                </span>
                                {post.seo_keywords.map((tag) => (
                                    <span key={tag} className="text-xs bg-slate-50 text-slate-500 px-3 py-1 rounded-full border border-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </article>
                </div>
            </main>

            {/* CTA Section for individual post */}
            <section className="bg-slate-900 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Te gustaría implementar esto en tu inmobiliaria?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Ayudamos a inmobiliarias a automatizar sus procesos de venta y captación con IA.
                        Charlá 15 minutos con nosotros para ver cómo podemos ayudarte.
                    </p>
                    <a
                        href="https://propuesta.vakdor.com/call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 inline-block"
                    >
                        Agendar Llamada Estratégica
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
