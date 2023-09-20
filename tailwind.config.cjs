/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace']
    },
    extend: {
      colors: {
        brown: {
          50: 'rgba(117, 78, 78, 0.02)',
          100: 'rgba(117, 78, 78, 0.25)',
          500: 'rgb(117, 78, 78)'
        }
      },
      container: {
        screens: {
          '2xl': '1400px'
        }
      }
    }
  },

  plugins: []
}

module.exports = config
