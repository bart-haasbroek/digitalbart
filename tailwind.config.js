const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['"Baloo Tamma 2"', 'cursive'],
      },
      colors: {
        primary: {
          // DEFAULT: colors.slate[200],
          DEFAULT: '#A8D0E6',
          light: "#4c8dff",
          dark: "#3171e0",
        },
        secondary: {
          DEFAULT: colors.slate[300],
          dark: "#36abe0",
          light: "#50c8ff",
        },
        tertiary: {
          DEFAULT: '#06b6d4',
          dark: "#ff5e3a",
          light: "#ff5e3a",
        },
        success: {
          DEFAULT: '#2dd36f',
          dark: "#28ba62",
          light: "#42d77d",
        },
        warning: {
          DEFAULT: '#ffc409',
          dark: "#e0ac08",
          light: "#ffca22",
        },
        danger: {
          DEFAULT: '#eb445a',
          dark: "#cf3c4f",
          light: "#ed576b",
        },
        light: {
          DEFAULT: '#f4f5f8',
          dark: "#d7d8da",
          light: "#f5f6f9",
        },
        medium: {
          DEFAULT: '#92949c',
          dark: "#808289",
          light: "#9d9fa6",
        },
        dark: {
          DEFAULT: colors.slate[800],
          dark: "#1e2023",
          light: "#383a3e",
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

