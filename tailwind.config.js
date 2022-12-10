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
      },
    },
  },
  plugins: [],
}
