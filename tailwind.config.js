
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm:"550px",
      md:"700px"
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
],
}