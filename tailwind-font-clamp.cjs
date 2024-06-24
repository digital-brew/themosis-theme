const plugin = require('tailwindcss/plugin')
/*Tailwindcss plugin with utilities for font size clamping. Clamp values are calculated in such
* a way so that font sizing is smoothly scaled from specified min to max fontsizes
* e.g.
* .text-clamp-sm-2xl{
*  font-size: clamp(0.875rem, 10vw, 1.5rem);
* }
* */
let clamps = []

const fontClamp = plugin(
  function ( { addUtilities, theme, e } ) {
    //clampBuilder function credits: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

    const sizes = ['xxs', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl', '11xl', '12xl']

    sizes.forEach((size, index) => {
      let newArr = sizes.slice(index)
      if (newArr.length > 1) {
        const first = newArr[0]
        const tempArr = newArr.slice(1)

        tempArr.forEach(size => {
          clamps.push(`${first}-${size}`)
        })
      }
    })

    const clampBuilder = ( minWidthPx, maxWidthPx, minFontSize, maxFontSize, pixelsPerRem = 16 ) => {
      const minWidth = minWidthPx / pixelsPerRem
      const maxWidth = maxWidthPx / pixelsPerRem

      const slope             = (maxFontSize - minFontSize) / (maxWidth - minWidth)
      const yAxisIntersection = -minWidth * slope + minFontSize

      return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem )`
    }

    const ranges       = theme( 'fontClamp' )
    //console.log( ranges)
    const minWidthPx   = 640
    const maxWidthPx   = 1280
    const pixelsPerRem = 16

    const minWidth = minWidthPx / pixelsPerRem
    const maxWidth = maxWidthPx / pixelsPerRem

    const utilities = ranges.map( range => {
      const [ fontSizeNameMin, fontSizeNameMax ] = range.split( '-' )

      //bad range format, escape
      if ( !fontSizeNameMin || !fontSizeNameMax ) {
        return false
      }

      // console.log(parseFloat(tw.fontSize['sm'][0]))
      // console.log(tw.fontSize['sm'][1])
      // console.log(parseFloat(tw.fontSize['4xl'][0]))
      // console.log(parseFloat(tw.fontSize['4xl'][1].lineHeight))

      //obtain font sizes by font names
      const minFontSize = parseFloat( theme( `fontSize.${fontSizeNameMin}[0]` ) )
      const maxFontSize = parseFloat( theme( `fontSize.${fontSizeNameMax}[0]` ) )
      const minLineHeight = theme( `fontSize.${fontSizeNameMin}[1]` ) ? parseFloat( theme( `fontSize.${fontSizeNameMin}[1].lineHeight` ) ) : undefined
      const maxLineHeight = theme( `fontSize.${fontSizeNameMax}[1]` ) ? parseFloat( theme( `fontSize.${fontSizeNameMax}[1].lineHeight` ) ) : undefined

      //could not obtain good font size values, escape
      if ( !minFontSize || !maxFontSize ) {
        return false
      }

      if ( minLineHeight === undefined && maxLineHeight === undefined ) {
        return {
          [ `.${e( `text-clamp-${fontSizeNameMin}-${fontSizeNameMax}` )}` ]: {
            fontSize: clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ),
          },
        }
      }

      return {
        [ `.${e( `text-clamp-${fontSizeNameMin}-${fontSizeNameMax}` )}` ]: {
          fontSize: clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ),
          lineHeight: clampBuilder( minWidthPx, maxWidthPx, minLineHeight, maxLineHeight )
        },
      }

    } ).filter( item => item )

    addUtilities( utilities, {
      variants: [ 'responsive', 'prose' ],
    } )
  },
  {
    theme: {
      fontClamp: clamps
    },
  },
)

module.exports = fontClamp;
