/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        card: "#14171B",
        cardBorder: "#1C1F25",
        cardText: "#9FB3C8",
        cardNumber: "#E3F5FF",

      },

      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      fontWeight: {
        semibold: 600,
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

