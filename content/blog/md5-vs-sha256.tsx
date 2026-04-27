export const metadata = {
  title: 'MD5 vs SHA-256: Which Hash Should You Use?',
  slug: 'md5-vs-sha256',
  date: 'March 28, 2025',
  category: 'Security',
  readTime: 7,
};

export default function BlogPost() {
  return (
    <>
      <p>
        Cryptographic hash functions are essential tools for security, data integrity verification, and digital signatures. MD5 and SHA-256 are two of the most commonly encountered hashing algorithms. But which one should you use? In this guide, we'll compare them and provide clear recommendations for different scenarios.
      </p>

      <h2>What Are Hash Functions?</h2>

      <p>
        A cryptographic hash function is an algorithm that takes any input (data of any size) and produces a fixed-size string of bytes. The output, called a hash or digest, is unique to each unique input:
      </p>

      <ul>
        <li>Same input always produces the same hash</li>
        <li>Different inputs (almost always) produce different hashes</li>
        <li>It's computationally infeasible to reverse the hash to get the original input</li>
        <li>Even tiny changes in input produce completely different hashes</li>
      </ul>

      <h2>MD5: The Broken Hash</h2>

      <h3>Overview</h3>

      <ul>
        <li><strong>Output Size:</strong> 128 bits (32 hexadecimal characters)</li>
        <li><strong>Algorithm Type:</strong> Merkle-Damgård construction</li>
        <li><strong>Designed:</strong> 1992 by Ronald Rivest</li>
        <li><strong>Processing Speed:</strong> Fast (can compute millions of hashes per second)</li>
      </ul>

      <h3>MD5 Example</h3>

      <pre>
        <code>{`Input: "Hello, World!"
MD5: 65a8e27d8d55e529787d3c3b86e98ee9

Input: "Hello, World!!"
MD5: 2c74fd17edafd80e8447b0d46741ee243 (completely different)`}</code>
      </pre>

      <h3>Why MD5 is Broken</h3>

      <ul>
        <li>
          <strong>Collision Vulnerabilities:</strong> Researchers can create two different inputs that produce the same MD5 hash in seconds
        </li>
        <li>
          <strong>Practical Attacks:</strong> Attackers can forge digital signatures and manipulate documents without detection
        </li>
        <li>
          <strong>No Longer Cryptographically Sound:</strong> MD5 is officially considered cryptographically broken since 2004
        </li>
      </ul>

      <h3>Current Use Cases</h3>

      <p>
        MD5 should only be used for non-cryptographic purposes where collision vulnerability doesn't matter:
      </p>

      <ul>
        <li>Checksums for file integrity checks (not critical security)</li>
        <li>Cache keys and database lookups</li>
        <li>Non-security-related hash tables</li>
      </ul>

      <p>
        <strong>Never use MD5 for:</strong> Password hashing, digital signatures, certificate generation, or any security-sensitive application.
      </p>

      <h2>SHA-256: The Modern Standard</h2>

      <h3>Overview</h3>

      <ul>
        <li><strong>Output Size:</strong> 256 bits (64 hexadecimal characters)</li>
        <li><strong>Algorithm Type:</strong> SHA-2 family</li>
        <li><strong>Designed:</strong> 2001 by NSA (later published by NIST)</li>
        <li><strong>Processing Speed:</strong> Fast (slightly slower than MD5, but still very efficient)</li>
      </ul>

      <h3>SHA-256 Example</h3>

      <pre>
        <code>{`Input: "Hello, World!"
SHA-256: dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f

Input: "Hello, World!!"
SHA-256: 7c38f4eb0a8b8f66fb16c0f5d9e5ef7a9c8e3c07c44ab6b65e03a9c8b7c6f3e2 (completely different)`}</code>
      </pre>

      <h3>Security Advantages</h3>

      <ul>
        <li>
          <strong>No Known Attacks:</strong> No practical collision attacks exist against SHA-256
        </li>
        <li>
          <strong>Future-Proof:</strong> SHA-256 is considered secure for the foreseeable future
        </li>
        <li>
          <strong>Larger Output:</strong> 256 bits vs MD5's 128 bits provides exponentially more security
        </li>
        <li>
          <strong>Industry Standard:</strong> SHA-256 is recommended by NIST, NSA, and used in blockchain (Bitcoin uses SHA-256)
        </li>
      </ul>

      <h2>Direct Comparison</h2>

      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>MD5</th>
            <th>SHA-256</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Security Status</strong></td>
            <td>Cryptographically broken</td>
            <td>Secure</td>
          </tr>
          <tr>
            <td><strong>Output Size</strong></td>
            <td>128 bits</td>
            <td>256 bits</td>
          </tr>
          <tr>
            <td><strong>Collision Risk</strong></td>
            <td>High (attacks exist)</td>
            <td>Negligible</td>
          </tr>
          <tr>
            <td><strong>Speed</strong></td>
            <td>Faster</td>
            <td>Slightly slower, still very fast</td>
          </tr>
          <tr>
            <td><strong>Hex Characters</strong></td>
            <td>32</td>
            <td>64</td>
          </tr>
          <tr>
            <td><strong>Recommended Use</strong></td>
            <td>Non-security purposes only</td>
            <td>All security applications</td>
          </tr>
          <tr>
            <td><strong>Year Designed</strong></td>
            <td>1992</td>
            <td>2001</td>
          </tr>
        </tbody>
      </table>

      <h2>Recommendations</h2>

      <h3>Use SHA-256 When:</h3>

      <ul>
        <li>You need cryptographic security (password hashing, signatures, certificates)</li>
        <li>You're handling sensitive data</li>
        <li>You want future-proof security</li>
        <li>Industry compliance is required (PCI-DSS, HIPAA, etc.)</li>
        <li>You're building blockchain or cryptocurrency applications</li>
        <li>You're doing anything related to security (when in doubt, use SHA-256)</li>
      </ul>

      <h3>MD5 is Only Acceptable For:</h3>

      <ul>
        <li>Non-security checksums (verifying file integrity, not preventing tampering)</li>
        <li>Cache keys</li>
        <li>Database lookups</li>
        <li>Compatibility with legacy systems that you're planning to replace</li>
      </ul>

      <h2>Better Alternatives</h2>

      <p>
        For password storage specifically, don't use MD5 or SHA-256 directly. Use purpose-built password hashing algorithms:
      </p>

      <ul>
        <li>
          <strong>bcrypt:</strong> Slow, intentionally resource-intensive to prevent brute-force attacks
        </li>
        <li>
          <strong>scrypt:</strong> Even more resistant to hardware brute-force attacks
        </li>
        <li>
          <strong>Argon2:</strong> Modern, winner of Password Hashing Competition, highly recommended for new projects
        </li>
      </ul>

      <p>
        For general-purpose hashing beyond SHA-256, consider:
      </p>

      <ul>
        <li><strong>SHA-3:</strong> Latest standard, even more secure than SHA-256</li>
        <li><strong>BLAKE2:</strong> Faster than MD5, secure as SHA-256</li>
      </ul>

      <h2>Practical Examples</h2>

      <h3>JavaScript</h3>

      <pre>
        <code>{`// For SHA-256, use Web Crypto API
async function sha256(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Usage
sha256('Hello, World!').then(hash => console.log(hash));
// Output: dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f`}</code>
      </pre>

      <h3>Python</h3>

      <pre>
        <code>{`import hashlib

# SHA-256
text = 'Hello, World!'
sha256_hash = hashlib.sha256(text.encode()).hexdigest()
print(sha256_hash)
# Output: dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f

# Don't use for passwords; use passlib instead
from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"])
hashed = pwd_context.hash("mypassword")`}</code>
      </pre>

      <h2>Conclusion</h2>

      <p>
        <strong>Bottom line:</strong> If you're unsure which to use, choose SHA-256. It's secure, widely supported, and the modern standard for cryptographic hashing. MD5's only legitimate uses are for non-security purposes where collisions don't matter. For new projects, always prioritize SHA-256 or more modern alternatives like SHA-3 or Argon2 for password hashing.
      </p>

      <p>
        Never use MD5 for security-sensitive operations. The cost of upgrading to SHA-256 is minimal, but the security benefits are enormous.
      </p>

      {/* Key Takeaways */}
      <section className="bg-surface rounded-lg p-6 my-8 border border-border">
        <h3 className="text-xl font-bold text-accent mb-4">Key Takeaways</h3>
        <ul className="space-y-2 text-text">
          <li>✓ MD5 produces 128-bit (16-byte) hashes; SHA-256 produces 256-bit (32-byte) hashes</li>
          <li>✓ MD5 is cryptographically broken; SHA-256 is secure and recommended</li>
          <li>✓ Never use MD5 for passwords, digital signatures, or security-critical applications</li>
          <li>✓ For password hashing, use bcrypt, Argon2, or scrypt instead of either algorithm</li>
          <li>✓ MD5's only legitimate uses are checksums where collision attacks don't matter</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="my-8">
        <h3 className="text-xl font-bold text-accent mb-4">Frequently Asked Questions</h3>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Can I still use MD5?</summary>
          <p className="text-muted mt-2">Only for non-security purposes like checksums. Never for passwords, digital signatures, or any security-sensitive application. Use SHA-256 instead.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">How long does it take to crack SHA-256?</summary>
          <p className="text-muted mt-2">With current technology, brute-forcing SHA-256 is computationally infeasible. It would take billions of years with all computing power on Earth.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Should I use SHA-512 instead?</summary>
          <p className="text-muted mt-2">SHA-512 is slightly slower and provides overkill for most applications. SHA-256 is the practical standard. Use SHA-512 only if specific requirements demand it.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Is SHA-256 resistant to rainbow tables?</summary>
          <p className="text-muted mt-2">SHA-256 alone is not enough for passwords. Always use a cryptographic salt (built into bcrypt and Argon2) to defeat rainbow tables.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">What's the difference between SHA-256 and SHA-3?</summary>
          <p className="text-muted mt-2">SHA-3 is newer and uses a different algorithm structure. Both are secure. SHA-256 remains more widely used and is perfectly adequate for most use cases.</p>
        </details>
      </section>

      {/* CTA Box */}
      <div className="bg-accent/10 border border-accent rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold text-accent mb-2">Try it on DevBench</h3>
        <p className="text-text mb-4">Generate MD5, SHA-256, and other hashes instantly. Compare algorithms side-by-side. 100% client-side processing.</p>
        <a href="/hash-generator" className="inline-block px-4 py-2 bg-accent text-dark-bg font-semibold rounded hover:bg-green-400 transition-colors">
          Open Hash Generator →
        </a>
      </div>

      <p className="text-xs text-muted italic mt-8">Last updated: {new Date().toLocaleDateString()}</p>
    </>
  );
}
