/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
/* eslint-enable no-undef */
