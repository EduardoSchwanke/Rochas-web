/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    backgroundImage: {
      'ignea': "url('../..images/bg-3.png')",
      'metaforfica': "url('../../../src/images/bg-1.png')",
      'sedimentar': "url('../../../src/images/bg-2.png')",
    },
    extend: {
      dropShadow: {
        'styled': '2px 2px 4px rgba(0, 0, 0, 1)', 
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lm': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... } 
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
