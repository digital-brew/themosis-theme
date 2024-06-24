<?php

namespace Theme\Providers;

use Illuminate\Support\ServiceProvider;
use Themosis\Core\ThemeManager;
use Themosis\Support\Facades\Action;
use Themosis\Support\Facades\Asset;

class AssetServiceProvider extends ServiceProvider
{
    /**
     * Theme Assets
     *
     * Here we define the loaded assets from our previously defined
     * "dist" directory. Assets sources are located under the root "assets"
     * directory and are then compiled, thanks to Laravel Mix, to the "dist"
     * folder.
     *
     * @see https://laravel-mix.com/
     */
    public function register()
    {
        /** @var ThemeManager $theme */
        $theme = $this->app->make('wp.theme');

      // FrontEnd
      Asset::add( 'theme_styles', 'styles/app.css', [], $theme->getHeader( 'version' ) )->to( 'front' );
      Asset::add( 'theme_js', 'scripts/app.js', [ 'jquery' ], $theme->getHeader( 'version' ) )->to( 'front' );

      // Block Editor
      Asset::add( 'editor_styles', 'styles/editor.css', [], $theme->getHeader( 'version' ) )->to( 'admin' );
      Action::add( 'enqueue_block_editor_assets', function () {
        wp_enqueue_style( 'editor-fonts', '//fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:wght@400;600;700&display=swap', false, null );
      }, 100 );
    }
}
