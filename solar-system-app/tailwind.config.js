/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      system: {
        brand: "#151515",
      },
      blue: "#1E90FF",
    },
    extend: {},
  },
  plugins: [],
};
