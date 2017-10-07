import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

// __________________________PAGES____________________________________
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { FavoritosPage } from '../pages/favoritos/favoritos';  
import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';
import { MenuOpcionesPage } from '../pages/menu-opciones/menu-opciones';
import { EspecialidadPage } from '../pages//especialidad/especialidad';
import { ProcesosPage } from '../pages//procesos/procesos';
import { RecientesPage } from '../pages/recientes/recientes';
import { TodosPage } from '../pages/todos/todos';
import { RegistrarPage } from '../pages/registrar/registrar';
import { PerfilPage } from '../pages/perfil/perfil';
import { SoportePage } from '../pages/soporte/soporte';

// __________________________FORMULAS____________________________________
import { OsmolaridadPage } from '../pages/formulas/osmolaridad/osmolaridad';
import { ImcPage } from '../pages/formulas/imc/imc';
import { AscPage } from '../pages/formulas/asc/asc';
import { LeePage } from '../pages/formulas/lee/lee';
import { VstPage } from '../pages/formulas/vst/vst';

//_____________________________SERVICIOS_____________________________________
import { FormulasProvider } from '../providers/formulas/formulas';
import { CalculosProvider } from '../providers/calculos/calculos';


//______________________________FIREBASE______________________________________
import { AngularFireModule  } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';


export const firebaseConfig =  {
  apiKey: "AIzaSyC1cNRtQthdPXGl-EKJPYbgCTYwvwEjV3U",
  authDomain: "doctortool-807a4.firebaseapp.com",
  databaseURL: "https://doctortool-807a4.firebaseio.com",
  projectId: "doctortool-807a4",
  storageBucket: "doctortool-807a4.appspot.com",
  messagingSenderId: "1090164923653"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    ConfiguracionesPage, 
    PerfilPage,
    SoportePage,
    MenuOpcionesPage,
    FavoritosPage,
    EspecialidadPage,
    ProcesosPage,
    RecientesPage,
    TodosPage,
    AscPage,ImcPage,OsmolaridadPage,LeePage,VstPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top', tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    FavoritosPage,
    ConfiguracionesPage,
    PerfilPage,
    SoportePage,
    MenuOpcionesPage,
    EspecialidadPage,
    ProcesosPage,
    RecientesPage,
    TodosPage,
    AscPage,ImcPage,OsmolaridadPage,LeePage,VstPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FormulasProvider,
    CalculosProvider
  ]
})
export class AppModule {}
