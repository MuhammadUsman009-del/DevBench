import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevBench — Free Online Developer Tools: JSON, Base64, Regex & More',
  description:
    'Free online developer tools suite. Format JSON, encode Base64, test Regex, generate hashes. No installation needed, 100% client-side processing.',
  keywords:
    'developer tools, json formatter, base64 encoder, url encoder, regex tester, hash generator, online tools, free tools',
  authors: [{ name: 'DevBench' }],
  openGraph: {
    type: 'website',
    url: 'https://devbench.vercel.app',
    title: 'DevBench — Free Online Developer Tools',
    description: 'Free online developer tools suite for developers. Format JSON, encode Base64, test Regex, and more.',
    siteName: 'DevBench',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevBench — Free Online Developer Tools',
    description: 'Free online developer tools suite for developers.',
  },
  alternates: {
    canonical: 'https://devbench.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'DevBench',
              description: 'Free online developer tools suite',
              url: 'https://devbench.vercel.app',
              applicationCategory: 'DeveloperApplication',
            }),
          }}
        />
      </head>
      <body className="bg-dark-bg text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
