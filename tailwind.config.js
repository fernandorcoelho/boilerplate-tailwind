/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      xs: '.75rem' /* 12px */,
      sm: '.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      xl: '1.25rem' /* 20px */,
      '2xl': '1.5rem' /* 24px */,
      '4xl': '2.25rem' /* 36px */
    },
    colors: {
      black: '#000',
      white: '#FFF',
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        150: '#EFEFEF',
        200: '#D9D9D9',
        300: '#BEBEBE',
        400: '#989999',
        500: '#979797',
        600: '#5B5B5B'
      },
      blue: '#03487C',
      teal: '#4B82D5',
      cyan: {
        lighter: '#00B2FF',
        light: '#4B82D4',
        base: '#0868A9',
        dark: '#012F4E'
      },
      green: {
        light: '#72E367',
        base: '#0DC044',
        dark: '#00BA00'
      },
      yellow: '#FFC700',
      red: '#FF0000'
    },
    extend: {}
  },
  plugins: []
};
