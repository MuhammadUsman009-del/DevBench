'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const tools = [
    { name: 'JSON Formatter', href: '/json-formatter' },
    { name: 'Base64 Encoder', href: '/base64' },
    { name: 'URL Encoder', href: '/url-encoder' },
    { name: 'Regex Tester', href: '/regex-tester' },
    { name: 'Hash Generator', href: '/hash-generator' },
  ];

  return (
    <header className="border-b border-border bg-dark-surface sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-accent font-mono text-xl font-bold">&gt;_</div>
            <span className="hidden sm:inline font-bold text-lg">DevBench</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="px-3 py-2 rounded text-sm text-muted hover:text-accent hover:bg-surface2 transition-colors"
              >
                {tool.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-surface2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block px-3 py-2 rounded text-sm text-muted hover:text-accent hover:bg-surface2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {tool.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
