module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
