/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem',
      '7xl': '6rem',
      '8xl': '8rem',
      '9xl': '11rem',
    },
    extend: {
      fontFamily: {
        display: ["DisplayFont", "sans-serif"], bold: ["DisplayBold"], brød:["BrødRegulær"], brødbold:["BrødBold"], brøditalic: ["BrødItalic"],
      },
    },
  },
  plugins: [],
}