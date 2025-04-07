module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // You can customize these colors based on your preference
        'primary': '#000000',
        'background': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
