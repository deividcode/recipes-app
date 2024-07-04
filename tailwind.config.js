/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nutmeg: '#854632',
        darkraspberry: '#7b284f',        
        rosewhite: '#fff5fa',
        eggshell: '#f3e6d8',
        lightgrey: '#e4ded8',
        wengebrown: '#5f574e',
        darkcharcoal: '#302d2c',
      },
      fontFamily: {
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
        youngserif: ['"Young Serif"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

