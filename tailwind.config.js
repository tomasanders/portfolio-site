/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#E5E5E5',
        'dark-bg': '#2A2A2A',
        'light-primary': '#6200EE',
        'dark-primary': '#BB86FC',
        'light-fg': '#FFFFFF',
        'dark-fg': '#121212'
      },
    },
  },
  plugins: [],
}
