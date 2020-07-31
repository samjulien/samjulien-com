module.exports = {
  purge: [
    './src/components/**/*.js',
    './src/pages/**/*.js',
    './src/pages/**/*.mdx',
    './src/templates/**/*.js',
    './content/modules/**/*.mdx',
  ],
  theme: {
    fontFamily: {
      mono: ['Recursive', 'system-ui', 'monospace'],
    },

    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.800'),
          fontFamily: 'Recursive, monospace', // https://recursive.design
          fontVariationSettings:
            "'MONO' 0, 'CASL' 0, 'wght' 400, 'slnt' 0, 'CRSV' 0.5",
          'code, pre': {
            fontVariationSettings:
              "'MONO' 1, 'CASL' 0, 'wght' 400, 'slnt' 0, 'CRSV' 0.5",
          },
          'h1, h2, h3, h4, h5': {
            fontVariationSettings:
              "'MONO' 0, 'CASL' 0.1, 'wght' 800, 'slnt' 0, 'CRSV' 0.5",
          },
          strong: {
            fontVariationSettings:
              "'MONO' 0, 'CASL' 0, 'wght' 800, 'slnt' 0, 'CRSV' 0.5",
          },
          em: {
            fontVariationSettings:
              "'MONO' 0, 'CASL' 0.3, 'wght' 400, 'slnt' -12, 'CRSV' 0.5",
          },
          a: {
            color: theme('colors.green.600'),
          },
          'a:hover': {
            color: theme('colors.green.500'),
          },
        },
      },
    }),
    extend: {
      colors: {
        green: {
          50: '#EDFAF7',
          100: '#E7F7F3',
          200: '#C3EAE0',
          300: '#9FDECE',
          400: '#58C5A9',
          500: '#10AC84',
          600: '#0E9B77',
          700: '#0A674F',
          800: '#074D3B',
          900: '#053428',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/ui')],
}
