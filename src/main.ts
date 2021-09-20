import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainAppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(MainAppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
