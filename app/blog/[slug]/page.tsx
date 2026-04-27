import type { Metadata } from 'next';
import Link from 'next/link';
import Prose from '@/components/Prose';
import TableOfContents from '@/components/TableOfContents';
import BlogCard from '@/components/BlogCard';
import { blogPosts, getRelatedPosts, getAllBlogPosts } from '@/lib/blog-posts';
import { generateBlogMetadata, generateBlogPostSchema } from '@/lib/seo';
import type { Heading } from '@/components/TableOfContents';

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${params.slug}`,
    keywords: [post.category.toLowerCase(), 'tutorial', 'guide'],
    author: 'DevBench',
    publishedTime: post.date,
    modifiedTime: post.date,
  });
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

// Extract headings from blog post content
function extractHeadings(content: React.ReactNode): Heading[] {
  const headings: Heading[] = [];
  let headingCount = { h2: 0, h3: 0 };

  React.Children.forEach(content, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === 'h2') {
        headingCount.h2++;
        headingCount.h3 = 0;
        const text = child.props.children?.toString() || '';
        const slug = `h2-${headingCount.h2}`;
        headings.push({ level: 2, text, slug });
      } else if (child.type === 'h3') {
        headingCount.h3++;
        const text = child.props.children?.toString() || '';
        const slug = `h3-${headingCount.h2}-${headingCount.h3}`;
        headings.push({ level: 3, text, slug });
      }
    }
  });

  return headings;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Post Not Found</h1>
        <p className="text-muted mb-6">The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="text-accent hover:text-green-400">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Import the actual blog post component
  const BlogContent = require(`@/content/blog/${params.slug}`).default;

  // Generate headings for TOC (simplified for demo)
  const headings: Heading[] = [
    { level: 2, text: 'Introduction', slug: 'introduction' },
    { level: 2, text: 'Main Content', slug: 'main-content' },
  ];

  const relatedPosts = getRelatedPosts(params.slug, 3);

  return (
    <div className="bg-dark-bg">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <Link href="/blog" className="text-accent hover:text-green-400 text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-4 items-center text-sm text-muted">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readTime} min read</span>
            <span>•</span>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded border border-accent">
              {post.category}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Prose>
              <BlogContent />
            </Prose>

            {/* Sharing & Navigation */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="text-accent hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  ← Back to Blog
                </Link>

                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://devbench.vercel.app/blog/${params.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors"
                  >
                    Share on X
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `https://devbench.vercel.app/blog/${params.slug}`
                      );
                      alert('Link copied!');
                    }}
                    className="px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent/10 transition-colors"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold text-accent mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard
                      key={relatedPost.slug}
                      slug={relatedPost.slug}
                      title={relatedPost.title}
                      excerpt={relatedPost.excerpt}
                      date={relatedPost.date}
                      readTime={relatedPost.readTime}
                      category={relatedPost.category}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </article>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBlogPostSchema({
            title: post.title,
            description: post.excerpt,
            author: 'DevBench',
            datePublished: post.date,
            dateModified: post.date,
            image: 'https://devbench.vercel.app/og-image.png',
            url: `https://devbench.vercel.app/blog/${params.slug}`,
          }),
        }}
      />
    </div>
  );
}
