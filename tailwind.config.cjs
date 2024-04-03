/** @type {import('tailwindcss').Config}*/
const plugin = require('tailwindcss/plugin')

const config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      mono: ['Courier', 'monospace']
    },
    extend: {
      colors: {
        current: 'currentColor',
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

  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      )
    })
  ]
}

module.exports = config
