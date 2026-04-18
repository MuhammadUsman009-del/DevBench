'use client';

import { useState } from 'react';
import ToolLayout from '@/components/ToolLayout';
import CopyButton from '@/components/CopyButton';

export default function URLEncoderPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode' | 'auto'>('auto');

  const autoDetectMode = (text: string): 'encode' | 'decode' => {
    try {
      const decoded = decodeURIComponent(text);
      return decoded !== text ? 'decode' : 'encode';
    } catch {
      return 'encode';
    }
  };

  const handleEncode = () => {
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
    } catch (err) {
      setOutput('');
    }
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
    } catch (err) {
      setOutput('');
    }
  };

  const handleConvert = () => {
    if (!input.trim()) return;

    if (mode === 'auto') {
      const detectedMode = autoDetectMode(input);
      if (detectedMode === 'encode') {
        handleEncode();
      } else {
        handleDecode();
      }
    } else if (mode === 'encode') {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const handleSample = () => {
    setInput('Hello World! This is a sample string with special chars: @#$%');
    setMode('encode');
    setOutput('');
  };

  const handleFullURLSample = () => {
    setInput('https://example.com/search?q=hello world&lang=en');
    setMode('encode');
    setOutput('');
  };

  return (
    <ToolLayout
      title="URL Encoder & Decoder"
      description="Encode plain text to URL-encoded strings or decode URL-encoded data. Smart URL handling."
    >
      {/* Input Panel */}
      <div className="lg:col-span-2">
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Input</label>
            <div className="flex gap-2">
              <button
                onClick={handleSample}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                Text
              </button>
              <button
                onClick={handleFullURLSample}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                URL
              </button>
            </div>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste text or URL to encode/decode..."
            className="w-full h-96 p-4 bg-dark-surface text-text font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />

          {/* Controls */}
          <div className="bg-dark-surface2 px-4 py-3 border-t border-border flex flex-wrap gap-2">
            <button
              onClick={handleConvert}
              className="px-3 py-2 bg-accent text-dark-bg rounded text-sm font-medium hover:bg-green-400 transition-colors"
            >
              Convert (Ctrl+Enter)
            </button>

            <div className="flex gap-2 border-l border-border pl-2">
              <button
                onClick={() => {
                  setMode('encode');
                  setOutput('');
                }}
                className={`px-3 py-2 rounded text-sm transition-colors ${
                  mode === 'encode'
                    ? 'bg-accent text-dark-bg font-medium'
                    : 'bg-surface border border-border hover:border-accent hover:text-accent'
                }`}
              >
                Encode
              </button>
              <button
                onClick={() => {
                  setMode('decode');
                  setOutput('');
                }}
                className={`px-3 py-2 rounded text-sm transition-colors ${
                  mode === 'decode'
                    ? 'bg-accent text-dark-bg font-medium'
                    : 'bg-surface border border-border hover:border-accent hover:text-accent'
                }`}
              >
                Decode
              </button>
              <button
                onClick={() => {
                  setMode('auto');
                  setOutput('');
                }}
                className={`px-3 py-2 rounded text-sm transition-colors ${
                  mode === 'auto'
                    ? 'bg-accent text-dark-bg font-medium'
                    : 'bg-surface border border-border hover:border-accent hover:text-accent'
                }`}
              >
                Auto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Output Panel */}
      <div>
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Output</label>
            {output && <CopyButton text={output} label="Copy" />}
          </div>

          <textarea
            value={output}
            readOnly
            placeholder="Result will appear here"
            className="w-full h-96 p-4 bg-dark-surface text-text font-mono text-sm resize-none focus:outline-none"
          />
        </div>
      </div>

      {/* Reference Section */}
      <div className="lg:col-span-3 mt-12">
        <h2 className="text-2xl font-bold mb-6">URL Encoding Reference</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-3 text-accent">Common Characters</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span>Space</span>
                <span className="text-accent2">%20</span>
              </div>
              <div className="flex justify-between">
                <span>!</span>
                <span className="text-accent2">%21</span>
              </div>
              <div className="flex justify-between">
                <span>#</span>
                <span className="text-accent2">%23</span>
              </div>
              <div className="flex justify-between">
                <span>$</span>
                <span className="text-accent2">%24</span>
              </div>
              <div className="flex justify-between">
                <span>&</span>
                <span className="text-accent2">%26</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-3 text-accent">Why Encode URLs?</h3>
            <ul className="text-sm text-muted space-y-2 list-disc list-inside">
              <li>Safely transmit special characters</li>
              <li>Comply with URL standards</li>
              <li>Prevent injection attacks</li>
              <li>Handle non-ASCII characters</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="p-4 bg-dark-surface rounded-lg border border-border">
          <h3 className="font-bold mb-3 text-accent">Common Use Cases</h3>
          <ul className="text-sm text-muted space-y-2">
            <li>• <strong>Query parameters:</strong> Encode form data before sending in URLs</li>
            <li>• <strong>API calls:</strong> Encode user input for REST API endpoints</li>
            <li>• <strong>Analytics:</strong> Encode tracking parameters for URLs</li>
            <li>• <strong>Email addresses:</strong> Encode before using in mailto links</li>
            <li>• <strong>File names:</strong> Encode special characters in file URLs</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
}
