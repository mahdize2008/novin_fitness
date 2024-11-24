/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1172px',
    },
    container: {
      padding: '16px',
      center: true,
    },
    colors:{
      transparent: 'transparent',
      white:'#fff',
      black:'#000',

      primary:'#1875FF',
      'primary-dark':'#0D55C1',

      secondary:'#00886B',
      'secondary-alpha':'#3C8F7C',
      'secondary-beta':'#58A399',
      'secondary-theta':'#092635',

      warning:'#F7AD1999',
      'warning-alpha':'#FFF3E4',

      dark:'#263238',
      'dark-alpha':'#292D32',

      natural:'#f9f9f9',
      'natural-alpha':'#DFDFDF',
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: 'normal',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '750',
      black: '800',
      extrablack: '850',
    },
    fontSize: {
      '4xs': '8px',
      '3xs': '10px',
      '2xs': '11px',
      xs: '12px',
      'xs-plus': '13px',
      sm: '14px',
      'sm-plus': '15px',
      base: '16px',
      'base-plus': '17px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
      '11xl': '42px',
      '12xl': '44px',
      '13xl': '46px',
      '14xl': '48px',
      '15xl': '50px',
      '18xl': '56px',
      '20xl': '60px',
    },
    backgroundImage: {
      'white-gradient': "linear-gradient(270deg, rgba(252, 252, 252, 0) 0%, #FCFCFC 48.44%, rgba(252, 252, 252, 0) 100%)",
      'primary-gradient': "linear-gradient(239.74deg, #1875FF -12.19%, #124289 101.12%)",
      'primary-gradient-alpha': "linear-gradient(180deg, #1875FF 0%, #002F75 100%)",
      'primary-gradient-beta': "linear-gradient(90deg, rgba(115, 158, 223, 0.1) 0%, rgba(124, 157, 207, 0.1) 22.35%, rgba(153, 153, 153, 0.1) 100%)",
    },
    boxShadow: {
      'primary-shadow': '0px 3px 4px 0px rgba(0, 0, 0, 0.25)',
      'lighter-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
      'light-shadow': '0px 2px 2px 0px rgba(0, 0, 0, 0.1)',
    },
    extend: {
      borderRadius:{
        '2.5xl':'20px'
      }
    },
  },
  plugins: [],
}