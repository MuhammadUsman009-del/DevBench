export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  content: React.ReactNode;
}

// Blog post registry
export const blogPosts: Record<string, BlogPost> = {
  'how-to-format-json-online': {
    slug: 'how-to-format-json-online',
    title: 'How to Format JSON Online: A Complete Guide',
    excerpt: 'Learn the best practices for formatting JSON, improving readability, and debugging JSON structures with our online formatter.',
    date: 'April 15, 2025',
    category: 'Tutorial',
    readTime: 8,
    content: null as any, // Content imported dynamically
  },
  'what-is-base64-encoding': {
    slug: 'what-is-base64-encoding',
    title: 'What is Base64 Encoding? Everything Developers Need to Know',
    excerpt: 'Understand Base64 encoding, its history, use cases, and how to encode/decode data securely in your applications.',
    date: 'April 10, 2025',
    category: 'Fundamentals',
    readTime: 10,
    content: null as any,
  },
  'regex-cheatsheet-developers': {
    slug: 'regex-cheatsheet-developers',
    title: 'Regular Expression Cheatsheet for Developers',
    excerpt: 'A comprehensive guide to regex patterns, metacharacters, and best practices with practical examples.',
    date: 'April 5, 2025',
    category: 'Reference',
    readTime: 12,
    content: null as any,
  },
  'md5-vs-sha256': {
    slug: 'md5-vs-sha256',
    title: 'MD5 vs SHA-256: Which Hash Should You Use?',
    excerpt: 'Compare MD5 and SHA-256 hashing algorithms, understand their security implications, and choose the right one for your use case.',
    date: 'March 28, 2025',
    category: 'Security',
    readTime: 7,
    content: null as any,
  },
  'url-encoding-explained': {
    slug: 'url-encoding-explained',
    title: 'URL Encoding Explained: Percent-Encoding for Web URLs',
    excerpt: 'Master URL encoding, learn why it matters for web APIs, and discover common pitfalls developers encounter.',
    date: 'March 20, 2025',
    category: 'Tutorial',
    readTime: 6,
    content: null as any,
  },
  'json-validation-best-practices': {
    slug: 'json-validation-best-practices',
    title: 'JSON Validation Best Practices in Your Applications',
    excerpt: 'Learn how to validate JSON data effectively, handle errors gracefully, and prevent security vulnerabilities.',
    date: 'March 12, 2025',
    category: 'Best Practices',
    readTime: 9,
    content: null as any,
  },
  'hashing-vs-encryption': {
    slug: 'hashing-vs-encryption',
    title: 'Hashing vs Encryption: Understanding the Difference',
    excerpt: 'Explore the fundamental differences between hashing and encryption, when to use each, and security best practices.',
    date: 'March 5, 2025',
    category: 'Security',
    readTime: 8,
    content: null as any,
  },
  'developer-productivity-tools-2025': {
    slug: 'developer-productivity-tools-2025',
    title: 'Essential Developer Productivity Tools in 2025',
    excerpt: 'Discover the tools that every modern developer should know about to boost productivity and code quality.',
    date: 'February 25, 2025',
    category: 'Tools',
    readTime: 11,
    content: null as any,
  },
};

// Get all blog posts sorted by date (newest first)
export function getAllBlogPosts(): BlogPost[] {
  return Object.values(blogPosts).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get featured blog posts
export function getFeaturedBlogPosts(count: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, count);
}

// Get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}

// Get related posts
export function getRelatedPosts(slug: string, count: number = 3): BlogPost[] {
  const post = blogPosts[slug];
  if (!post) return [];

  return getAllBlogPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, count);
}
