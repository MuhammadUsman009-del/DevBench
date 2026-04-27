'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: '-100px 0px -66%' }
    );

    const headingElements = headings.map((h) => document.getElementById(h.slug)).filter(Boolean);
    headingElements.forEach((el) => el && observer.observe(el));

    return () => headingElements.forEach((el) => el && observer.unobserve(el));
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-40 p-3 bg-accent text-dark-bg rounded-lg font-mono font-bold hover:bg-green-400 transition-colors"
      >
        ≡ TOC
      </button>

      {/* Sidebar */}
      <nav
        className={`
          fixed md:sticky md:top-20 right-0 md:right-auto left-0 md:left-auto top-16 z-30 md:z-0
          w-full md:w-64 max-h-[calc(100vh-5rem)] md:max-h-[calc(100vh-5rem)]
          bg-dark-surface md:bg-transparent border-b md:border-b-0 md:border-l border-border
          overflow-y-auto transition-all duration-300
          ${isOpen ? 'block' : 'hidden md:block'}
        `}
      >
        <div className="p-4 md:p-0 md:pl-4">
          <div className="hidden md:block mb-4">
            <h3 className="font-mono text-sm font-bold text-accent mb-3">On This Page</h3>
          </div>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li key={heading.slug} style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
                <Link
                  href={`#${heading.slug}`}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1 px-2 rounded transition-colors ${
                    activeSlug === heading.slug
                      ? 'text-accent bg-dark-surface2 border-l-2 border-accent'
                      : 'text-muted hover:text-accent'
                  }`}
                >
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
