/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      textColor: ['group-hover']
    }
  },
  theme: {
    fontSize: {
      xxs: '.688rem' /* 11px */,
      xs: '.75rem' /* 12px */,
      sm: '.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      xl: '1.25rem' /* 20px */,
      '2xl': '1.5rem' /* 24px */,
      '4xl': '2.25rem' /* 36px */
    },
    colors: {
      transparent: 'rgba(0, 0, 0, 0)',
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
        lighter: '#84CD81',
        light: '#72E367',
        base: '#0DC044',
        dark: '#00BA00',
        darker: '#009A00'
      },
      yellow: '#FFC700',
      red: {
        base: '#FF0000',
        dark: '#B90202'
      }
    },
    letterSpacing: {
      normal: 0,
      wide: '0.1em',
      wider: '0.15em',
      widest: '0.33em'
    },
    borderWidth: {
      0.5: '0.5px',
      1: '1px'
    },
    borderRadius: {
      none: '0px',
      xs: '4px',
      sm: '5px',
      lg: '8px',
      xl: '20px'
    },
    lineHeight: {
      1: '15px',
      2: '17px',
      3: '19px',
      4: '24px',
      5: '29px'
    },
    extend: {
      spacing: {
        1.25: '0.313rem' /* 5px */,
        1.5: '0.438rem' /* 7px */,
        3.5: '0.875rem' /* 14px */,
        7.5: '1.875rem' /* 30px */
      }
    }
  },
  plugins: []
};
