# DevBench — Quick Start Guide

## 🚀 Running DevBench Locally

### First Time Setup
```bash
cd e:\Project
npm install          # Already done, ~394 packages installed
npm run dev          # Start development server
```

### Access the Application
- **Homepage**: http://localhost:3000
- **JSON Formatter**: http://localhost:3000/json-formatter
- **Base64 Encoder**: http://localhost:3000/base64
- **URL Encoder**: http://localhost:3000/url-encoder
- **Regex Tester**: http://localhost:3000/regex-tester
- **Hash Generator**: http://localhost:3000/hash-generator

---

## 📋 Tool Quick Reference

### JSON Formatter
**Best for:** Validating, formatting, and minifying JSON

**Features:**
- Click "Sample" to load example JSON
- Choose 2 or 4 space indentation
- Toggle "Minify" to compress
- Click "Format" to pretty-print
- Check "Tree View" to explore structure
- Copy formatted result with "Copy" button

**Example Use Case:**
```json
{"name":"John","age":30,"tools":["JSON","Base64","Regex"]}
```
→ Format → Pretty-printed with tree view

---

### Base64 Encoder
**Best for:** Encoding/decoding data and embedding files

**Features:**
- Paste text and click "Encode" to convert to Base64
- Paste Base64 and click "Decode" to get text back
- Drag & drop files to encode
- Toggle "URL-Safe" for safe URL/data usage
- Sample text available

**Example Use Case:**
```
Input: "DevBench"
Encode → Output: "RGV2QmVuY2g="
Decode → Output: "DevBench"
```

---

### URL Encoder
**Best for:** Encoding special characters in URLs and parameters

**Features:**
- Enter text or URL
- Click "Encode" to encode special characters
- Click "Decode" to decode URL-encoded strings
- "Auto" mode detects the type
- Reference table shows common encodings

**Example Use Case:**
```
Input: "hello world!"
Encode → Output: "hello%20world%21"
```

---

### Regex Tester
**Best for:** Testing and debugging regular expressions

**Features:**
- Enter regex pattern (without forward slashes)
- Toggle flags: g (global), i (case-insensitive), m (multiline), s (dotall)
- Enter test string
- Click "Test" to find matches
- View all matches with highlighted text
- Toggle "Replace" to test replacements
- 8 presets: email, URL, phone, date, IPv4, UUID, hex colors

**Example Use Case:**
```
Pattern: ^\w+@\w+\.\w+$
Test String: user@example.com
Result: ✓ Match Found
```

---

### Hash Generator
**Best for:** Generating hashes for file verification and passwords

**Features:**
- Paste text to hash
- Click "Generate" to create MD5, SHA-1, SHA-256, SHA-512
- View all 4 hashes at once
- Paste a hash in "Comparison" section to verify
- See ✓ Match or ✗ No Match
- Click "Copy" on each hash to copy individually

**Example Use Case:**
```
Input: "DevBench 2024"
MD5: 7c3d2e1a5f8b9c4d...
SHA-256: a1b2c3d4e5f6g7h8...
(Copy any hash for verification)
```

---

## ⌨️ Keyboard Shortcuts (Ready for Implementation)

- `Ctrl+Enter` — Execute current tool (Format, Encode, Decode, Test, Generate)
- `Ctrl+C` — Copy output (when focused on copy button)

---

## 🎨 Design Features

- **Dark Terminal Aesthetic** — Professional IDE-like interface
- **Green Accents** — Matrix-style (#39d353) for main actions
- **Blue Highlights** — Secondary actions (#58a6ff)
- **Responsive Layout** — Works on desktop, tablet, mobile
- **Instant Feedback** — All processing happens in real-time
- **Copy Success Message** — "✓ Copied!" confirmation

---

## 📱 Mobile Usage

DevBench works seamlessly on mobile:

1. **Landscape mode** recommended for code/regex viewing
2. **Sticky copy buttons** always visible
3. **Touch-friendly** (44px+ minimum tap targets)
4. **No horizontal scroll issues** — text naturally wraps
5. **Offline capable** — bookmark for offline use

---

## 🔒 Privacy & Security

✅ **Your data is YOUR data:**
- Nothing is sent to servers
- Nothing is stored in databases
- All processing happens in your browser
- Works completely offline
- No analytics or tracking (unless you add Google Analytics)

---

## 📊 Supported Formats

### JSON
- Objects: `{}`
- Arrays: `[]`
- Strings, numbers, booleans, null
- Nested structures

### Base64
- Text (UTF-8)
- Files (PNG, JPG, PDF, etc.)
- URL-safe variants

### URLs
- Full URLs: `https://example.com/path?key=value`
- Query parameters
- Special characters: `!@#$%^&*()`

### Regex
- Pattern: `/pattern/flags`
- Flags: `g` (global), `i` (case-insensitive), `m` (multiline), `s` (dotall)
- Capture groups: `()` → accessible as `$1`, `$2`

### Hashes
- Text input
- File input
- Output formats: hex (default)

---

## 🐛 Troubleshooting

### "Invalid JSON"
- Check for missing commas between items
- Ensure all quotes are matching
- Look at the line number provided in error

### Copy Button Not Working
- Check browser permissions for clipboard access
- Copy button shows "✓ Copied!" when successful

### Regex Not Matching
- Escape special characters with `\`
- Check flag settings (especially `g` for global)
- Test pattern on [regex101.com](https://regex101.com)

### Hash Verification Failed
- Ensure you're comparing the same algorithm
- Check for leading/trailing whitespace
- Verify the original input is identical

---

## 💾 Saving Work

Since everything is client-side:
1. Copy results to clipboard immediately
2. Paste into your editor/IDE
3. Bookmark DevBench for future use
4. Works completely offline

---

## 📚 Examples & Tips

### JSON Example
```json
{
  "tools": ["JSON", "Base64", "URL", "Regex", "Hash"],
  "count": 5,
  "free": true
}
```

### Base64 Example
```
Text: "DevBench"
Base64: "RGV2QmVuY2g="
```

### URL Example
```
Plain: hello world & more
Encoded: hello%20world%20%26%20more
```

### Regex Example
```
Email Pattern: ^[\w\.-]+@[\w\.-]+\.\w+$
Matches: user@example.com, john.doe@company.co.uk
```

### Hash Example
```
Input: "mypassword123"
MD5: 482c811da5d5b4bc6d497ffa98491e38
SHA-256: a665a45920...
```

---

## 🚀 Deploying Your Own Copy

Want to host DevBench yourself?

```bash
# 1. Clone repository
git clone https://github.com/yourusername/devbench.git

# 2. Deploy to Vercel
vercel deploy

# 3. Or use Docker
docker build -t devbench .
docker run -p 3000:3000 devbench
```

**No backend required!** Everything runs in the browser.

---

## 📞 Support

- **Issue found?** Check browser console (F12) for errors
- **Feature request?** Edit source code — it's yours!
- **Performance issue?** Check internet connection (needed only on first load)

---

## 📄 More Documentation

- See [README.md](README.md) for full feature list
- See [DEPLOYMENT.md](DEPLOYMENT.md) for production setup
- See [PROJECT_COMPLETION.md](PROJECT_COMPLETION.md) for technical details

---

**Happy tool-using! 🎉**

DevBench — Free Developer Tools Forever
