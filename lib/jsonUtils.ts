/**
 * JSON formatting and validation utilities
 */

export const formatJSON = (
  jsonString: string,
  spaces: number = 2,
  minify: boolean = false
): { formatted: string; error: null } | { formatted: null; error: string } => {
  try {
    const parsed = JSON.parse(jsonString);
    if (minify) {
      return { formatted: JSON.stringify(parsed), error: null };
    }
    return {
      formatted: JSON.stringify(parsed, null, spaces),
      error: null,
    };
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Invalid JSON';
    return { formatted: null, error };
  }
};

export const validateJSON = (
  jsonString: string
): {
  valid: boolean;
  error?: string;
  line?: number;
} => {
  try {
    JSON.parse(jsonString);
    return { valid: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Invalid JSON';
    const lineMatch = error.match(/position (\d+)/);
    const position = lineMatch ? parseInt(lineMatch[1], 10) : undefined;

    let line = 1;
    if (position) {
      line = jsonString.substring(0, position).split('\n').length;
    }

    return {
      valid: false,
      error,
      line,
    };
  }
};

export const minifyJSON = (jsonString: string): string => {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed);
  } catch {
    return jsonString;
  }
};

export const prettifyJSON = (
  jsonString: string,
  spaces: number = 2
): string => {
  try {
    const parsed = JSON.parse(jsonString);
    return JSON.stringify(parsed, null, spaces);
  } catch {
    return jsonString;
  }
};
