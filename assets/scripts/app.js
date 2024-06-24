import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';
import focus from '@alpinejs/focus';
import ui from '@alpinejs/ui';
import AsyncAlpine from 'async-alpine';
import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
// import component from './components/component.js';

window.Alpine = Alpine;

AsyncAlpine
  .init ( Alpine )
  // .data (
  //   'component', () => import('./components/component.js'),
  // )
  .start ();

Alpine.plugin ( collapse );
Alpine.plugin ( intersect );
Alpine.plugin ( focus );
Alpine.plugin ( ui );
Alpine.plugin ( persist );
// Alpine.data ( 'component', component );
Alpine.start ();


$ ( document ).ready ( function () {

} );
