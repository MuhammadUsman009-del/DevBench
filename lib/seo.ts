import type { Metadata } from 'next';

interface SEOMetadataParams {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export function generateSEOMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = 'https://devbench.vercel.app/og-image.png',
  canonical,
}: SEOMetadataParams): Metadata {
  const url = `https://devbench.vercel.app${path}`;
  const canonicalUrl = canonical || url;

  return {
    title: `${title} | DevBench`,
    description,
    keywords: ['DevBench', ...keywords],
    authors: [{ name: 'DevBench' }],
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'DevBench',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

interface BlogMetadataParams extends SEOMetadataParams {
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateBlogMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  canonical,
  author = 'DevBench',
  publishedTime,
  modifiedTime,
}: BlogMetadataParams): Metadata {
  const metadata = generateSEOMetadata({
    title,
    description,
    path,
    keywords,
    ogImage,
    canonical,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      authors: [author],
      publishedTime,
      modifiedTime,
    },
  };
}

interface JSONLDParams {
  type: string;
  data: Record<string, any>;
}

export function generateJSONLD({ type, data }: JSONLDParams): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });
}

// Specific schema generators
export function generateBlogPostSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}): string {
  return generateJSONLD({
    type: 'BlogPosting',
    data: {
      headline: title,
      description,
      author: {
        '@type': 'Organization',
        name: author,
      },
      datePublished,
      dateModified,
      image,
      url,
    },
  });
}

export function generateAboutPageSchema(): string {
  return generateJSONLD({
    type: 'AboutPage',
    data: {
      name: 'About DevBench',
      url: 'https://devbench.vercel.app/about',
      mainEntity: {
        '@type': 'Organization',
        name: 'DevBench',
        description: 'Free online developer tools suite',
        url: 'https://devbench.vercel.app',
        logo: 'https://devbench.vercel.app/logo.png',
      },
    },
  });
}

export function generateContactPageSchema(): string {
  return generateJSONLD({
    type: 'ContactPage',
    data: {
      name: 'Contact DevBench',
      url: 'https://devbench.vercel.app/contact',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'General Support',
        email: 'support@devbench.dev',
      },
    },
  });
}

export function generateOrganizationSchema(): string {
  return generateJSONLD({
    type: 'Organization',
    data: {
      name: 'DevBench',
      url: 'https://devbench.vercel.app',
      description: 'Free online developer tools suite. 100% client-side processing.',
      logo: 'https://devbench.vercel.app/logo.png',
      sameAs: [
        'https://github.com/devbench',
        'https://twitter.com/devbench',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Support',
        email: 'support@devbench.dev',
        url: 'https://devbench.vercel.app/contact',
      },
    },
  });
}
