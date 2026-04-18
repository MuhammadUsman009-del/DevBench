'use client';

import { useState, useEffect } from 'react';
import { formatJSON, validateJSON, minifyJSON } from '@/lib/jsonUtils';
import ToolLayout from '@/components/ToolLayout';
import CopyButton from '@/components/CopyButton';

function TreeNodeComponent({ data, level = 0, expanded = false }: { data: any; level?: number; expanded?: boolean }): React.ReactNode {
  if (data === null) return <span className="text-error">null</span>;
  if (typeof data === 'boolean') return <span className="text-accent2">{String(data)}</span>;
  if (typeof data === 'number') return <span className="text-accent2">{data}</span>;
  if (typeof data === 'string') return <span className="text-accent">&quot;{data}&quot;</span>;

  if (Array.isArray(data)) {
    return (
      <div>
        <span className="font-mono text-accent2">{`Array [${data.length}]`}</span>
        {expanded && (
          <div className="ml-4 mt-2 space-y-1">
            {data.map((item, i) => (
              <div key={i} className="font-mono text-sm">
                <span className="text-accent2">[{i}]:</span> {TreeNodeComponent({ data: item, level: level + 1, expanded: true })}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (typeof data === 'object') {
    const keys = Object.keys(data);
    return (
      <div>
        <span className="font-mono text-accent">{`Object {${keys.length}}`}</span>
        {expanded && (
          <div className="ml-4 mt-2 space-y-1">
            {keys.map((key) => (
              <div key={key} className="font-mono text-sm">
                <span className="text-accent">{key}</span>
                <span className="text-muted">: </span>
                {TreeNodeComponent({ data: data[key], level: level + 1, expanded: true })}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default function JsonFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<{ message: string; line?: number } | null>(null);
  const [spaces, setSpaces] = useState(2);
  const [minify] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const [jsonTree, setJsonTree] = useState<any>(null);

  useEffect(() => {
    if (input.trim()) {
      const result = formatJSON(input, spaces, minify);
      if (result.error) {
        const validation = validateJSON(input);
        setError({
          message: result.error,
          line: validation.line,
        });
        setOutput('');
        setJsonTree(null);
      } else {
        setError(null);
        setOutput(result.formatted!);
        try {
          setJsonTree(JSON.parse(result.formatted!));
        } catch {
          setJsonTree(null);
        }
      }
    } else {
      setOutput('');
      setError(null);
      setJsonTree(null);
    }
  }, [input, spaces, minify]);

  const handleFormat = () => {
    if (input.trim()) {
      const result = formatJSON(input, spaces, false);
      if (result.formatted) {
        setInput(result.formatted);
      }
    }
  };

  const handleMinify = () => {
    if (input.trim()) {
      const minified = minifyJSON(input);
      setInput(minified);
    }
  };

  const handleSampleJSON = () => {
    const sample = JSON.stringify(
      {
        name: 'DevBench',
        version: '1.0.0',
        tools: ['JSON Formatter', 'Base64 Encoder', 'URL Encoder', 'Regex Tester', 'Hash Generator'],
        features: {
          clientSide: true,
          freeForever: true,
          noDataStored: true,
        },
      },
      null,
      2
    );
    setInput(sample);
  };

  return (
    <ToolLayout
      title="JSON Formatter & Validator"
      description="Pretty print, validate, and minify JSON. Syntax highlighting and tree view included."
    >
      {/* Input Panel */}
      <div className="lg:col-span-2">
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Input</label>
            <div className="flex gap-2">
              <button
                onClick={handleSampleJSON}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                Sample
              </button>
            </div>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste JSON here... or click "Sample" to try an example'
            className="w-full h-96 p-4 bg-dark-surface text-text font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />

          {/* Controls */}
          <div className="bg-dark-surface2 px-4 py-3 border-t border-border flex flex-wrap gap-2">
            <button
              onClick={handleFormat}
              className="px-3 py-2 bg-accent text-dark-bg rounded text-sm font-medium hover:bg-green-400 transition-colors"
            >
              Format (Ctrl+Enter)
            </button>
            <button
              onClick={handleMinify}
              className="px-3 py-2 bg-surface border border-border rounded text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Minify
            </button>

            <select
              value={spaces}
              onChange={(e) => setSpaces(Number(e.target.value))}
              disabled={minify}
              className="px-3 py-2 bg-surface border border-border rounded text-sm text-text cursor-pointer"
            >
              <option value={2}>2 Spaces</option>
              <option value={4}>4 Spaces</option>
            </select>

            <label className="flex items-center gap-2 px-3 py-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showTree}
                onChange={(e) => setShowTree(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm">Tree View</span>
            </label>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-error/10 border-t border-error px-4 py-3 text-error text-sm font-mono">
              <div className="font-semibold mb-1">✗ Invalid JSON</div>
              <div>{error.message}</div>
              {error.line && <div className="mt-1 text-xs opacity-75">Line {error.line}</div>}
            </div>
          )}
        </div>
      </div>

      {/* Output Panel */}
      <div>
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Output</label>
            {output && <CopyButton text={output} label="Copy" />}
          </div>

          <div className="h-96 overflow-auto">
            {!error && output ? (
              <pre className="p-4 text-text font-mono text-sm whitespace-pre-wrap break-words">{output}</pre>
            ) : (
              <div className="p-4 text-muted text-sm flex items-center justify-center h-full text-center">
                {error ? 'Fix the JSON to see formatted output' : 'Paste JSON to format'}
              </div>
            )}
          </div>

          {/* Success Indicator */}
          {!error && output && (
            <div className="bg-success/10 border-t border-success px-4 py-2 text-success text-sm font-mono flex items-center gap-2">
              <span>✓</span> Valid JSON
            </div>
          )}
        </div>

        {/* Tree View Panel */}
        {showTree && jsonTree && (
          <div className="mt-4 bg-dark-surface rounded-lg border border-border overflow-hidden">
            <div className="bg-dark-surface2 px-4 py-3 border-b border-border font-mono text-sm font-semibold">
              JSON Tree
            </div>
            <div className="p-4 text-sm font-mono overflow-auto max-h-96">
              {TreeNodeComponent({ data: jsonTree, expanded: true })}
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="lg:col-span-3 mt-12">
        <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">API Debugging</h3>
            <p className="text-muted text-sm">
              Paste API responses and instantly see the structure. Validate before sending to your application.
            </p>
          </div>
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">Config Validation</h3>
            <p className="text-muted text-sm">
              Verify JSON configuration files are properly formatted before deployment.
            </p>
          </div>
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">Data Minimization</h3>
            <p className="text-muted text-sm">
              Minify JSON to reduce file size for production or data transfer.
            </p>
          </div>
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-2 text-accent">Structure Exploration</h3>
            <p className="text-muted text-sm">
              Use tree view to navigate complex nested JSON structures easily.
            </p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
