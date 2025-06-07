// src/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        edsBlack: "#000000",
        edsGold: "#CBA135",
        edsRed: "#8B0000",
        edsCharcoal: "#2E2E2E",
        edsLightGray: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
