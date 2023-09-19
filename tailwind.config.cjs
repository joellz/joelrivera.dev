/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace']
    },
    extend: {
      colors: {
        brown: '#754E4E'
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
