/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-bg': '#121212',
        'console-bg': '#262335',
        'dev-bg': '#171520',
        'res-blk': '#323336',
        'res-gray': '#707678',
        'res-lgray': '#C1C5C7',
      },
    },
  },
  plugins: [],
}
