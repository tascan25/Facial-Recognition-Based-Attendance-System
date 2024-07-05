/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        font_mons:['"Montserra"','sans-serif'],
        font_pops:['"Poppins"','sans-serif']
      }
    },
  },
  plugins: [],
}

