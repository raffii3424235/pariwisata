/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/slamet.jpg')",
      },
      backgroundColor: {
        green: "#68FE9A",
        dark: "#060606",
        white_smoke: "#FEFAF1",
        semi_dark: "#24272C",
      },
      colors: {
        green: "#68FE9A",
        dark: "#060606",
        white_smoke: "#FEFAF1",
        semi_dark: "#24272C",
      },
    },
  },
  plugins: [],
});
