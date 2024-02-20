/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      strongCyan: 'hsl(171, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayishBlue: 'hsl(210, 10%, 33%)',
      white: 'hsl(0, 0%, 100%)',
      lightGray: 'hsl(212, 45%, 89%)',
      grayishBlue: 'hsl(220, 15%, 55%)',
      darkBlue: 'hsl(218, 44%, 22%)'
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
  },
  plugins: [],
}

