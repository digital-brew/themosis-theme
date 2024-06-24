const mix      = require ( 'laravel-mix' );
const certPath = '/Users/username/.config/certs/';
require ( '@tinypixelco/laravel-mix-wp-blocks' );

mix
  .setPublicPath ( './dist' )
  .browserSync ( {
    proxy: 'https://local.example.com/',
    https: {
      key: certPath + 'key-localhost.pem',
      cert: certPath + 'localhost.pem',
    },
    files: [
      './views/**/*',
      './assets/scripts/**/*',
      './assets/styles/**/*',
      '../../../../app/**/*',
    ],
  } );

mix
  .js ( 'assets/scripts/app.js', 'dist/scripts' )
  .block ( 'assets/scripts/editor.js', 'dist/scripts' )
  .autoload ( { jquery: [ '$', 'window.jQuery' ] } );

mix
  .sass ( 'assets/styles/app.scss', 'dist/styles' )
  .sass ( 'assets/styles/editor.scss', 'dist/styles' )
  .options ( {
    processCssUrls: false,
    postCss: [ require ( 'tailwindcss' ), require ( 'autoprefixer' ) ],
  } );

mix
  .copyDirectory ( 'assets/images', 'dist/images' )
  .copyDirectory ( 'assets/fonts', 'dist/fonts' );

mix
  .sourceMaps ()
  .version ();
