module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#F78888",
      yellow: "#F3D250",
      grey: "#ECECEC",
      lightblue: "#90CCF4",
      darkblue: "#5DA2D5",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
