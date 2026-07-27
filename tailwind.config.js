/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fbf2f2',
          100: '#f6e3e3',
          200: '#ecc6c7',
          300: '#de9ea0',
          400: '#cc6e72',
          500: '#b9484d',
          600: '#a2353a',
          700: '#882b30',
          800: '#6e0c0c',
          900: '#5a0a0e',
          950: '#3a0506',
        },
        blush: {
          50: '#fdf7f7',
          100: '#fbeeee',
          200: '#f6dcdc',
          300: '#eebdbd',
          400: '#e29494',
          500: '#dd828e',
          600: '#c95f6b',
          700: '#ab4753',
          800: '#8f3b45',
          900: '#76333c',
        },
        cream: {
          50: '#fdfcfa',
          100: '#f9f5ef',
          200: '#f3ebdd',
          300: '#ebdcc4',
          400: '#dcc4a0',
          500: '#cda87e',
        },
        sage: {
          100: '#eef0ea',
          200: '#dde2d4',
          400: '#9ba887',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        formal: ['"Petit Formal Script"', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
        display: ['Italiana', 'serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};
