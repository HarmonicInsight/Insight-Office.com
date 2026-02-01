/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF9EF',
          100: '#F9F0D9',
          200: '#F0E6C8',
          300: '#E5D5A0',
          400: '#D4BC6A',
          500: '#B8942F',
          600: '#8C711E',
          700: '#6B5518',
          800: '#4A3B10',
          900: '#2D2408',
        },
        accent: {
          50: '#DBEAFE',
          100: '#BFDBFE',
          200: '#93C5FD',
          300: '#60A5FA',
          400: '#3B82F6',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F3F0EB',
          200: '#EEEBE5',
          300: '#E7E2DA',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
