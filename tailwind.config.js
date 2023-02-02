module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fonthome: ['FontHome'],
        fontdefault: ['FontDefault'],
      },
    },
  },

  // add daisyUI plugin
  plugins: [require('daisyui')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
  },

  theme: {
    colors: {
      'namelink-primary': '#39CBA4',
      'namelink-gray-0': '#FFFFFF',
      'namelink-gray-1': '#CDD5E1',
      'namelink-gray-2': '#9CA3B6',
      'namelink-gray-3': '#5B647B',
      'namelink-gray-4': '#292E3E',
      'namelink-gray-5': '#1F232F',
      'namelink-gray-6': '#151920',
      'namelink-gray-7': '#101419',
      'namelink-gray-8': '#0F1113',
      'namelink-sub-1': '#B2D2EF',
      'namelink-sub-2': '#D9D5C2',
      'namelink-alert': '#BC4E4E',
    },
  },
};
