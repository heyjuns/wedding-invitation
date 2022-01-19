
module.exports = {
  mode: 'jit',
  darkMode:false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': {
          100: '#342F2F',
          200: '#0A100B',
          300: '#3D3937',
          400: '#020202',
          500: '#242424',
        },
        'background': {
          'tint': '#F5EFEC',
          'shade': '#ddd7d4'
        }
      },
    },
  },
  plugins: [],
}
