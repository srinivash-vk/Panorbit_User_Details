/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['AdobeCleanRegular', 'sans-serif'],
    },
    extend: {
      flex: {
        'flex-2': '2 2 1%'
      },
      boxShadow: {
        'cover': '0px 0px 20px -10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}