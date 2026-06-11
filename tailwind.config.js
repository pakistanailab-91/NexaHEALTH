/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B1420',
        ink2: '#1E2D45',
        muted: '#7A8FA6',
        border: '#D8E3EE',
        surface: '#F5F8FC',
        navy: '#0B1F3A',
        navy2: '#122846',
        teal: '#0676A8',
        teal2: '#0A94D4',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
