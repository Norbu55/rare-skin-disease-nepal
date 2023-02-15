/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      container: {
        center: true,
        padding: {
          sm: '16px',
          md: '32px',
          lg: '48px',
          xl: '64px',
        },
      },
      colors: {
        'red-100': '#F20F10',
        'blue-50': '#F3F7FB',
        'blue-200': '#CCD3DF',
        'blue-300': '#AAB6CA',
        'blue-400': '#8091AF',
        'blue-500': '#556C94',
        'blue-600': '#2B487A',
        'blue-700': '#00235F',
        'blue-800': '#001D4F',
        'blue-900': '#00173F',
        'white-800': '#CCD3DF',
        'white-900': '#ffffff',
        'black-900': '#000000',
      },

      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '25px',
        '2xl': '31px',
        '3xl': '39px',
        '4xl': '64px',
        '5xl': '72px',
        '6xl': '80px',
      },

      lineHeight: {
        'leading-1': '1.833',
        'leading-2': '1.625',
        'leading-3': '1.476',
        'leading-4': '1.370',
        'leading-5': '1.278',
        'leading-6': '1.212',
        'leading-7': '1.163',
        'leading-8': '1.125',
      },

      fontWeight: {
        bold: '700',
        'semi-bold': '600',
        medium: '500',
        normal: '400',
      },
    },
  },
  plugins: [],
}
