'use client';

import { useState } from 'react';
import { testRegex, replaceWithRegex, highlightMatches, REGEX_PRESETS } from '@/lib/regexUtils';
import ToolLayout from '@/components/ToolLayout';
import CopyButton from '@/components/CopyButton';

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [replacement, setReplacement] = useState('');
  const [showReplace, setShowReplace] = useState(false);
  const [flags, setFlags] = useState({ g: true, i: false, m: false, s: false });
  const [matches, setMatches] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [replaceResult, setReplaceResult] = useState('');
  const [highlightHtml, setHighlightHtml] = useState('');

  const handleTest = () => {
    if (!pattern) {
      setMatches([]);
      setError('');
      return;
    }

    const flagsStr = Object.entries(flags)
      .filter(([_, enabled]) => enabled)
      .map(([flag]) => flag)
      .join('');

    const result = testRegex(pattern, flagsStr, testString);
    if (result.error) {
      setError(result.error);
      setMatches([]);
    } else {
      setError('');
      setMatches(result.matches);

      // Generate highlighted version
      const highlight = highlightMatches(pattern, flagsStr, testString);
      setHighlightHtml(highlight.html);
    }
  };

  const handleReplace = () => {
    const flagsStr = Object.entries(flags)
      .filter(([_, enabled]) => enabled)
      .map(([flag]) => flag)
      .join('');

    const result = replaceWithRegex(pattern, flagsStr, testString, replacement);
    if (result.error) {
      setError(result.error);
      setReplaceResult('');
    } else {
      setError('');
      setReplaceResult(result.result);
    }
  };

  const handlePreset = (presetKey: string) => {
    const preset = REGEX_PRESETS[presetKey as keyof typeof REGEX_PRESETS];
    setPattern(preset.pattern);
    setFlags({
      g: preset.flags.includes('g'),
      i: preset.flags.includes('i'),
      m: preset.flags.includes('m'),
      s: preset.flags.includes('s'),
    });
  };

  const handleSampleEmail = () => {
    setPattern(REGEX_PRESETS.email.pattern);
    setTestString('test@example.com\ninvalid.email\nuser@domain.co.uk');
    handleTest();
  };

  const handleSamplePhone = () => {
    setPattern(REGEX_PRESETS.phone.pattern);
    setTestString('+1-234-567-8900\n(555) 123-4567\n555.123.4567');
    handleTest();
  };

  return (
    <ToolLayout
      title="Regex Tester"
      description="Test and debug regular expressions with live matching, highlighting, and replacement."
    >
      {/* Pattern Input */}
      <div className="lg:col-span-3">
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden mb-6">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border font-mono text-sm font-semibold">
            Regular Expression Pattern
          </div>

          <div className="p-4">
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="/pattern/flags — Try: email, phone, or URL patterns"
              className="w-full px-3 py-2 bg-dark-surface border border-border rounded text-text font-mono text-sm focus:outline-none focus:border-accent"
              spellCheck={false}
            />
          </div>

          {/* Flags */}
          <div className="bg-dark-surface2 px-4 py-3 border-t border-border flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={flags.g}
                onChange={(e) => setFlags({ ...flags, g: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm font-mono font-semibold">g</span>
              <span className="text-xs text-muted">Global</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={flags.i}
                onChange={(e) => setFlags({ ...flags, i: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm font-mono font-semibold">i</span>
              <span className="text-xs text-muted">Case-insensitive</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={flags.m}
                onChange={(e) => setFlags({ ...flags, m: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm font-mono font-semibold">m</span>
              <span className="text-xs text-muted">Multiline</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={flags.s}
                onChange={(e) => setFlags({ ...flags, s: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm font-mono font-semibold">s</span>
              <span className="text-xs text-muted">Dotall</span>
            </label>
          </div>

          {/* Presets */}
          <div className="bg-dark-surface px-4 py-3 border-t border-border">
            <p className="text-xs text-muted mb-2">Quick Presets:</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(REGEX_PRESETS).map(([key, preset]) => (
                <button
                  key={key}
                  onClick={() => handlePreset(key)}
                  className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
                  title={preset.description}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Test String */}
      <div className="lg:col-span-2">
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border flex items-center justify-between">
            <label className="font-mono text-sm font-semibold">Test String</label>
            <div className="flex gap-2">
              <button
                onClick={handleSampleEmail}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                Email
              </button>
              <button
                onClick={handleSamplePhone}
                className="text-xs px-2 py-1 bg-surface rounded hover:bg-surface2 border border-border transition-colors"
              >
                Phone
              </button>
            </div>
          </div>

          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Enter text to test the regex against..."
            className="w-full h-64 p-4 bg-dark-surface text-text font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />

          {/* Controls */}
          <div className="bg-dark-surface2 px-4 py-3 border-t border-border flex gap-2">
            <button
              onClick={handleTest}
              className="px-3 py-2 bg-accent text-dark-bg rounded text-sm font-medium hover:bg-green-400 transition-colors"
            >
              Test (Ctrl+Enter)
            </button>
            <button
              onClick={() => setShowReplace(!showReplace)}
              className={`px-3 py-2 rounded text-sm transition-colors ${
                showReplace
                  ? 'bg-accent text-dark-bg font-medium'
                  : 'bg-surface border border-border hover:border-accent hover:text-accent'
              }`}
            >
              Replace
            </button>
          </div>
        </div>
      </div>

      {/* Matches Results */}
      <div>
        <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
          <div className="bg-dark-surface2 px-4 py-3 border-b border-border font-mono text-sm font-semibold">
            Matches {matches.length > 0 && <span className="text-accent">({matches.length})</span>}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {error ? (
              <div className="p-4 text-error text-sm">
                <div className="font-semibold mb-1">✗ Regex Error</div>
                <div className="font-mono text-xs">{error}</div>
              </div>
            ) : matches.length > 0 ? (
              <div className="divide-y divide-border">
                {matches.map((match, i) => (
                  <div key={i} className="p-3 text-sm hover:bg-dark-surface2 transition-colors">
                    <div className="font-mono font-semibold text-accent mb-1">Match {i + 1}:</div>
                    <div className="ml-2 text-text break-all">&quot;{match.match}&quot;</div>
                    {match.groups && Object.keys(match.groups).length > 0 && (
                      <div className="mt-2 ml-2 border-l border-border pl-2 text-xs">
                        {Object.entries(match.groups).map(([groupName, groupValue]) => (
                          <div key={groupName} className="text-accent2">
                            {groupName}: &quot;{String(groupValue)}&quot;
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : pattern ? (
              <div className="p-4 text-muted text-sm">No matches found</div>
            ) : (
              <div className="p-4 text-muted text-sm">Enter a pattern to test</div>
            )}
          </div>
        </div>
      </div>

      {/* Replacement Panel */}
      {showReplace && (
        <div className="lg:col-span-3">
          <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
            <div className="bg-dark-surface2 px-4 py-3 border-b border-border font-mono text-sm font-semibold">
              Replace
            </div>

            <div className="p-4 space-y-3">
              <div>
                <label className="block text-sm text-muted mb-2">Replacement String</label>
                <input
                  type="text"
                  value={replacement}
                  onChange={(e) => setReplacement(e.target.value)}
                  placeholder="Enter replacement string (supports $1, $2 for groups)"
                  className="w-full px-3 py-2 bg-dark-surface border border-border rounded text-text font-mono text-sm focus:outline-none focus:border-accent"
                />
              </div>

              <button
                onClick={handleReplace}
                className="px-3 py-2 bg-accent2 text-dark-bg rounded text-sm font-medium hover:bg-blue-400 transition-colors w-full"
              >
                Replace All
              </button>

              {replaceResult && (
                <div className="p-3 bg-dark-surface2 rounded border border-border">
                  <div className="text-xs text-muted mb-2">Result:</div>
                  <div className="font-mono text-sm text-text break-all">{replaceResult}</div>
                  <div className="mt-2">
                    <CopyButton text={replaceResult} label="Copy Result" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Highlighted Result */}
      {highlightHtml && (
        <div className="lg:col-span-3">
          <div className="bg-dark-surface rounded-lg border border-border overflow-hidden">
            <div className="bg-dark-surface2 px-4 py-3 border-b border-border font-mono text-sm font-semibold">
              Highlighted Text
            </div>
            <div
              className="p-4 font-mono text-sm whitespace-pre-wrap break-words"
              dangerouslySetInnerHTML={{
                __html: highlightHtml.replace(/\n/g, '<br/>'),
              }}
            />
          </div>
        </div>
      )}

      {/* Reference Section */}
      <div className="lg:col-span-3 mt-12">
        <h2 className="text-2xl font-bold mb-6">Regex Reference</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-3 text-accent">Character Classes</h3>
            <div className="space-y-1 text-sm font-mono">
              <div>
                <span className="text-accent2">.</span>
                <span className="text-muted"> — Any character</span>
              </div>
              <div>
                <span className="text-accent2">\d</span>
                <span className="text-muted"> — Digit [0-9]</span>
              </div>
              <div>
                <span className="text-accent2">\w</span>
                <span className="text-muted"> — Word character</span>
              </div>
              <div>
                <span className="text-accent2">\s</span>
                <span className="text-muted"> — Whitespace</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-dark-surface rounded-lg border border-border">
            <h3 className="font-bold mb-3 text-accent">Quantifiers</h3>
            <div className="space-y-1 text-sm font-mono">
              <div>
                <span className="text-accent2">*</span>
                <span className="text-muted"> — 0 or more</span>
              </div>
              <div>
                <span className="text-accent2">+</span>
                <span className="text-muted"> — 1 or more</span>
              </div>
              <div>
                <span className="text-accent2">?</span>
                <span className="text-muted"> — 0 or 1</span>
              </div>
              <div>
                <span className="text-accent2">{'{3,5}'}</span>
                <span className="text-muted"> — 3 to 5 times</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
