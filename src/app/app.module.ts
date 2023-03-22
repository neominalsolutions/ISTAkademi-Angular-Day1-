import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextBoldDirective } from './directives/text-bold.directive';
import { GenerationPipe } from './pipes/generation.pipe';

// React da ama uygulama ait tüm bileşenlerde angularda Module içirisine tanımlanır.
@NgModule({
  declarations: [
    AppComponent,
    TextBoldDirective,
    GenerationPipe, // uygulamadaki sayfaları yani componentleri buraya tanıtırız. Buraya ayrıca pipes, directives yapılarıda eklenir.
  ],
  imports: [
    // buraya sadece module gelir. 3rd bir paket de olabilir kendi modulümüzde olabilir
    BrowserModule, // Uygulamanın Tarayıcıda çalışması CSR yapması için gereken bir module
  ],
  providers: [], // uygulama içerişsinde kullanılacak olan serviceler, imageUploadService, gibi buraya tanımlanır. uygulamanın bir hizmeti çalıştırması için uygulamaya tanıtılması gerekiyor.
  bootstrap: [AppComponent], // uygulamayı bu component den çalıştır. React daki App.tsx dosyamız
})
export class AppModule {}
