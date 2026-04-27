import Link from 'next/link';

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
}

export default function BlogCard({ slug, title, excerpt, date, readTime, category }: BlogCardProps) {
  return (
    <article className="border border-border bg-dark-surface2 rounded-lg p-6 hover:border-accent transition-colors group">
      <Link href={`/blog/${slug}`} className="block">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2 py-1 bg-dark-bg text-accent border border-accent rounded">
            {category}
          </span>
          <span className="text-xs text-muted">{readTime} min read</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted text-sm mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-muted">{date}</time>
          <span className="text-accent text-sm">Read more →</span>
        </div>
      </Link>
    </article>
  );
}
