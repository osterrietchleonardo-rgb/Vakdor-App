import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/blog'

// El sitemap se pregenera y se vuelve a armar como mucho cada hora (ISR),
// igual que las páginas del blog: un post nuevo aparece dentro de la hora.
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.vakdor.com'

    // Static routes
    const routes = [
        '',
        '/demostracion',
        '/sobre-mi',
        '/call',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog posts (pulled from Supabase published posts)
    const posts = await getPublishedPosts()
    const postRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at ?? post.published_at ?? Date.now()),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...routes, ...postRoutes]
}
