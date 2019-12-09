const { colors, opacity, fontFamily, letterSpacing, fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
    },
    // colors: {
    //   gray: colors.gray,
    //   primary: colors.gray,
    //   secondary: colors.orange,
    //   black: '#2D2D2A',
    //   white: colors.white
    // },
    fontSize: {
      ...fontSize
    },
    opacity: {
      ...opacity,
    },
    fontFamily: {
      ...fontFamily,
      // sans: ['Open Sans', ...fontFamily.sans],
      // display: ['Be Vietnam', ...fontFamily.sans],
    },
    letterSpacing: {
      ...letterSpacing,
      // wider: '0.6rem',
      // widest: '1rem'
    }
  },
  container: {
    center: true,
    padding: '2rem'
  },
  variants: {
    textColor: ['hover'],
  },
  plugins: []
}
