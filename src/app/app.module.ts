import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';

import { PlaylistsPage } from '../pages/playlists/playlists';
import { CancionesPage } from '../pages/canciones/canciones';

import { TecnoPlayerComponent } from '../components/tecno-player/tecno-player';

@NgModule({
  declarations: [
    MyApp,

    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,

    PlaylistsPage,
    CancionesPage,

    TecnoPlayerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,

    PlaylistsPage,
    CancionesPage,

    TecnoPlayerComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
