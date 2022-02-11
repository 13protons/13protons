
module.exports = {
  jit: true,
  darkMode: 'class',
  theme: {
    
    extend: {
      fontFamily: {
        hahmlet: ['Hahmlet', 'serif']
      },
      // screens: {
      //   '2xl': {'max': '1279px'},
      //   // => @media (max-width: 1535px) { ... }
  
      //   'xl': {'max': '1279px'},
      // },
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'),],
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.js",
  ],
}