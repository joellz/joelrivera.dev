/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace']
    },
    extend: {
      colors: {
        olive: {
          50: 'rgba(110, 126, 110, 0.02)',
          100: 'rgba(110, 126, 110, 0.25)',
          500: 'rgb(110, 126, 110)'
        }
      },
      container: {
        screens: {
          '2xl': '1400px'
        }
      }
    }
  },

  plugins: [require('@tailwindcss/typography')]
}

module.exports = config
