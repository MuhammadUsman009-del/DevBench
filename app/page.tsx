import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevBench — Free Online Developer Tools: JSON, Base64, Regex & More',
  description:
    'Developer tools online, free. Format JSON, encode Base64, test Regex, generate hashes. No backend needed, 100% client-side processing.',
};

export default function Home() {
  const tools = [
    {
      name: 'JSON Formatter',
      icon: '{}',
      description: 'Pretty print, validate, and minify JSON',
      href: '/json-formatter',
      keywords: 'json formatter, json validator, pretty print json',
    },
    {
      name: 'Base64 Encoder',
      icon: '📝',
      description: 'Encode and decode Base64 strings',
      href: '/base64',
      keywords: 'base64 encoder, base64 decoder',
    },
    {
      name: 'URL Encoder',
      icon: '🔗',
      description: 'Encode and decode URLs',
      href: '/url-encoder',
      keywords: 'url encoder, url decoder',
    },
    {
      name: 'Regex Tester',
      icon: '.*',
      description: 'Test and debug regular expressions',
      href: '/regex-tester',
      keywords: 'regex tester, regex validator',
    },
    {
      name: 'Hash Generator',
      icon: '#',
      description: 'Generate MD5, SHA-256, SHA-512 hashes',
      href: '/hash-generator',
      keywords: 'hash generator, md5, sha256, sha512',
    },
  ];

  return (
    <div className="bg-dark-bg">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Developer Tools — Online, <span className="text-accent">Free</span>, Instant
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Format JSON, encode Base64, test Regex, generate hashes. No install. Works in your browser. 100% client-side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/json-formatter"
              className="inline-block px-6 py-3 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="#tools"
              className="inline-block px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-dark-bg transition-colors"
            >
              Explore Tools
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-20">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">5</div>
            <div className="text-sm text-muted">Tools</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">∞</div>
            <div className="text-sm text-muted">Free Uses</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted">Client-Side</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">0</div>
            <div className="text-sm text-muted">Servers</div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Available Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block p-6 bg-dark-surface border border-border rounded-lg hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{tool.name}</h3>
              <p className="text-muted text-sm mb-4">{tool.description}</p>
              <div className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Launch Tool →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who Uses DevBench?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-3 text-accent">Web Developers</h3>
            <p className="text-muted text-sm">
              Format JSON APIs, encode/decode Base64 for authentication, test URL parameters, and validate regex patterns in real-time.
            </p>
          </div>
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-3 text-accent">DevOps Engineers</h3>
            <p className="text-muted text-sm">
              Generate hashes for checksums, validate configuration JSON, encode secrets for deployment, and test log parsing regex.
            </p>
          </div>
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-3 text-accent">Security Researchers</h3>
            <p className="text-muted text-sm">
              Hash verification for integrity checks, regex pattern testing for attack detection, and URL encoding for payload analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why DevBench?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-accent text-2xl">✓</div>
            <div>
              <h3 className="font-bold mb-2">No Installation</h3>
              <p className="text-muted text-sm">Works directly in your browser. No downloads, no dependencies.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-accent text-2xl">✓</div>
            <div>
              <h3 className="font-bold mb-2">100% Private</h3>
              <p className="text-muted text-sm">All processing happens on your device. Data never leaves your browser.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-accent text-2xl">✓</div>
            <div>
              <h3 className="font-bold mb-2">Always Free</h3>
              <p className="text-muted text-sm">No premium tiers. All tools are completely free, forever.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-accent text-2xl">✓</div>
            <div>
              <h3 className="font-bold mb-2">Mobile Friendly</h3>
              <p className="text-muted text-sm">Responsive design works seamlessly on phones, tablets, and desktops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">Is my data stored or sent to a server?</h3>
            <p className="text-muted text-sm">
              No. All processing happens entirely in your browser using JavaScript. Your data is never sent anywhere or stored.
            </p>
          </div>
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">Are these tools free forever?</h3>
            <p className="text-muted text-sm">
              Yes. DevBench is completely free with no premium tiers or ads. We believe developer tools should be accessible to everyone.
            </p>
          </div>
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">Can I use DevBench offline?</h3>
            <p className="text-muted text-sm">
              Yes. Once loaded, DevBench works offline. Just bookmark it and you can use it anytime without internet.
            </p>
          </div>
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">What about browser compatibility?</h3>
            <p className="text-muted text-sm">
              DevBench works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend the latest versions.
            </p>
          </div>
          <div className="p-6 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">How accurate are the hash algorithms?</h3>
            <p className="text-muted text-sm">
              We use the Web Crypto API for SHA hashes (SHA-1, SHA-256, SHA-512) which are cryptographically standard. MD5 uses the industry-standard md5 library.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="p-8 md:p-12 bg-dark-surface border border-accent rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted mb-6">Choose a tool and start developing faster today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/json-formatter"
              className="inline-block px-6 py-3 bg-accent text-dark-bg font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              JSON Formatter
            </Link>
            <Link
              href="/hash-generator"
              className="inline-block px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-dark-bg transition-colors"
            >
              Hash Generator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
