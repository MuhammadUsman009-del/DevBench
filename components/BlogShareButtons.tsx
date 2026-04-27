'use client';

import Link from 'next/link';

interface BlogShareButtonsProps {
  slug: string;
  title: string;
}

export default function BlogShareButtons({ slug, title }: BlogShareButtonsProps) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <Link
        href="/blog"
        className="text-accent hover:text-green-400 transition-colors flex items-center gap-2"
      >
        ← Back to Blog
      </Link>

      <div className="flex gap-3">
        <a
          href={`https://twitter.com/intent/tweet?url=https://devbench.vercel.app/blog/${slug}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors"
        >
          Share on X
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              `https://devbench.vercel.app/blog/${slug}`
            );
            alert('Link copied!');
          }}
          className="px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}
