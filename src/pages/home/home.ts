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
import { firebaseConfig } from '../../app/firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
// import { storage, initializeApp } from 'firebase';
// import { Camera, CameraOptions } from '@ionic-native/camera';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = MenuOpcionesPage;
  perfilData: FirebaseObjectObservable<{ Profile }>;


  menuOpc: Menu[] = [
    { label: 'Inicio', icon: 'home' },
    { label: 'perfil', icon: 'md-contact' },
    { label: 'configuraciones', icon: 'md-settings' },
    { label: 'soporte', icon: 'md-build' },
  ]

  constructor(public navCtrl: NavController, public storage: Storage,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
  private toast: ToastController,/* private camera: Camera*/) {
    // initializeApp(firebaseConfig);

  }

  // async takePhoto() {
  //   try {
  //     const options: CameraOptions = {
  //       quality: 50,
  //       targetHeight: 600,
  //       targetWidth: 600,
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       encodingType: this.camera.EncodingType.JPEG,
  //       mediaType: this.camera.MediaType.PICTURE,
  //       correctOrientation: true
  //     }
  //     const result = await this.camera.getPicture(options);
  //     const image = `data:image/jpeg;base64,${result}`;
  //     const pictures = storage().ref('picture/fotoPerfil');
  //     pictures.putString(image, 'data_url');
  //   }
  //   catch (e) {
  //     console.error(e);
  //   }
  // }

  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bienvenido a DooctorTool  ${data.email}`,
          duration: 3000
        }).present();
        this.perfilData = this.afDatabase.object(`perfil/${data.uid}`)
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
