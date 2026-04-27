'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-dark-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="text-accent font-mono text-lg font-bold">&gt;_</div>
              <span className="font-bold">DevBench</span>
            </div>
            <p className="text-sm text-muted">Free online developer tools suite. 100% client-side processing.</p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/json-formatter" className="text-muted hover:text-accent transition-colors">
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link href="/base64" className="text-muted hover:text-accent transition-colors">
                  Base64 Encoder
                </Link>
              </li>
              <li>
                <Link href="/url-encoder" className="text-muted hover:text-accent transition-colors">
                  URL Encoder
                </Link>
              </li>
              <li>
                <Link href="/regex-tester" className="text-muted hover:text-accent transition-colors">
                  Regex Tester
                </Link>
              </li>
              <li>
                <Link href="/hash-generator" className="text-muted hover:text-accent transition-colors">
                  Hash Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>&copy; 2024 DevBench. All rights reserved.</p>
          <p>Made with ❤️ for developers</p>
        </div>
      </div>
    </footer>
  );
}
