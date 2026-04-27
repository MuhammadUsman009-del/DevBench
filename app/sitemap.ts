import type { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();

  const blogPostUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://devbench.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    // Main pages
    {
      url: 'https://devbench.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Tools
    {
      url: 'https://devbench.vercel.app/json-formatter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://devbench.vercel.app/base64',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://devbench.vercel.app/url-encoder',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://devbench.vercel.app/regex-tester',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://devbench.vercel.app/hash-generator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Content pages
    {
      url: 'https://devbench.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://devbench.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://devbench.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Legal pages
    {
      url: 'https://devbench.vercel.app/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://devbench.vercel.app/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://devbench.vercel.app/disclaimer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://devbench.vercel.app/cookie-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Blog posts
    ...blogPostUrls,
  ]
}
