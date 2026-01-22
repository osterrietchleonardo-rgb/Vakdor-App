import type { Json } from './supabase';

export interface Database {
    public: {
        Tables: {
            blog_posts: {
                Row: {
                    id: string;
                    created_at: string;
                    updated_at: string;
                    title: string;
                    slug: string;
                    meta_description: string | null;
                    category: string;
                    author: string;
                    content: string;
                    featured_image_url: string | null;
                    published_at: string | null;
                    seo_keywords: string[] | null;
                    read_time_minutes: number | null;
                    views: number;
                    is_published: boolean;
                };
                Insert: {
                    id?: string;
                    created_at?: string;
                    updated_at?: string;
                    title: string;
                    slug: string;
                    meta_description?: string | null;
                    category: string;
                    author?: string;
                    content: string;
                    featured_image_url?: string | null;
                    published_at?: string | null;
                    seo_keywords?: string[] | null;
                    read_time_minutes?: number | null;
                    views?: number;
                    is_published?: boolean;
                };
                Update: {
                    id?: string;
                    created_at?: string;
                    updated_at?: string;
                    title?: string;
                    slug?: string;
                    meta_description?: string | null;
                    category?: string;
                    author?: string;
                    content?: string;
                    featured_image_url?: string | null;
                    published_at?: string | null;
                    seo_keywords?: string[] | null;
                    read_time_minutes?: number | null;
                    views?: number;
                    is_published?: boolean;
                };
            };
        };
        Views: {};
        Functions: {
            increment_views: {
                Args: {
                    post_id: string;
                };
                Returns: void;
            };
        };
        Enums: {};
    };
}

export type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
