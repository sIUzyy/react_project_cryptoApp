/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'footer': ['Roboto', 'sans-serif'],
        'title': ['Jost', 'sans-serif'],
        'h1': ['Josefin Sans', 'sans-serif'],

      }
    },
  },
  plugins: [],
}