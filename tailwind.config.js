/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {  
  },
  daisyui: {
    themes: ["light", "bumblebee", "cupcake","cyberpunk","valentine","halloween","synthwave","dark","luxury","forest"],
  },

  plugins: [require("daisyui")],
} 