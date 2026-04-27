interface ProseProps {
  children: React.ReactNode;
}

export default function Prose({ children }: ProseProps) {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-8">
      <style>{`
        .prose {
          --tw-prose-body: #c9d1d9;
          --tw-prose-headings: #39d353;
          --tw-prose-lead: #8b949e;
          --tw-prose-links: #58a6ff;
          --tw-prose-bold: #c9d1d9;
          --tw-prose-counters: #39d353;
          --tw-prose-bullets: #39d353;
          --tw-prose-hr: #30363d;
          --tw-prose-quotes: #8b949e;
          --tw-prose-quote-borders: #39d353;
          --tw-prose-captions: #8b949e;
          --tw-prose-code: #f85149;
          --tw-prose-pre-bg: #0d1117;
          --tw-prose-pre-code: #c9d1d9;
          --tw-prose-th-borders: #30363d;
          --tw-prose-td-borders: #30363d;
        }

        .prose {
          color: var(--tw-prose-body);
          line-height: 1.75;
        }

        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: var(--tw-prose-headings);
          font-weight: 700;
          margin-top: 1.5em;
          margin-bottom: 0.75em;
          line-height: 1.25;
        }

        .prose h1 {
          font-size: 2.25rem;
          margin-top: 0;
        }

        .prose h2 {
          font-size: 1.875rem;
          border-bottom: 1px solid var(--tw-prose-hr);
          padding-bottom: 0.5em;
        }

        .prose h3 {
          font-size: 1.5rem;
        }

        .prose p {
          margin-bottom: 1.25em;
        }

        .prose a {
          color: var(--tw-prose-links);
          text-decoration: underline;
          transition: color 0.2s;
        }

        .prose a:hover {
          color: #39d353;
        }

        .prose strong {
          color: var(--tw-prose-bold);
          font-weight: 700;
        }

        .prose code {
          background-color: rgba(248, 81, 73, 0.1);
          color: var(--tw-prose-code);
          padding: 0.125em 0.375em;
          border-radius: 0.25rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9em;
        }

        .prose pre {
          background-color: var(--tw-prose-pre-bg);
          border: 1px solid var(--tw-prose-hr);
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          margin-bottom: 1.25em;
        }

        .prose pre code {
          background-color: transparent;
          color: var(--tw-prose-pre-code);
          padding: 0;
          border-radius: 0;
        }

        .prose ul, .prose ol {
          margin-bottom: 1.25em;
          padding-left: 1.5em;
        }

        .prose li {
          margin-bottom: 0.5em;
        }

        .prose ul > li::marker {
          color: var(--tw-prose-bullets);
        }

        .prose ol > li::marker {
          color: var(--tw-prose-counters);
        }

        .prose blockquote {
          border-left: 4px solid var(--tw-prose-quote-borders);
          color: var(--tw-prose-quotes);
          padding-left: 1em;
          margin-left: 0;
          margin-bottom: 1.25em;
          font-style: italic;
        }

        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.25em;
        }

        .prose th, .prose td {
          border: 1px solid var(--tw-prose-td-borders);
          padding: 0.75em;
          text-align: left;
        }

        .prose th {
          background-color: rgba(88, 166, 255, 0.1);
          font-weight: 700;
          color: var(--tw-prose-headings);
        }

        .prose hr {
          border-color: var(--tw-prose-hr);
          margin: 2em 0;
        }

        .prose img {
          border-radius: 0.5rem;
          max-width: 100%;
          height: auto;
          margin: 1.5em 0;
        }

        .prose :not(pre) > code::before,
        .prose :not(pre) > code::after {
          content: '';
        }
      `}</style>
      {children}
    </article>
  );
}
