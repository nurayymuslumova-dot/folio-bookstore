/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0b0b0b',
        folio: '#0f0f0f',
        accent: '#44d07b',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(68,208,123,0.14), transparent 30%)',
      },
    },
  },
  plugins: [],
};
