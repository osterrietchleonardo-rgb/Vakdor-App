import { supabase } from './supabase';
import type { BlogPost } from '@/types/supabase';
import { FALLBACK_POSTS } from '@/data/mockData';

export async function getPublishedPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts:', error);
        return FALLBACK_POSTS;
    }

    return (data && data.length > 0) ? data : FALLBACK_POSTS;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

    if (error || !data) {
        console.log('Post not found in Supabase, checking fallback...');
        const fallbackPost = FALLBACK_POSTS.find(p => p.slug === slug);
        if (fallbackPost) return fallbackPost;

        if (error) {
            console.error('Error fetching post from Supabase:', error.message || error);
        }
        return null;
    }

    return data;
}

export async function incrementPostViews(id: string): Promise<void> {
    // @ts-ignore
    await supabase.rpc('increment_views', { post_id: id });
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('category', category)
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts by category:', error);
        return [];
    }

    return data || [];
}
