/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      "section-me": "repeat(2, 1fr)",
    },
    colors: {
      sblue: "#4D76FF",
      sgraypure: "#b8b8b8",
      sgray: "#ece9e9",
      swhite: "#ffffff",
      sblack: "#181818",
    },
    extend: {},
  },
  plugins: [],
};
