
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
      typography: {
        base: {
          css: {
            hr: {
              marginTop: '1em', // Example: Adjust top margin
              marginBottom: '1em', // Example: Adjust bottom margin
            },
            // ... customize other elements or modifiers if needed
          },
        },
      },
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.js",
  ],
}