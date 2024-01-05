
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./index02.html",
    "./blackListwordtest.html",
    "./userVerification.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
}

