export const metadata = {
  title: 'Regular Expression Cheatsheet for Developers',
  slug: 'regex-cheatsheet-developers',
  date: 'April 5, 2025',
  category: 'Reference',
  readTime: 12,
};

export default function BlogPost() {
  return (
    <>
      <p>
        Regular expressions (regex) are one of the most powerful tools in a developer's toolkit, yet many developers avoid using them because they seem cryptic. This comprehensive cheatsheet covers everything from basic patterns to advanced techniques, with practical examples for real-world use cases.
      </p>

      <h2>What Are Regular Expressions?</h2>

      <p>
        A regular expression is a sequence of characters that defines a search pattern. Regex is used to match, find, and replace text in strings. Most programming languages support regex through built-in functions or libraries.
      </p>

      <h2>Basic Regex Syntax</h2>

      <h3>Character Classes</h3>

      <table>
        <thead>
          <tr>
            <th>Pattern</th>
            <th>Matches</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>.</td>
            <td>Any character except newline</td>
            <td>a.c matches "abc", "a1c"</td>
          </tr>
          <tr>
            <td>\d</td>
            <td>Any digit (0-9)</td>
            <td>\d+ matches "123"</td>
          </tr>
          <tr>
            <td>\D</td>
            <td>Any non-digit</td>
            <td>\D+ matches "abc"</td>
          </tr>
          <tr>
            <td>\w</td>
            <td>Word character (a-z, A-Z, 0-9, _)</td>
            <td>\w+ matches "hello_world"</td>
          </tr>
          <tr>
            <td>\W</td>
            <td>Non-word character</td>
            <td>\W matches " ", "-"</td>
          </tr>
          <tr>
            <td>\s</td>
            <td>Whitespace character</td>
            <td>\s matches space, tab, newline</td>
          </tr>
          <tr>
            <td>\S</td>
            <td>Non-whitespace</td>
            <td>\S+ matches "text"</td>
          </tr>
        </tbody>
      </table>

      <h3>Character Sets</h3>

      <pre>
        <code>{`[abc]       Matches 'a', 'b', or 'c'
[a-z]       Matches any lowercase letter
[A-Z]       Matches any uppercase letter
[0-9]       Matches any digit
[^abc]      Matches any character except 'a', 'b', 'c'
[a-zA-Z0-9] Matches alphanumeric characters`}</code>
      </pre>

      <h3>Quantifiers</h3>

      <table>
        <thead>
          <tr>
            <th>Quantifier</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>*</td>
            <td>0 or more times</td>
            <td>a* matches "", "a", "aa", "aaa"</td>
          </tr>
          <tr>
            <td>+</td>
            <td>1 or more times</td>
            <td>a+ matches "a", "aa", but not ""</td>
          </tr>
          <tr>
            <td>?</td>
            <td>0 or 1 time</td>
            <td>a? matches "" or "a"</td>
          </tr>
          <tr>
            <td>{n}</td>
            <td>Exactly n times</td>
            <td>a{3} matches "aaa"</td>
          </tr>
          <tr>
            <td>{n,}</td>
            <td>n or more times</td>
            <td>a{2,} matches "aa", "aaa"</td>
          </tr>
          <tr>
            <td>{n,m}</td>
            <td>Between n and m times</td>
            <td>a{2,4} matches "aa" to "aaaa"</td>
          </tr>
        </tbody>
      </table>

      <h2>Common Regex Patterns</h2>

      <h3>Email Validation</h3>

      <pre>
        <code>{`/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
Basic pattern: word@domain.extension

Better pattern:
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/`}</code>
      </pre>

      <h3>Phone Numbers</h3>

      <pre>
        <code>{`// US Format: (123) 456-7890 or 123-456-7890
/^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/`}</code>
      </pre>

      <h3>URLs</h3>

      <pre>
        <code>{`/^(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&/=]*)$/`}</code>
      </pre>

      <h3>IPv4 Address</h3>

      <pre>
        <code>{`/^([0-9]{1,3}\\.){3}[0-9]{1,3}$/
More strict (0-255):
/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/`}</code>
      </pre>

      <h3>Password Strength</h3>

      <pre>
        <code>{`// At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/`}</code>
      </pre>

      <h3>Hexadecimal Color</h3>

      <pre>
        <code>{`// #FFF or #FFFFFF format
/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/`}</code>
      </pre>

      <h2>Anchors and Boundaries</h2>

      <table>
        <thead>
          <tr>
            <th>Anchor</th>
            <th>Matches</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>^</td>
            <td>Start of string</td>
            <td>^hello matches "hello world"</td>
          </tr>
          <tr>
            <td>$</td>
            <td>End of string</td>
            <td>world$ matches "hello world"</td>
          </tr>
          <tr>
            <td>\b</td>
            <td>Word boundary</td>
            <td>\bcat\b matches "cat" in "cats" only matches whole word</td>
          </tr>
          <tr>
            <td>\B</td>
            <td>Non-word boundary</td>
            <td>\Bcat matches "cat" in "cats"</td>
          </tr>
        </tbody>
      </table>

      <h2>Groups and Alternatives</h2>

      <pre>
        <code>{`(abc)           Capturing group
(?:abc)         Non-capturing group
a|b|c           Alternatives (a or b or c)
(cat|dog)       Match "cat" or "dog"
(\\d{3})-\\1     Backreference - \\1 refers to first group`}</code>
      </pre>

      <h2>Flags</h2>

      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>g</td>
            <td>Global - find all matches</td>
            <td>/.../g</td>
          </tr>
          <tr>
            <td>i</td>
            <td>Case insensitive</td>
            <td>/.../i</td>
          </tr>
          <tr>
            <td>m</td>
            <td>Multiline - ^ and $ match line boundaries</td>
            <td>/.../m</td>
          </tr>
          <tr>
            <td>s</td>
            <td>Dot matches newlines</td>
            <td>/.../s</td>
          </tr>
          <tr>
            <td>u</td>
            <td>Unicode mode</td>
            <td>/.../u</td>
          </tr>
        </tbody>
      </table>

      <h2>JavaScript Regex Examples</h2>

      <h3>Test if Pattern Matches</h3>

      <pre>
        <code>{`const regex = /^[a-z]+$/;
console.log(regex.test('hello'));  // true
console.log(regex.test('Hello'));  // false`}</code>
      </pre>

      <h3>Find Matches</h3>

      <pre>
        <code>{`const text = 'The phone is 123-456-7890';
const pattern = /\\d{3}-\\d{3}-\\d{4}/;
const match = text.match(pattern);
console.log(match[0]);  // "123-456-7890"`}</code>
      </pre>

      <h3>Replace Text</h3>

      <pre>
        <code>{`const text = 'hello world hello';
const result = text.replace(/hello/g, 'hi');
console.log(result);  // "hi world hi"`}</code>
      </pre>

      <h3>Extract Data</h3>

      <pre>
        <code>{`const email = 'john.doe@example.com';
const pattern = /([a-z.]+)@([a-z.]+)/i;
const [full, username, domain] = email.match(pattern);
console.log(username);  // "john.doe"
console.log(domain);    // "example.com"`}</code>
      </pre>

      <h2>Best Practices</h2>

      <ul>
        <li>
          <strong>Keep It Simple:</strong> Start with simple patterns and build complexity gradually
        </li>
        <li>
          <strong>Test Thoroughly:</strong> Use our regex tester to verify patterns before using in production
        </li>
        <li>
          <strong>Comment Complex Patterns:</strong> Document complex regex patterns so others can understand them
        </li>
        <li>
          <strong>Use Named Groups:</strong> In modern regex engines, use named groups for clarity: (?&lt;name&gt;pattern)
        </li>
        <li>
          <strong>Avoid Catastrophic Backtracking:</strong> Be careful with nested quantifiers like (a+)+
        </li>
        <li>
          <strong>Consider Readability:</strong> Sometimes a few extra lines of code is clearer than a complex regex
        </li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        Regular expressions are powerful tools for text processing, validation, and data extraction. While they may seem intimidating at first, mastering regex will make you a more efficient developer. Use the patterns provided in this cheatsheet and our regex tester to practice and verify your expressions.
      </p>

      <p>
        Remember: when in doubt, test your regex! Our online regex tester makes it easy to validate patterns against test strings before using them in your code.
      </p>

      {/* Key Takeaways */}
      <section className="bg-surface rounded-lg p-6 my-8 border border-border">
        <h3 className="text-xl font-bold text-accent mb-4">Key Takeaways</h3>
        <ul className="space-y-2 text-text">
          <li>✓ Start with character classes [abc] and quantifiers +, *, ?, {n,m}</li>
          <li>✓ Use anchors ^ and $ to match beginning and end of strings</li>
          <li>✓ Groups () capture substrings; alternation | provides OR logic</li>
          <li>✓ Flags (g, i, m, s) modify pattern behavior globally, case-insensitive, multiline, or dotall</li>
          <li>✓ Test thoroughly before production use — edge cases matter in regex</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="my-8">
        <h3 className="text-xl font-bold text-accent mb-4">Frequently Asked Questions</h3>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Which regex syntax should I learn?</summary>
          <p className="text-muted mt-2">JavaScript/PCRE regex is most widely used. Most languages support similar syntax with minor differences. Learn PCRE basics and you'll understand 90% of regex everywhere.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Why is my regex so slow?</summary>
          <p className="text-muted mt-2">Catastrophic backtracking occurs with nested quantifiers like (a+)+. Avoid patterns like .*.*. or (.+)+. Use atomic grouping (?>...) or possessive quantifiers where supported.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Should I use regex for complex validation?</summary>
          <p className="text-muted mt-2">No. For complex patterns (emails, URLs), use dedicated libraries or validation functions. Regex gets unwieldy fast. Keep patterns simple.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Can regex match nested structures?</summary>
          <p className="text-muted mt-2">No. Regex is not designed for nested patterns like balanced parentheses. Use parsing libraries instead.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">What's lookahead vs lookbehind?</summary>
          <p className="text-muted mt-2">Lookahead (?=...) matches only if followed by pattern; lookbehind (?<=...) matches only if preceded by pattern. Both are zero-width assertions.</p>
        </details>
      </section>

      {/* CTA Box */}
      <div className="bg-accent/10 border border-accent rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold text-accent mb-2">Try it on DevBench</h3>
        <p className="text-text mb-4">Test your regular expressions instantly. Supports JavaScript regex syntax with real-time match highlighting. 100% client-side.</p>
        <a href="/regex-tester" className="inline-block px-4 py-2 bg-accent text-dark-bg font-semibold rounded hover:bg-green-400 transition-colors">
          Open Regex Tester →
        </a>
      </div>

      <p className="text-xs text-muted italic mt-8">Last updated: {new Date().toLocaleDateString()}</p>
    </>
  );
}
