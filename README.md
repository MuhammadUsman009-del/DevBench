# DevBench - Free Online Developer Tools

DevBench is a **free, open-source, client-side web application** providing essential developer tools. No backend required, no data sent to servers, 100% privacy.

## Features

### 🛠️ Tools Included

1. **JSON Formatter & Validator**
   - Pretty print JSON with 2 or 4 space indentation
   - Real-time validation with error line numbers
   - Minify toggle
   - JSON tree view for structure exploration
   - Syntax highlighting

2. **Base64 Encoder & Decoder**
   - Encode text to Base64
   - Decode Base64 to text
   - URL-safe Base64 support
   - File upload / drag & drop support
   - Copy buttons for all outputs

3. **URL Encoder & Decoder**
   - Encode plain text to URL-encoded strings
   - Decode URL-encoded strings
   - Auto-detect mode
   - Smart URL parameter handling
   - Reference table with common encodings

4. **Regex Tester**
   - Live regex testing with flags (g, i, m, s)
   - Match highlighting in test string
   - Display all matches with groups
   - Replace functionality with capture group support
   - Regex preset library (email, URL, phone, date, IPv4, UUID, hex colors)
   - Quick reference guide

5. **Hash Generator**
   - Generate MD5, SHA-1, SHA-256, SHA-512 hashes
   - Single-click copy for each hash
   - Hash comparison for integrity verification
   - Web Crypto API for SHA algorithms
   - md5 library for MD5 hashing

### ✨ Key Characteristics

- **100% Client-Side**: All processing happens in your browser
- **Zero Data Collection**: Your data never leaves your device
- **Always Free**: No premium tiers, no ads
- **Mobile Responsive**: Works seamlessly on phones, tablets, and desktops
- **Offline Capable**: Runs completely offline after initial load
- **No Installation**: Works directly in your browser
- **Open Source**: Code available for inspection and contribution

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Client-side JavaScript
- **Hashing**: Web Crypto API (SHA) + md5 npm package
- **Deployment**: Vercel (serverless)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
devbench/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── json-formatter/
│   │   └── page.tsx             # JSON tool page
│   ├── base64/
│   │   └── page.tsx             # Base64 tool page
│   ├── url-encoder/
│   │   └── page.tsx             # URL encoding tool page
│   ├── regex-tester/
│   │   └── page.tsx             # Regex testing tool page
│   ├── hash-generator/
│   │   └── page.tsx             # Hash generation tool page
│   ├── sitemap.ts               # XML sitemap for SEO
│   └── robots.ts                # robots.txt configuration
├── components/                  # React components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer with links
│   ├── CopyButton.tsx          # Reusable copy button
│   └── ToolLayout.tsx          # Layout wrapper for tool pages
├── lib/                        # Utility functions
│   ├── jsonUtils.ts            # JSON formatting & validation
│   ├── cryptoUtils.ts          # Hash generation
│   └── regexUtils.ts           # Regex testing utilities
├── public/                     # Static assets
│   └── favicon.svg            # Logo/favicon
├── package.json               # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
└── postcss.config.js         # PostCSS configuration
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel automatically detects Next.js and deploys

```bash
vercel deploy
```

### Environment Variables

None required! DevBench is completely client-side.

## SEO Implementation

- ✅ Meta tags for all pages
- ✅ Open Graph & Twitter Card metadata
- ✅ Canonical URLs
- ✅ JSON-LD structured data (WebApplication, FAQPage)
- ✅ XML Sitemap
- ✅ robots.txt configuration
- ✅ Mobile-first responsive design
- ✅ Fast load times (optimized for Core Web Vitals)
- ✅ Semantic HTML structure
- ✅ Internal linking strategy

## Design

### Color Palette (Terminal/IDE Aesthetic)

```
--bg:           #0d1117  (GitHub dark background)
--surface:      #161b22  (Slightly lighter surface)
--surface2:     #21262d  (Even lighter for contrast)
--accent:       #39d353  (Matrix green)
--accent2:      #58a6ff  (Electric blue)
--text:         #c9d1d9  (Light gray text)
--muted:        #8b949e  (Muted gray)
--border:       #30363d  (Border color)
--error:        #f85149  (Error red)
--success:      #3fb950  (Success green)
```

### Fonts

- **Code**: JetBrains Mono (monospace, from Google Fonts)
- **UI**: IBM Plex Sans (sans-serif, from Google Fonts)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Code splitting by route
- Minified CSS and JavaScript
- SVG favicon (no image files)
- Optimized for Core Web Vitals
- No external dependencies for core functionality
- Web Crypto API for hardware-accelerated hashing

## License

MIT License - Feel free to use, modify, and deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Future Enhancements

- [ ] YAML formatter
- [ ] XML beautifier
- [ ] CSV to JSON converter
- [ ] JWT debugger
- [ ] Color converter
- [ ] Unit converter
- [ ] QR code generator
- [ ] UUID generator
- [ ] Markdown to HTML converter
- [ ] Dark/Light theme toggle (currently dark-only)

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**DevBench** - Making developer tools accessible, fast, and private. 🚀
