const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [ 'Nunito', ...defaultTheme.fontFamily.serif],
        display: [ 'Aboreto', ...defaultTheme.fontFamily.serif]

      }
    },
  },
  plugins: [],
}
