'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
        copied
          ? 'bg-accent text-dark-bg'
          : 'bg-surface border border-border hover:border-accent hover:text-accent'
      }`}
    >
      {copied ? '✓ Copied!' : label}
    </button>
  );
}
