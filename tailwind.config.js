import plugin from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '0 0 20px 0 rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'primary': {
          light: '#0584FE',
          DEFAULT: '#007AFF',
          dark: '#1253A2'
        },
        'secondary': '#8F8F8F'
      },
      fontSize: {
        xs: '0.72rem', // 13
        sm: '0.83rem', // 15
        base: '1rem', // 18
        md: '1.72rem', // 31
        xl: '1.88rem', // 34
        '2xl': '2.27rem', // 41
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        'html': { fontSize: "18px" },
      })
    }),
  ],
}
