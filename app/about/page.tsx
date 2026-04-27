import type { Metadata } from 'next';
import Link from 'next/link';
import Prose from '@/components/Prose';
import { generateSEOMetadata, generateAboutPageSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About DevBench',
  description:
    'Learn about DevBench — free, private, client-side developer tools. No tracking, no data collection, no backend servers.',
  path: '/about',
  keywords: [
    'about devbench',
    'developer tools',
    'client-side tools',
    'privacy-first',
    'open source',
  ],
});

export default function AboutPage() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Prose>
        <h1>About DevBench</h1>

        <p>
          DevBench is a free, privacy-first online developer tools suite designed to help
          developers work smarter and faster. Every tool runs 100% in your browser — no data
          ever leaves your device, no servers to worry about, and no ads cluttering your
          workflow. Whether you're formatting JSON, encoding Base64, testing regex patterns, or
          generating cryptographic hashes, DevBench has you covered.
        </p>

        <h2>Our Mission</h2>

        <p>
          We believe developer tools should be simple, fast, and private. For too long,
          developers have relied on slow, ad-heavy websites to perform basic tasks. These sites
          often track user behavior, display invasive advertisements, and log sensitive data to
          remote servers. DevBench was born from frustration with this status quo.
        </p>

        <p>
          Our mission is simple: democratize access to high-quality developer tools. Every tool
          should be free, performant, and trustworthy. We're committed to building a platform
          where developers can work without compromising their privacy or waiting for bloated
          pages to load. DevBench is open-source, community-driven, and built on principles of
          transparency and user trust.
        </p>

        <h2>Why DevBench Exists</h2>

        <p>
          Before building DevBench, we surveyed hundreds of developers and identified critical
          pain points:
        </p>

        <ul>
          <li>
            <strong>Slow, Ad-Heavy Websites:</strong> Most online tool sites are cluttered with
            ads, tracking pixels, and bloated assets that make them painfully slow to use.
          </li>
          <li>
            <strong>Privacy Concerns:</strong> Many JSON validators, regex testers, and
            encryption tools send your data to remote servers. You have no way of knowing if your
            sensitive information is being logged, sold to third parties, or stored indefinitely.
          </li>
          <li>
            <strong>Feature Gaps:</strong> Existing tools often lack critical functionality like
            minification, validation, error reporting, and batch processing.
          </li>
          <li>
            <strong>Reliability Issues:</strong> When the website goes down, you lose access to
            tools you depend on. No offline mode, no alternatives.
          </li>
          <li>
            <strong>Outdated Technology:</strong> Many tools were built years ago and haven't
            been updated to support modern use cases or security practices.
          </li>
        </ul>

        <p>
          DevBench addresses every one of these problems. By processing data entirely in the
          browser using modern Web APIs, we've built a platform that's lightning-fast,
          completely private, and works offline.
        </p>

        <h2>How It Works</h2>

        <p>
          DevBench operates on a simple principle: <strong>zero-backend processing</strong>.
          Every computation happens in your browser using native JavaScript and Web APIs like
          the Web Crypto API, TextEncoder, and Blob APIs. Here's why this matters:
        </p>

        <ul>
          <li>
            <strong>No Data Leaves Your Browser:</strong> Your JSON, API keys, credentials, and
            sensitive information never touch our servers or any third-party service.
          </li>
          <li>
            <strong>Instant Processing:</strong> Without network latency, tools respond in
            milliseconds.
          </li>
          <li>
            <strong>Works Offline:</strong> Once the page loads, everything works without an
            internet connection.
          </li>
          <li>
            <strong>Maximum Privacy:</strong> We don't see, store, or log any user input.
          </li>
          <li>
            <strong>Open Architecture:</strong> Our code is transparent and auditable.
          </li>
        </ul>

        <p>
          For example, here's how our hash generator works using the Web Crypto API:
        </p>

        <pre>
          <code>{`async function hashString(input: string, algorithm: 'SHA-1' | 'SHA-256' | 'SHA-512') {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Usage: all computation happens in the browser
const hash = await hashString('hello world', 'SHA-256');
console.log(hash); // f7de... (calculated locally, never sent anywhere)`}</code>
        </pre>

        <p>
          This architecture ensures maximum security while delivering exceptional performance.
          Your data is your data — we simply provide the tools to process it.
        </p>

        <h2>Who We Serve</h2>

        <p>DevBench is built for developers across all specializations:</p>

        <ul>
          <li>
            <strong>Backend Developers:</strong> Format and validate JSON responses, test
            encryption algorithms, and debug encoding issues without switching tools.
          </li>
          <li>
            <strong>Frontend Developers:</strong> Encode/decode data, test regex patterns for
            form validation, and inspect API payloads — all within your browser.
          </li>
          <li>
            <strong>DevOps Engineers:</strong> Generate cryptographic hashes, validate
            configuration files, and debug URL encoding issues on the fly.
          </li>
          <li>
            <strong>Security Researchers:</strong> Test hashing algorithms, explore encoding
            schemes, and verify cryptographic implementations in a controlled environment.
          </li>
          <li>
            <strong>Computer Science Students:</strong> Learn about data structures, regular
            expressions, cryptography, and networking through hands-on experimentation.
          </li>
          <li>
            <strong>QA Testers:</strong> Generate test data, validate API responses, and
            identify encoding issues without leaving your browser.
          </li>
        </ul>

        <h2>Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border border-border bg-dark-surface2 rounded-lg p-6">
            <div className="text-2xl text-accent font-mono mb-2">🔒</div>
            <h3 className="font-bold text-white mb-2">Privacy</h3>
            <p className="text-sm text-muted">
              Your data is sacred. We never collect, store, or log user inputs. All processing
              happens locally in your browser.
            </p>
          </div>

          <div className="border border-border bg-dark-surface2 rounded-lg p-6">
            <div className="text-2xl text-accent font-mono mb-2">⚡</div>
            <h3 className="font-bold text-white mb-2">Speed</h3>
            <p className="text-sm text-muted">
              Lightning-fast results powered by native browser APIs. No backend servers, no
              latency, no waiting.
            </p>
          </div>

          <div className="border border-border bg-dark-surface2 rounded-lg p-6">
            <div className="text-2xl text-accent font-mono mb-2">💎</div>
            <h3 className="font-bold text-white mb-2">Simplicity</h3>
            <p className="text-sm text-muted">
              Intuitive interfaces designed for developers. No clutter, no bloat, just the tools
              you need.
            </p>
          </div>

          <div className="border border-border bg-dark-surface2 rounded-lg p-6">
            <div className="text-2xl text-accent font-mono mb-2">♾️</div>
            <h3 className="font-bold text-white mb-2">Free Forever</h3>
            <p className="text-sm text-muted">
              DevBench is and always will be free. No premium tiers, no paywalls, no surprises.
            </p>
          </div>
        </div>

        <h2>The Tech Behind DevBench</h2>

        <p>
          DevBench is built on a modern, production-grade technology stack optimized for
          performance and developer experience:
        </p>

        <ul>
          <li>
            <strong>Next.js 14:</strong> React framework with App Router for optimal performance
            and SEO.
          </li>
          <li>
            <strong>React 18:</strong> Modern UI library with concurrent rendering and hooks.
          </li>
          <li>
            <strong>TypeScript:</strong> Type-safe code for reliability and maintainability.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Utility-first styling for consistent, responsive
            design.
          </li>
          <li>
            <strong>Web Crypto API:</strong> Browser-native cryptography for secure hashing and
            encryption.
          </li>
          <li>
            <strong>Vercel Edge Network:</strong> Global CDN deployment for lightning-fast
            content delivery worldwide.
          </li>
        </ul>

        <p>
          Our architecture ensures that DevBench is not only fast and private but also reliable,
          scalable, and maintainable for years to come.
        </p>

        <h2>Committed to Your Privacy</h2>

        <p>
          We take privacy seriously. Here's what you should know:
        </p>

        <ul>
          <li>
            <strong>No Cookies for Tracking:</strong> We don't use cookies to track your
            behavior or build user profiles.
          </li>
          <li>
            <strong>No Analytics on Input:</strong> We don't log, store, or analyze the data you
            input into our tools.
          </li>
          <li>
            <strong>Transparent Data Flow:</strong> Check the Network tab in DevTools — you'll
            see your data never leaves your device.
          </li>
          <li>
            <strong>Open Source:</strong> Our code is open-source and auditable by the community.
          </li>
          <li>
            <strong>Clear Privacy Policy:</strong> Read our detailed{' '}
            <Link href="/privacy-policy" className="text-accent hover:text-green-400">
              privacy policy
            </Link>{' '}
            for complete transparency.
          </li>
        </ul>

        <h2>Join Our Community</h2>

        <p>
          DevBench is built by developers, for developers. We welcome contributions from the
          community:
        </p>

        <ul>
          <li>
            <strong>Report Bugs:</strong> Found an issue?{' '}
            <Link href="/contact" className="text-accent hover:text-green-400">
              Contact us
            </Link>{' '}
            or open an issue on GitHub.
          </li>
          <li>
            <strong>Request Features:</strong> Have an idea for a new tool? We'd love to hear it.
          </li>
          <li>
            <strong>Contribute Code:</strong> Our repositories are open-source. Submit pull
            requests and help us improve.
          </li>
          <li>
            <strong>Spread the Word:</strong> Share DevBench with your developer friends and
            colleagues.
          </li>
        </ul>

        <h2>What's Next?</h2>

        <p>
          DevBench is constantly evolving. Our roadmap includes new tools, performance
          improvements, and community features. Check back regularly for updates, or{' '}
          <Link href="/contact" className="text-accent hover:text-green-400">
            reach out
          </Link>{' '}
          to suggest what you'd like to see next.
        </p>

        <p>
          Thank you for using DevBench. We're excited to be part of your development workflow.
        </p>
      </Prose>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateAboutPageSchema(),
        }}
      />
    </div>
  );
}
