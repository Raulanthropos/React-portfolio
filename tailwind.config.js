module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    test: {
      'lg:w-1/3': '90%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}