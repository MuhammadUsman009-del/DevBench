'use client';

import { useState } from 'react';
import ToolLayout from '@/components/ToolLayout';
import CopyButton from '@/components/CopyButton';

export default function Base64Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [urlSafe, setUrlSafe] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleEncode = () => {
    try {
      let encoded = btoa(input);
      if (urlSafe) {
        encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }
      setOutput(encoded);
    } catch (err) {
      setOutput('');
    }
  };

  const handleDecode = () => {
    try {
      let encoded = input;
      if (urlSafe) {
        encoded = encoded.replace(/-/g, '+').replace(/_/g, '/');
        // Add padding
        const padding = 4 - (encoded.length % 4);
        if (padding !== 4) {
          encoded += '='.repeat(padding);
        }
      }
      const decoded = atob(encoded);
      setOutput(decoded);
    } catch (err) {
      setOutput('');
    }
  };

  const handleConvert = () => {
    if (mode === 'encode') {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const base64 = content.split(',')[1];
      setInput(base64);
      setMode('decode');
      setOutput('');
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSample = () => {
    const sample = 'DevBench - Free Online Developer Tools';
    setInput(sample);
    setMode('encode');
    setOutput('');
  };

  return (
    <ToolLayout
      title="Base64 Encoder & Decoder"
      description="Encode text to Base64 or decode Base64 to text. Support for URL-safe encoding and file uploads."
    >
      {/* Input Panel */}
      <div className="lg:col-span-2">
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Input ({mode})</label>
            <button
              onClick={handleSample}
              className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
            >
              Sample
            </button>
          </div>

          {/* File Drop Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative ${dragActive ? 'bg-accent/10' : ''}`}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                mode === 'encode'
                  ? 'Paste text to encode... or drag a file here'
                  : 'Paste Base64 to decode...'
              }
              className="w-full h-96 p-4 bg-dark-surface text-text font-mono text-sm resize-none focus:outline-none"
              spellCheck={false}
            />
            {dragActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-accent/20 rounded-lg border-2 border-dashed border-accent pointer-events-none">
                <div className="text-center">
                  <p className="font-semibold">Drop file to upload</p>
                  <p className="text-sm text-muted">PNG, JPG, PDF, etc.</p>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="bg-dark-surface2 px-4 py-3 border-t border-border flex flex-wrap gap-2">
            <button
              onClick={handleConvert}
              className="px-3 py-2 bg-accent text-dark-bg rounded text-sm font-medium hover:bg-green-400 transition-colors"
            >
              {mode === 'encode' ? 'Encode' : 'Decode'} (Ctrl+Enter)
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
            </div>

            <label className="flex items-center gap-2 px-3 py-2 cursor-pointer border-l border-border pl-2">
              <input
                type="checkbox"
                checked={urlSafe}
                onChange={(e) => setUrlSafe(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm">URL-Safe</span>
            </label>
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

      {/* FAQ Section */}
      <div className="lg:col-span-3 mt-12">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">What is Base64?</h3>
            <p className="text-muted text-sm">
              Base64 is an encoding scheme that converts binary data into ASCII text format, making it safe to transmit over text-based protocols.
            </p>
          </div>
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">When to use URL-Safe?</h3>
            <p className="text-muted text-sm">
              URL-Safe Base64 replaces characters that have special meaning in URLs (+, /, =) with URL-safe alternatives (-, _, nothing).
            </p>
          </div>
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">File Upload Support</h3>
            <p className="text-muted text-sm">
              Drag and drop or paste data URLs. The tool automatically detects and converts file data to Base64.
            </p>
          </div>
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">Common Use Cases</h3>
            <p className="text-muted text-sm">
              API authentication headers, embedding images in HTML/CSS, encoding credentials, transmitting binary data over JSON.
            </p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
