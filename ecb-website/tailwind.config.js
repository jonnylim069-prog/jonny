/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecb: {
          blue: "#003DA5",
          darkblue: "#002060",
          gold: "#D4AF37",
          lightgray: "#F5F5F5",
          darkgray: "#333333"
        }
      },
      fontFamily: {
        sans: ["'Segoe UI'", "Tahoma", "Geneva", "Verdana", "sans-serif"]
      }
    }
  },
  plugins: []
}
