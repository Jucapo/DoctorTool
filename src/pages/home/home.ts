import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { MenuOpcionesPage } from '../menu-opciones/menu-opciones';
import { ConfiguracionesPage } from '../configuraciones/configuraciones';
import { SoportePage } from '../soporte/soporte';
import { PerfilPage } from '../perfil/perfil';

import { Profile } from '../../models/profile';
//_________________________FIREBASE_____________________________________

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = MenuOpcionesPage;
  perfilData: FirebaseObjectObservable<{Profile}>;
  

  menuOpc: Menu[] = [
    { label: 'Inicio', icon: 'home' },
    { label: 'perfil', icon: 'md-contact' },
    { label: 'configuraciones', icon: 'md-settings' },
    { label: 'soporte', icon: 'md-build' },
  ]

  constructor(public navCtrl: NavController, public storage: Storage,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
     private toast: ToastController ) { }


  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bienvenido a DooctorTool  ${data.email}`,
          duration: 3000
        }).present();

         this.perfilData =  this.afDatabase.object(`perfil/${data.uid}`)
      }
      else {
        this.toast.create({
          message: `No se puso autentificar el perfil`,
          duration: 3000
        }).present();
      }
    })
  }

  setContent(index: number) {
    switch (index) {
      case 0: this.root = HomePage;; break;
      case 1: this.navCtrl.push(PerfilPage); break;
      case 2: this.navCtrl.push(ConfiguracionesPage); break;
      case 3: this.navCtrl.push(SoportePage); break;
    }
  }

  logout() {
    this.storage.set("logged", false);
    this.navCtrl.setRoot(LoginPage);
  }
}

interface Menu {
  label: string;
  icon: string;
}
