/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#ff973f",
      secondary: "#fff4eb",
      primary_dark: "#172a39",
      ...colors
    },
    extend: {},
  },
  plugins: [],
}

