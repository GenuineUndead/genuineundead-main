/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        teko: ["teko", "sans-serif"],
        didot: ["linotype-didot", "serif"],
      },
    },
  },
  plugins: [],
};
