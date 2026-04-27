export const metadata = {
  title: 'Hashing vs Encryption: Understanding the Difference',
  slug: 'hashing-vs-encryption',
  date: 'March 5, 2025',
  category: 'Security',
  readTime: 8,
};

export default function BlogPost() {
  return (
    <>
      <p>
        Hashing and encryption are two fundamental cryptographic techniques that are often confused, yet they serve completely different purposes. Understanding the difference is crucial for building secure applications. In this guide, we'll demystify both concepts and show you when to use each one.
      </p>

      <h2>Quick Summary</h2>

      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Hashing</th>
            <th>Encryption</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Direction</strong></td>
            <td>One-way (irreversible)</td>
            <td>Two-way (reversible)</td>
          </tr>
          <tr>
            <td><strong>Purpose</strong></td>
            <td>Data integrity, password storage</td>
            <td>Data confidentiality</td>
          </tr>
          <tr>
            <td><strong>Key</strong></td>
            <td>No key needed</td>
            <td>Requires encryption key</td>
          </tr>
          <tr>
            <td><strong>Output Size</strong></td>
            <td>Fixed regardless of input</td>
            <td>Proportional to input size</td>
          </tr>
          <tr>
            <td><strong>Reversible</strong></td>
            <td>Impossible to reverse</td>
            <td>Reversible with key</td>
          </tr>
        </tbody>
      </table>

      <h2>What is Hashing?</h2>

      <p>
        A hash function is a mathematical algorithm that converts input data of any size into a fixed-size string of bytes, called a hash or digest.
      </p>

      <h3>Key Properties:</h3>

      <ul>
        <li>
          <strong>Deterministic:</strong> The same input always produces the same output
        </li>
        <li>
          <strong>One-way:</strong> You cannot reverse a hash to recover the original input
        </li>
        <li>
          <strong>Fixed Output:</strong> All outputs are the same size (e.g., SHA-256 always produces 64 hex characters)
        </li>
        <li>
          <strong>Avalanche Effect:</strong> Tiny changes in input produce completely different hashes
        </li>
      </ul>

      <h3>Example:</h3>

      <pre>
        <code>{`Input: "Hello, World!"
SHA-256: dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f

Input: "Hello, World!!" (one character different)
SHA-256: 7c38f4eb0a8b8f66fb16c0f5d9e5ef7a9c8e3c07c44ab6b65e03a9c8b7c6f3e2

You CANNOT reverse either hash to recover the original string.`}</code>
      </pre>

      <h3>Hashing Use Cases:</h3>

      <ul>
        <li>
          <strong>Password Storage:</strong> Store hashes instead of passwords (with salt)
        </li>
        <li>
          <strong>Data Integrity:</strong> Verify files haven't been tampered with
        </li>
        <li>
          <strong>Digital Signatures:</strong> Sign documents with a hash + encryption
        </li>
        <li>
          <strong>Checksums:</strong> Detect corruption in transmitted data
        </li>
        <li>
          <strong>Blockchain:</strong> Bitcoin and other cryptocurrencies rely on hashing
        </li>
      </ul>

      <h2>What is Encryption?</h2>

      <p>
        Encryption is a cryptographic process that converts readable data (plaintext) into unreadable data (ciphertext) using a key. The data can be recovered by decrypting with the correct key.
      </p>

      <h3>Key Properties:</h3>

      <ul>
        <li>
          <strong>Reversible:</strong> Encrypted data can be decrypted back to original with the correct key
        </li>
        <li>
          <strong>Key-Based:</strong> Requires a encryption/decryption key
        </li>
        <li>
          <strong>Variable Output:</strong> Output size varies with input (or uses padding)
        </li>
        <li>
          <strong>Confidentiality:</strong> Purpose is to keep data secret
        </li>
      </ul>

      <h3>Example:</h3>

      <pre>
        <code>{`Plaintext: "This is a secret message"
Key: "MySecretKey123"
Algorithm: AES-256

Ciphertext: "U2FsdGVkX1+9... (encrypted, unreadable)"

With the correct key, you can decrypt back to:
"This is a secret message"`}</code>
      </pre>

      <h3>Encryption Use Cases:</h3>

      <ul>
        <li>
          <strong>Confidential Communication:</strong> HTTPS, email encryption, messaging apps
        </li>
        <li>
          <strong>Data at Rest:</strong> Encrypt databases and files on disk
        </li>
        <li>
          <strong>User Privacy:</strong> Protect sensitive user information
        </li>
        <li>
          <strong>Compliance:</strong> GDPR, HIPAA, PCI-DSS compliance
        </li>
      </ul>

      <h2>Why NOT to Use Hashing for Passwords (The Wrong Way)</h2>

      <pre>
        <code>{`// WRONG: Storing password directly
database.users.password = "MyPassword123"  // Never do this!

// WRONG: Using encryption
encrypted_password = encrypt("MyPassword123", key)
database.users.password = encrypted_password
// Problem: If key is compromised, all passwords are revealed

// CORRECT: Using hashing with salt
salt = generate_random_salt()
hashed = hash("MyPassword123" + salt)
database.users.password = hashed
database.users.salt = salt

// During login, hash the input and compare
input_hashed = hash(input_password + stored_salt)
if input_hashed == stored_password:
    login_successful()`}</code>
      </pre>

      <h2>Why NOT to Use Encryption for Passwords</h2>

      <p>
        <strong>Encryption should NOT be used for password storage because:</strong>
      </p>

      <ul>
        <li>
          <strong>Key Management Problem:</strong> If your encryption key is compromised, all passwords are exposed
        </li>
        <li>
          <strong>Reversibility Risk:</strong> Someone with the key can decrypt all passwords
        </li>
        <li>
          <strong>Not Purpose-Built:</strong> Password hashing algorithms (bcrypt, Argon2) are designed with key-stretching to slow down attacks
        </li>
        <li>
          <strong>Compliance Issues:</strong> Most security standards require irreversible password storage
        </li>
      </ul>

      <h2>Types of Encryption</h2>

      <h3>Symmetric Encryption</h3>

      <p>
        Same key encrypts and decrypts. Fast, but key must be shared securely.
      </p>

      <pre>
        <code>{`Example: AES-256
- Encrypt: ciphertext = AES_encrypt(plaintext, key)
- Decrypt: plaintext = AES_decrypt(ciphertext, key)

Use Cases: Database encryption, file encryption, data at rest`}</code>
      </pre>

      <h3>Asymmetric Encryption</h3>

      <p>
        Different keys for encryption (public) and decryption (private). Slower, but enables secure key exchange.
      </p>

      <pre>
        <code>{`Example: RSA
- Encrypt: ciphertext = RSA_encrypt(plaintext, public_key)
- Decrypt: plaintext = RSA_decrypt(ciphertext, private_key)

Use Cases: HTTPS, email encryption, digital signatures`}</code>
      </pre>

      <h2>Hash Verification vs Decryption</h2>

      <h3>Hash Verification:</h3>

      <pre>
        <code>{`// Verify a hash (no key needed)
stored_hash = database.get_user_password()
input_hash = hash(user_input)

if input_hash == stored_hash:
    login_successful()
    
// Note: We never decrypt, we just compare hashes`}</code>
      </pre>

      <h3>Decryption:</h3>

      <pre>
        <code>{`// Decrypt (requires key)
encrypted_message = database.get_message()
key = get_encryption_key()

plaintext = decrypt(encrypted_message, key)
// Now we have the original message`}</code>
      </pre>

      <h2>Practical Decision Guide</h2>

      <p>
        <strong>Use Hashing When:</strong>
      </p>

      <ul>
        <li>Storing passwords (always use hashing + salt, or better, Argon2)</li>
        <li>Verifying data integrity (checksums)</li>
        <li>Creating digital signatures</li>
        <li>You need irreversible one-way transformation</li>
        <li>You only need to verify, not retrieve, the original data</li>
      </ul>

      <p>
        <strong>Use Encryption When:</strong>
      </p>

      <ul>
        <li>You need to retrieve the original data later</li>
        <li>Transmitting sensitive data over untrusted networks (HTTPS)</li>
        <li>Storing sensitive data that must be retrieved (encrypted databases)</li>
        <li>User privacy is paramount</li>
        <li>Compliance requires data to be encrypted at rest and in transit</li>
      </ul>

      <h2>Common Mistakes</h2>

      <h3>Mistake 1: Using Hashing for Retrieval</h3>

      <pre>
        <code>{`// WRONG: Trying to hash something you need to retrieve later
stored_hash = hash(sensitive_data)
// You can never get sensitive_data back!

// CORRECT: Use encryption
encrypted_data = encrypt(sensitive_data, key)
// You can decrypt to retrieve later`}</code>
      </pre>

      <h3>Mistake 2: Using Encryption for Passwords</h3>

      <pre>
        <code>{`// WRONG: Encrypting passwords
encrypted_password = encrypt(user_password, key)

// CORRECT: Hashing with salt
hashed_password = bcrypt.hash(user_password)`}</code>
      </pre>

      <h3>Mistake 3: Forgetting Salt in Hashing</h3>

      <pre>
        <code>{`// WRONG: Plain hash (vulnerable to rainbow tables)
password_hash = sha256(password)

// CORRECT: Hash with random salt
salt = generate_random_salt()
password_hash = sha256(password + salt)`}</code>
      </pre>

      <h2>Best Practices</h2>

      <ul>
        <li>
          <strong>Passwords:</strong> Use bcrypt, scrypt, or Argon2 — never plain hashing or encryption
        </li>
        <li>
          <strong>Data Integrity:</strong> Use SHA-256 or stronger hash functions
        </li>
        <li>
          <strong>Sensitive Data:</strong> Encrypt with AES-256 or RSA
        </li>
        <li>
          <strong>TLS/HTTPS:</strong> Always use for data in transit
        </li>
        <li>
          <strong>Key Management:</strong> Keep encryption keys secure and rotated regularly
        </li>
        <li>
          <strong>Never Implement From Scratch:</strong> Use established, audited libraries
        </li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        Understanding the difference between hashing and encryption is essential for building secure applications. Hashing is one-way and perfect for password storage and integrity verification. Encryption is two-way and necessary for protecting data confidentiality. Use each tool for its intended purpose, and always rely on well-tested cryptographic libraries rather than implementing your own.
      </p>

      <p>
        When in doubt: encrypt sensitive data in transit and at rest, and hash passwords with a purpose-built algorithm.
      </p>

      {/* Key Takeaways */}
      <section className="bg-surface rounded-lg p-6 my-8 border border-border">
        <h3 className="text-xl font-bold text-accent mb-4">Key Takeaways</h3>
        <ul className="space-y-2 text-text">
          <li>✓ Hashing is one-way and irreversible; encryption is two-way and reversible</li>
          <li>✓ Use hashing for passwords (with bcrypt, Argon2) and integrity checks</li>
          <li>✓ Use encryption for protecting sensitive data in transit and at rest</li>
          <li>✓ Never use plain MD5 or SHA-256 for passwords; use dedicated password hashing</li>
          <li>✓ Encoding is neither hashing nor encryption; it's just format transformation</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="my-8">
        <h3 className="text-xl font-bold text-accent mb-4">Frequently Asked Questions</h3>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Can I decrypt a hash?</summary>
          <p className="text-muted mt-2">No. Hashing is one-way by design. You cannot reverse it. If you need to retrieve data, use encryption instead.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Why use hashing instead of encryption for passwords?</summary>
          <p className="text-muted mt-2">If your database is breached and passwords are encrypted, the attacker just needs your encryption key. With hashing, the passwords can't be decrypted, making them worthless.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">What's a salt?</summary>
          <p className="text-muted mt-2">A random value added to data before hashing. It prevents rainbow table attacks and ensures identical passwords produce different hashes. Bcrypt and Argon2 handle salts automatically.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Is base64 encoding secure?</summary>
          <p className="text-muted mt-2">No. Base64 is just encoding, not encryption. Anyone can decode it easily. Only use it for format transformation, never for security.</p>
        </details>
        <details className="mb-4 border border-border rounded p-4 cursor-pointer hover:bg-surface transition-colors">
          <summary className="font-semibold text-white">Should I encrypt before hashing?</summary>
          <p className="text-muted mt-2">Generally no. For passwords, hash directly. Encryption before hashing adds complexity without security benefits. Keep it simple.</p>
        </details>
      </section>

      {/* CTA Box */}
      <div className="bg-accent/10 border border-accent rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold text-accent mb-2">Try it on DevBench</h3>
        <p className="text-text mb-4">Generate hashes (MD5, SHA-256) and compare different algorithms. Understand the differences between hashing and encryption firsthand.</p>
        <a href="/hash-generator" className="inline-block px-4 py-2 bg-accent text-dark-bg font-semibold rounded hover:bg-green-400 transition-colors">
          Open Hash Generator →
        </a>
      </div>

      <p className="text-xs text-muted italic mt-8">Last updated: {new Date().toLocaleDateString()}</p>
    </>
  );
}
