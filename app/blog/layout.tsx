import type { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog',
  description:
    'Developer tools tutorials, guides, and technical articles. Learn best practices for JSON, Base64, regex, hashing, and more.',
  path: '/blog',
  keywords: [
    'blog',
    'tutorials',
    'guides',
    'developer articles',
    'technical writing',
    'how-to guides',
  ],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dark-bg min-h-screen">
      {children}
    </div>
  );
}
