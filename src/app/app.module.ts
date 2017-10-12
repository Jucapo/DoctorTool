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
import { OsmpPage } from '../pages/formulas/osmp/osmp';
import { ImcPage } from '../pages/formulas/imc/imc';
import { AscPage } from '../pages/formulas/asc/asc';
import { LeePage } from '../pages/formulas/lee/lee';
import { VstPage } from '../pages/formulas/vst/vst';
import { Apache2Page } from '../pages/formulas/apache2/apache2';
import { EdadGPage } from '../pages/formulas/edad-g/edad-g';
import { FppPage } from '../pages/formulas/fpp/fpp';
import { GuptaPage } from '../pages/formulas/gupta/gupta';
import { HollidayPage } from '../pages/formulas/holliday/holliday';
import { PacPage } from '../pages/formulas/pac/pac';
import { PptPage } from '../pages/formulas/ppt/ppt';
import { PsePage } from '../pages/formulas/pse/pse';
import { PspPage } from '../pages/formulas/psp/psp';
import { TfgPage } from '../pages/formulas/tfg/tfg';

//_____________________________SERVICIOS_____________________________________
import { FormulasProvider } from '../providers/formulas/formulas';
import { CalculosProvider } from '../providers/calculos/calculos';

//______________________________FIREBASE______________________________________
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { firebaseConfig } from './firebase.config';
// import { storage } from 'firebase';
// import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    //paginas
    HomePage, LoginPage, RegistrarPage, ConfiguracionesPage, PerfilPage, SoportePage, MenuOpcionesPage,
    FavoritosPage, EspecialidadPage, ProcesosPage, RecientesPage, TodosPage,

    //formulas
    OsmpPage, ImcPage, AscPage, Apache2Page, EdadGPage, FppPage, GuptaPage, HollidayPage, PacPage,
    PptPage, PsePage, PspPage, TfgPage, VstPage, LeePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: 'top', tabsHideOnSubPages: true }),
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
    //formulas
    OsmpPage, ImcPage, AscPage, Apache2Page, EdadGPage, FppPage, GuptaPage, HollidayPage, PacPage,
    PptPage, PsePage, PspPage, TfgPage, VstPage, LeePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FormulasProvider,
    CalculosProvider,
    //Camera
  ]
})
export class AppModule { }
