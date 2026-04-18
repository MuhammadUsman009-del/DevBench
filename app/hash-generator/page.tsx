'use client';

import { useState } from 'react';
import { generateHashes, compareHashes } from '@/lib/cryptoUtils';
import ToolLayout from '@/components/ToolLayout';
import CopyButton from '@/components/CopyButton';

export default function HashGeneratorPage() {
  const [input, setInput] = useState('');
  const [hashes, setHashes] = useState<Array<{ algorithm: string; hash: string }>>([]);
  const [compareHash, setCompareHash] = useState('');
  const [compareResult, setCompareResult] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) {
      setHashes([]);
      return;
    }

    setLoading(true);
    try {
      const results = await generateHashes(input);
      setHashes(results);
    } finally {
      setLoading(false);
    }
  };

  const handleCompare = () => {
    if (!compareHash.trim() || hashes.length === 0) return;

    // Check against all generated hashes
    const found = hashes.find((h) => compareHashes(h.hash, compareHash));
    setCompareResult(!!found);
  };

  const handleSampleText = () => {
    setInput('DevBench - Free Online Developer Tools');
    setCompareHash('');
    setCompareResult(null);
  };

  const handleSamplePassword = () => {
    setInput('MySecurePassword123!');
    setCompareHash('');
    setCompareResult(null);
  };

  const handleClearCompare = () => {
    setCompareHash('');
    setCompareResult(null);
  };

  return (
    <ToolLayout
      title="Hash Generator"
      description="Generate MD5, SHA-1, SHA-256, and SHA-512 hashes. Compare hashes for integrity verification."
    >
      {/* Input Panel */}
      <div className="lg:col-span-2">
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Input Text</label>
            <div className="flex gap-2">
              <button
                onClick={handleSampleText}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                Sample
              </button>
              <button
                onClick={handleSamplePassword}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                Password
              </button>
            </div>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text, password, or paste content to generate hashes..."
            className="w-full h-64 p-4 bg-dark-surface text-text font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />

          {/* Controls */}
          <div className="bg-dark-surface2 px-4 py-3 border-t border-border">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-3 py-2 bg-accent text-dark-bg rounded text-sm font-medium hover:bg-green-400 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Generating...' : 'Generate (Ctrl+Enter)'}
            </button>
          </div>
        </div>
      </div>

      {/* Hashes Panel */}
      <div>
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border font-mono text-sm font-semibold">
            Generated Hashes
          </div>

          {hashes.length > 0 ? (
            <div className="divide-y divide-border max-h-96 overflow-y-auto">
              {hashes.map((h) => (
                <div key={h.algorithm} className="p-3 hover:bg-dark-surface2 transition-colors">
                  <div className="text-xs text-accent font-semibold mb-1">{h.algorithm}</div>
                  <div className="font-mono text-xs text-text break-all mb-2">{h.hash}</div>
                  <CopyButton text={h.hash} label="Copy" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-muted text-sm text-center">
              {loading ? 'Generating hashes...' : 'Hashes will appear here'}
            </div>
          )}
        </div>
      </div>

      {/* Comparison Panel */}
      <div className="lg:col-span-3">
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Hash Comparison (Verification)</label>
            {compareHash && (
              <button
                onClick={handleClearCompare}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <div className="p-4 space-y-3">
            <div>
              <label className="block text-sm text-muted mb-2">Paste hash to verify against generated hashes:</label>
              <input
                type="text"
                value={compareHash}
                onChange={(e) => setCompareHash(e.target.value)}
                placeholder="Paste a hash here to verify..."
                className="w-full px-3 py-2 bg-dark-surface border border-border rounded text-text font-mono text-sm focus:outline-none focus:border-accent"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCompare}
                disabled={!compareHash || hashes.length === 0}
                className="px-3 py-2 bg-accent2 text-dark-bg rounded text-sm font-medium hover:bg-blue-400 disabled:opacity-50 transition-colors"
              >
                Compare
              </button>
            </div>

            {compareResult !== null && (
              <div
                className={`p-3 rounded border ${
                  compareResult
                    ? 'bg-success/10 border-success text-success'
                    : 'bg-error/10 border-error text-error'
                } font-semibold text-sm`}
              >
                {compareResult ? '✓ Hash Match Found!' : '✗ No Match Found'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="lg:col-span-3 mt-12">
        <h2 className="text-2xl font-bold mb-6">Hash Algorithms</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">MD5</h3>
            <p className="text-muted text-sm mb-2">
              128-bit (16-byte) hash. Fast but cryptographically broken. Use for checksums only, not security.
            </p>
            <div className="text-xs text-muted font-mono">Output: 32 hex characters</div>
          </div>

          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">SHA-1</h3>
            <p className="text-muted text-sm mb-2">
              160-bit (20-byte) hash. No longer recommended for security. Deprecated but still used in legacy systems.
            </p>
            <div className="text-xs text-muted font-mono">Output: 40 hex characters</div>
          </div>

          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">SHA-256</h3>
            <p className="text-muted text-sm mb-2">
              256-bit (32-byte) hash. Part of SHA-2 family. Secure, widely used in blockchain and security applications.
            </p>
            <div className="text-xs text-muted font-mono">Output: 64 hex characters</div>
          </div>

          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">SHA-512</h3>
            <p className="text-muted text-sm mb-2">
              512-bit (64-byte) hash. Part of SHA-2 family. Maximum security, optimal for cryptographic applications.
            </p>
            <div className="text-xs text-muted font-mono">Output: 128 hex characters</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-dark-surface rounded-lg border border-border">
          <h3 className="font-bold mb-3 text-accent">Use Cases</h3>
          <ul className="text-sm text-muted space-y-2 list-disc list-inside">
            <li><strong>File Integrity:</strong> Generate hash of file and verify it hasn&apos;t been modified</li>
            <li><strong>Password Storage:</strong> Hash passwords before storing (though use bcrypt/argon2 instead)</li>
            <li><strong>Checksums:</strong> Verify data integrity across networks or backups</li>
            <li><strong>Digital Signatures:</strong> Sign documents with hashed content</li>
            <li><strong>Blockchain:</strong> Core component of blockchain technology and cryptocurrencies</li>
            <li><strong>Duplicate Detection:</strong> Find duplicate files by comparing their hashes</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
}
