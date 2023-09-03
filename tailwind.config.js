/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "calc-100-7-7": "calc(100% - 7% - 7%)",
      },
    },
  },
  plugins: [],
};
