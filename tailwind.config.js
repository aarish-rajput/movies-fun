module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Bebas Neue', 'cursive']
      }, 
      screens: {
        'fs': {'max': '600px'}

      }
    },
  },
  plugins: [],
}
