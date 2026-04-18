/**
 * Regular expression utilities
 */

export interface RegexMatch {
  match: string;
  index: number;
  groups?: Record<string, string | undefined>;
}

export const testRegex = (
  pattern: string,
  flags: string,
  testString: string
): {
  matches: RegexMatch[];
  error?: string;
} => {
  try {
    const regex = new RegExp(pattern, flags);
    const matches: RegexMatch[] = [];

    if (flags.includes('g')) {
      // Global flag - find all matches
      let match;
      while ((match = regex.exec(testString)) !== null) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.groups,
        });
      }
    } else {
      // No global flag - find first match
      const match = regex.exec(testString);
      if (match) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.groups,
        });
      }
    }

    return { matches };
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Invalid regex pattern';
    return { matches: [], error };
  }
};

export const replaceWithRegex = (
  pattern: string,
  flags: string,
  testString: string,
  replacement: string
): {
  result: string;
  error?: string;
} => {
  try {
    const regex = new RegExp(pattern, flags);
    const result = testString.replace(regex, replacement);
    return { result };
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Invalid regex pattern';
    return { result: '', error };
  }
};

export const highlightMatches = (
  pattern: string,
  flags: string,
  testString: string
): {
  html: string;
  error?: string;
} => {
  try {
    const regex = new RegExp(pattern, flags.includes('g') ? flags : flags + 'g');
    let lastIndex = 0;
    let html = '';

    let match;
    while ((match = regex.exec(testString)) !== null) {
      html += escapeHtml(testString.substring(lastIndex, match.index));
      html += `<mark>${escapeHtml(match[0])}</mark>`;
      lastIndex = regex.lastIndex;
    }
    html += escapeHtml(testString.substring(lastIndex));

    return { html };
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Invalid regex pattern';
    return { html: '', error };
  }
};

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

export const REGEX_PRESETS = {
  email: {
    pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
    flags: '',
    description: 'Email address',
  },
  url: {
    pattern: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&/=]*)',
    flags: '',
    description: 'URL',
  },
  phone: {
    pattern: '^[+]?[(]?[0-9]{1,4}[)]?[-\\s.]?[(]?[0-9]{1,4}[)]?[-\\s.]?[0-9]{1,9}$',
    flags: '',
    description: 'Phone number',
  },
  date: {
    pattern: '(0?[1-9]|[12][0-9]|3[01])[-/](0?[1-9]|1[012])[-/](19|20)?\\d\\d',
    flags: 'g',
    description: 'Date (DD/MM/YYYY)',
  },
  ipv4: {
    pattern: '\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b',
    flags: 'g',
    description: 'IPv4 address',
  },
  uuid: {
    pattern: '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}',
    flags: 'gi',
    description: 'UUID',
  },
  hex_color: {
    pattern: '#([a-f0-9]{6}|[a-f0-9]{3})',
    flags: 'gi',
    description: 'Hex color',
  },
  whitespace: {
    pattern: '\\s+',
    flags: 'g',
    description: 'Whitespace',
  },
};
