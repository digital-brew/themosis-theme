const plugin = require( 'tailwindcss/plugin' )

module.exports = {
  content: [
    "./views/**/*.php",
    "./assets/js/**/*.js",
    "../../../../app/**/*.php",
    "safelist.txt"
  ],

  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1620px'
    },
    extend: {
      fontFamily: {
        display: [
          'Montserrat',
          'serif'
        ],
        body: [
          'Poppins',
          'sans-serif'
        ],
        button: [
          'Poppins',
          'sans-serif',
        ],
      },
      fontSize: {
        xxs: [ '0.75rem', { lineHeight: '0.875rem' } ],     // 12px - 14px
        xs: [ '0.875rem', { lineHeight: '1rem' } ],         // 14px - 16px
        sm: [ '0.9375rem', { lineHeight: '1.125rem' } ],    // 15px - 18px
        base: [ '1rem', { lineHeight: '1.25rem' } ],        // 16px - 20px
        md: [ '1.125rem', { lineHeight: '1.375rem' } ],     // 18px - 22px
        lg: [ '1.25rem', { lineHeight: '1.5rem' } ],        // 20px - 24px
        xl: [ '1.5rem', { lineHeight: '1.875rem' } ],       // 24px - 30px
        '2xl': [ '1.875rem', { lineHeight: '2.25rem' } ],   // 30px - 36px
        '3xl': [ '2.125rem', { lineHeight: '2.5rem' } ],    // 34px - 40px
        '4xl': [ '2.375rem', { lineHeight: '2.875rem' } ],  // 38px - 46px
        '5xl': [ '2.75rem', { lineHeight: '3.125rem' } ],   // 44px - 50px
        '6xl': [ '3.125rem', { lineHeight: '3.5rem' } ],    // 50px - 56px
        '7xl': [ '3.875rem', { lineHeight: '4.5rem' } ],    // 62px - 72px
        '8xl': [ '4.625rem', { lineHeight: '5.125rem' } ],  // 74px - 82px
        '9xl': [ '5.375rem', { lineHeight: '5.875rem' } ],  // 86px - 94px
        '10xl': [ '7.5rem', { lineHeight: '8.125rem' } ],   // 120px - 130px
        '11xl': [ '8.675rem', { lineHeight: '9.25rem' } ],  // 138px - 148px
        '12xl': [ '9.75rem', { lineHeight: '10.5rem' } ],   // 156px -168px
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      colors: {

      }
    }
  },
  corePlugins: {
    container: false,
    aspectRatio: false
  },

  plugins: [
    require( '@captaincss/captaincss' ),
    require( '@tailwindcss/aspect-ratio' ),
    require( '@tailwindcss/typography' ),
    require( './tailwind-font-clamp.cjs' ),
    require( 'tailwind-bootstrap-grid' )( {
      containerMaxWidths: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
      gridGutters: {
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      gridGutterWidth: '2rem',
    } )
  ]
}
