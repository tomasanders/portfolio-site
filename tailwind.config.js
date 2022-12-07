/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'c-black': '#161616',
      'c-red': '#C64A3A',
      'c-green': '#689775',
      'c-white': '#FDFDFD',
    },
    extend: {},
  },
  plugins: [],
}
