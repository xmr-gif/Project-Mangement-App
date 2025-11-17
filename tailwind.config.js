/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      fontWeight: {
        semibold: 600,
      }
    },
  },
  plugins: [],
}

