'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllBlogPosts } from '@/lib/blog-posts';
import type { BlogPost } from '@/lib/blog-posts';

const CATEGORIES = ['All', 'Tutorial', 'Fundamentals', 'Reference', 'Security', 'Best Practices', 'Tools'] as const;
const POSTS_PER_PAGE = 9;

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <article className="bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DevBench Blog — Developer Tutorials, Guides & Best Practices
          </h1>
          <p className="text-lg text-muted max-w-3xl">
            Tutorials, guides, and technical articles about developer tools, best practices, and
            modern web development. Learn how to use our tools effectively and deepen your
            understanding of JSON, Base64, regular expressions, cryptographic hashing, and more.
          </p>
        </header>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-dark-bg'
                    : 'bg-surface text-text hover:bg-border'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedPosts.map((post) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="flex justify-center items-center gap-2" aria-label="Blog pagination">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  ← Previous
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-accent text-dark-bg'
                          : 'border border-muted text-muted hover:bg-surface'
                      }`}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  Next →
                </button>
              </nav>
            )}
          </div>
        )}

        {/* Empty State */}
        {paginatedPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted text-lg mb-4">
              No articles found in the "{selectedCategory}" category.
            </p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="inline-block px-6 py-2 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* Blog Info Section */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-2">{posts.length}</h3>
              <p className="text-muted">Articles Published</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-2">Weekly</h3>
              <p className="text-muted">Publishing Schedule</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
              <p className="text-muted">Original Content</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-surface rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-white mb-4">Explore Our Tools</h2>
          <p className="text-muted mb-6 max-w-2xl">
            Put what you learn into practice. Try our free online developer tools that power many of these tutorials.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/json-formatter"
              className="px-6 py-2 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              JSON Formatter
            </Link>
            <Link
              href="/base64"
              className="px-6 py-2 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Base64 Encoder
            </Link>
            <Link
              href="/regex-tester"
              className="px-6 py-2 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Regex Tester
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
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
