import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d1117',
        'dark-surface': '#161b22',
        'dark-surface2': '#21262d',
        'accent': '#39d353',
        'accent2': '#58a6ff',
        'text': '#c9d1d9',
        'muted': '#8b949e',
        'border': '#30363d',
        'error': '#f85149',
        'success': '#3fb950',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
