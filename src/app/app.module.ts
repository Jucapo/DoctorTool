import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { FavoritosPage } from '../pages/favoritos/favoritos';  
import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';
import { MenuOpcionesPage } from '../pages/menu-opciones/menu-opciones';
import { EspecialidadPage } from '../pages//especialidad/especialidad';
import { ProcesosPage } from '../pages//procesos/procesos';
import { RecientesPage } from '../pages//recientes/recientes';
import { TodosPage } from '../pages//todos/todos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConfiguracionesPage,
    MenuOpcionesPage,
    FavoritosPage,
    EspecialidadPage,
    ProcesosPage,
    RecientesPage,
    TodosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FavoritosPage,
    ConfiguracionesPage,
    MenuOpcionesPage,
    EspecialidadPage,
    ProcesosPage,
    RecientesPage,
    TodosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
