import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// react daki index.js dosyası
// react.Dom.render(document.getElementById('root'))

// angularda main bizi app module dosyasına yönlendirir.
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
