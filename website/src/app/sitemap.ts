import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.vakdor.com'

    // Static routes
    const routes = [
        '',
        '/sobre-mi',
        '/call',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    /* 
       FUTURE: Fetch dynamic blog posts here
       const posts = await getBlogPosts();
       const postRoutes = posts.map((post) => ({
         url: `${baseUrl}/blog/${post.slug}`,
         lastModified: new Date(post.updatedAt),
         changeFrequency: 'weekly',
         priority: 0.6,
       }));
       return [...routes, ...postRoutes];
    */

    return routes
}
