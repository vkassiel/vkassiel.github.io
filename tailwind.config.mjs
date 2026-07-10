/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#38bdf8',
          muted: '#0ea5e9',
        },
      },
      fontFamily: {
        sans: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
