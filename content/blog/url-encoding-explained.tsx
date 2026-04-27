export const metadata = {
  title: 'URL Encoding Explained: Percent-Encoding for Web URLs',
  slug: 'url-encoding-explained',
  date: 'March 20, 2025',
  category: 'Tutorial',
  readTime: 6,
};

export default function BlogPost() {
  return (
    <>
      <p>
        URL encoding is a fundamental web technology that allows special characters to be safely transmitted in URLs. Yet many developers don't fully understand why it's necessary or how to use it correctly. This guide demystifies URL encoding and shows you how to handle it properly in your applications.
      </p>

      <h2>What is URL Encoding?</h2>

      <p>
        URL encoding (also called percent-encoding or percent encoding) is a mechanism for encoding information in a URL in a safe format. It converts characters into a format that can be transmitted over the internet.
      </p>

      <p>
        The format is simple: a percent sign (%) followed by two hexadecimal digits representing the character's ASCII code.
      </p>

      <h3>Examples:</h3>

      <pre>
        <code>{`Space (" ") → %20 or +
Dollar ($) → %24
Ampersand (&) → %26
Hash (#) → %23
Percent (%) → %25
Forward slash (/) → %2F
Question mark (?) → %3F`}</code>
      </pre>

      <h2>Why URL Encoding Matters</h2>

      <p>
        URLs follow strict rules about which characters are allowed. Only unreserved characters (A-Z, a-z, 0-9, hyphen, underscore, period, tilde) can appear directly in URLs. All other characters must be encoded.
      </p>

      <h3>Why This Matters:</h3>

      <ul>
        <li>
          <strong>Reserved Characters Have Special Meaning:</strong> Characters like ?, #, &, and = have special meaning in URLs and must be encoded when used as data
        </li>
        <li>
          <strong>Safety:</strong> Encoding ensures data isn't misinterpreted by servers or proxies
        </li>
        <li>
          <strong>International Support:</strong> Allows non-ASCII characters (UTF-8) to be safely transmitted
        </li>
        <li>
          <strong>Consistency:</strong> Standardized encoding prevents parsing errors across different systems
        </li>
      </ul>

      <h2>URL Structure and Encoding</h2>

      <p>
        Different parts of a URL require different encoding rules:
      </p>

      <pre>
        <code>{`https://example.com/path?query=value&key=data#fragment
         \_____  \_________/ \___/ \_______/ \_____/ \________/
         scheme   domain      path  query    sep   fragment

- Scheme: No encoding needed (https://)
- Domain: Limited encoding (international domains use punycode)
- Path: Encode special characters
- Query: Encode special characters, & separates parameters
- Fragment: Encode special characters`}</code>
      </pre>

      <h2>Common URL Encoding Scenarios</h2>

      <h3>Query Parameters</h3>

      <p>
        When passing user input as query parameters, always encode the values:
      </p>

      <pre>
        <code>{`// Without encoding (WRONG)
/search?q=hello world&category=books & magazines

// With encoding (CORRECT)
/search?q=hello%20world&category=books%20%26%20magazines`}</code>
      </pre>

      <h3>Search Terms</h3>

      <pre>
        <code>{`// User searches for: "C++ programming"
// Encoded: C%2B%2B%20programming

// URL: /search?q=C%2B%2B%20programming`}</code>
      </pre>

      <h3>Email Addresses</h3>

      <pre>
        <code>{`// Email: john+tag@example.com
// Encoded: john%2Btag%40example.com

// URL: /mailto/john%2Btag%40example.com`}</code>
      </pre>

      <h2>Reserved vs Unreserved Characters</h2>

      <h3>Reserved Characters (have special meaning):</h3>

      <pre>
        <code>{`: / ? # [ ] @ ! $ & ' ( ) * + , ; =`}</code>
      </pre>

      <h3>Unreserved Characters (safe to use as-is):</h3>

      <pre>
        <code>{`A-Z a-z 0-9 - _ . ~`}</code>
      </pre>

      <h3>Special Characters (must always be encoded):</h3>

      <pre>
        <code>{`Space: %20 or +
Ampersand: %26
Equals: %3D
Hash: %23
Percent: %25`}</code>
      </pre>

      <h2>URL Encoding in Different Contexts</h2>

      <h3>JavaScript</h3>

      <pre>
        <code>{`// Encode entire URL
const encoded = encodeURI('https://example.com/hello world?q=test');
// Result: https://example.com/hello%20world?q=test

// Encode query value only
const param = 'hello world & stuff';
const encoded = encodeURIComponent(param);
// Result: hello%20world%20%26%20stuff

// Decode
const decoded = decodeURIComponent('hello%20world');
// Result: hello world`}</code>
      </pre>

      <h3>Python</h3>

      <pre>
        <code>{`from urllib.parse import quote, urlencode

# Encode string
encoded = quote('hello world & stuff')
# Result: hello%20world%20%26%20stuff

# Encode entire URL
from urllib.parse import urlparse, quote
url = 'https://example.com/hello world'
# Safe encoding with / preserved
encoded = quote(url, safe=':/')`}</code>
      </pre>

      <h3>PHP</h3>

      <pre>
        <code>{`// Encode
$encoded = urlencode('hello world & stuff');
// Result: hello+world+%26+stuff

// Decode
$decoded = urldecode('hello+world+%26+stuff');
// Result: hello world & stuff`}</code>
      </pre>

      <h2>International Characters (UTF-8)</h2>

      <p>
        For non-ASCII characters, URL encoding first converts to UTF-8 bytes, then encodes each byte:
      </p>

      <pre>
        <code>{`Character: 中
UTF-8 bytes: E4 B8 AD
URL encoded: %E4%B8%AD

Complete example:
Search: "café"
UTF-8: 63 61 66 C3 A9
Encoded: caf%C3%A9`}</code>
      </pre>

      <h2>Common URL Encoding Mistakes</h2>

      <h3>Encoding the Entire URL (Wrong)</h3>

      <pre>
        <code>{`// WRONG - encoding slashes and colons
encodeURIComponent('https://example.com/path')
// Result: https%3A%2F%2Fexample.com%2Fpath (broken!)

// CORRECT - encode only the value
'https://example.com/' + encodeURIComponent('my path')`}</code>
      </pre>

      <h3>Double Encoding</h3>

      <pre>
        <code>{`// WRONG - encoding twice
encodeURIComponent(encodeURIComponent('hello'))
// Result: hello%2520 (double-encoded)

// CORRECT - encode once
encodeURIComponent('hello')
// Result: hello%20`}</code>
      </pre>

      <h3>Forgetting to Encode</h3>

      <pre>
        <code>{`// WRONG - spaces in URL
/search?q=hello world

// CORRECT - properly encoded
/search?q=hello%20world`}</code>
      </pre>

      <h2>URL Encoding Best Practices</h2>

      <ul>
        <li>
          <strong>Always Encode User Input:</strong> Never trust user-supplied data in URLs
        </li>
        <li>
          <strong>Use Language Functions:</strong> Use encodeURIComponent() or equivalent, don't manually escape
        </li>
        <li>
          <strong>Encode Only Values:</strong> Don't encode the URL structure itself (scheme, domain, path separators)
        </li>
        <li>
          <strong>Know the Difference:</strong> encodeURI() vs encodeURIComponent() — the latter encodes more characters
        </li>
        <li>
          <strong>Validate Input:</strong> Even with encoding, validate and sanitize user input server-side
        </li>
        <li>
          <strong>Document Your Approach:</strong> If using custom encoding logic, document it clearly for maintainability
        </li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        URL encoding is essential for safe, reliable web applications. By understanding why it's necessary and when to apply it, you'll write more robust code and avoid common security and compatibility issues. Use the built-in encoding functions in your language rather than trying to manually encode, and always encode user input before including it in URLs.
      </p>

      <p>
        Use our URL encoder tool to quickly test encoding without writing code, and bookmark this guide for reference.
      </p>
    </>
  );
}
