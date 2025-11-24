/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: '#90EE90',
        lightred: '#FFB6C1',
        lightblue: '#ADD8E6',
        lightyellow: '#FFFFE0',
        lightpurple: '#E6E6FA',
        lightorange: '#FFDAB9',
      },
    },
  },
  plugins: [],
}
