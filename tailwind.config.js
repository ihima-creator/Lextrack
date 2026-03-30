/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#F0F2F5',
          100: '#E2E6EC',
          200: '#C5CDD9',
          300: '#96A3B5',
          400: '#6B7B90',
          500: '#4A5568',
          600: '#374151',
          700: '#1F2937',
          800: '#111827',
          900: '#0A0E1A',
          950: '#060810',
        },
        gold: {
          300: '#E8C87A',
          400: '#C9A84C',
          600: '#9A7A1E',
          700: '#7A5E14',
        },
        emerald: { DEFAULT: '#2ECC9A' },
        amber: { DEFAULT: '#F59E0B' },
        rose: { DEFAULT: '#EF4444' },
        sky: { DEFAULT: '#3B82F6' },
      },
    },
  },
  plugins: [],
}
