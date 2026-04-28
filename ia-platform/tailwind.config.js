/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A1628', light: '#1B3A5C' },
        'blue-mid': '#2A5F8F',
        gold: { DEFAULT: '#C5973B', light: '#E8C36A', dark: '#8B6914' },
        teal: { DEFAULT: '#0E7C6B', light: '#14A890' },
        cream: '#FBF7F0',
        warm: '#F5F0E8',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
