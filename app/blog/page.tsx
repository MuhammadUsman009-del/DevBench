import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllBlogPosts } from '@/lib/blog-posts';

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">DevBench Blog</h1>
        <p className="text-lg text-muted max-w-3xl">
          Tutorials, guides, and technical articles about developer tools, best practices, and
          modern web development. Learn how to use our tools effectively and deepen your
          understanding of JSON, Base64, regular expressions, cryptographic hashing, and more.
        </p>
      </div>

      {/* Featured Section */}
      {posts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-accent mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg mb-4">
            More blog articles coming soon. Check back regularly for tutorials and guides.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      )}

      {/* Blog Info Section */}
      <div className="mt-16 border-t border-border pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">{posts.length}</div>
            <p className="text-muted">Published Articles</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">Weekly</div>
            <p className="text-muted">New Content Schedule</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <p className="text-muted">Free & Open</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 border border-accent bg-dark-surface2 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-accent mb-3">Get Updates on New Articles</h3>
        <p className="text-muted mb-6">
          Subscribe to be notified when we publish new tutorials and guides. (Coming soon)
        </p>
        <button
          disabled
          className="px-6 py-2 bg-accent text-dark-bg font-semibold rounded-lg disabled:opacity-50 cursor-not-allowed"
        >
          Subscribe (Coming Soon)
        </button>
      </div>
    </div>
  );
}
