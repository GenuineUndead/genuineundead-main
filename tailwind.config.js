/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "ipad-landscape": {
        raw: "(min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: landscape)",
      },
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1900px",
    },

    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        black: "#191917",
        white: "#f8f8f4",
      }),
      color: {
        black: "#191917",
        white: "#f8f8f4",
      },
      fontFamily: {
        teko: ["teko", "sans-serif"],
        didot: ["linotype-didot", "serif"],
      },
    },
  },
  plugins: [],
};
