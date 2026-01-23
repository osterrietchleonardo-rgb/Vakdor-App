import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '@/types/supabase';

interface BlogPostCardProps {
    post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <article className="kinetic-card rounded-2xl overflow-hidden group flex flex-col">
            <div
                className="h-48 bg-gradient-to-br from-[#B87333] to-[#5C3D2E] relative overflow-hidden"
            >
                {post.featured_image_url ? (
                    <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                        <span className="text-4xl font-black">Vakdor</span>
                    </div>
                )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-[#94A3B8] mb-3">
                    <span className="bg-[#B87333]/20 text-[#B87333] px-2 py-0.5 rounded font-medium">
                        {post.category}
                    </span>
                    {post.read_time_minutes && (
                        <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.read_time_minutes} min
                        </span>
                    )}
                </div>
                <h2 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#B87333] transition-colors line-clamp-2">
                    {post.title}
                </h2>
                <p className="text-sm text-[#94A3B8] mb-4 line-clamp-3">
                    {post.meta_description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-[#64748B]">
                        {post.published_at ? new Date(post.published_at).toLocaleDateString('es-AR', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        }) : 'Borrador'}
                    </span>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-bold text-[#B87333] flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                        Leer más <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
