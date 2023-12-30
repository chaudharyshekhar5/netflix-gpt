
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '540px',
      // => @media (min-width: 768px) { ... }

      'lg': '750px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1000px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}