import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
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
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3504045393651231"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PS4FPR5P22"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PS4FPR5P22');
            `,
          }}
        />
      </head>
      <body className="bg-dark-bg text-text">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="absolute -top-full left-0 bg-accent text-dark-bg px-4 py-2 focus:top-0 z-50 rounded-b"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}