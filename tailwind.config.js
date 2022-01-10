
module.exports = {
  mode: 'jit',
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
        'medium-carmine': {
          0: '#bd3a3a',
          100: '#aa3434',
          200: '#972e2e',
          300: '#842929',
          400: '#712323',
          500: '#5f1d1d',
          600: '#4c1717',
          700: '#391111',
          800: '#260c0c',
          900: '#130606',
        },
      },
    },
  },
  plugins: [],
}
