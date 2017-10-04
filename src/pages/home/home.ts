import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { MenuOpcionesPage } from '../menu-opciones/menu-opciones';
import { ConfiguracionesPage } from '../configuraciones/configuraciones';
import { SoportePage } from '../soporte/soporte';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = MenuOpcionesPage;

  menuOpc: Menu[] = [

    { label: 'Inicio', icon: 'home' },
    { label: 'perfil', icon: 'md-contact' },
    { label: 'configuraciones', icon: 'md-settings' },
    { label: 'soporte', icon: 'md-build' },
    

  ]

  constructor(public navCtrl: NavController, public storage: Storage) { }

  setContent(index: number) {
    switch (index) {
      case 0: this.root = HomePage;; break;
      case 1: this.navCtrl.push(PerfilPage); break;
      case 2: this.navCtrl.push(ConfiguracionesPage); break;
      case 3: this.navCtrl.push(SoportePage); break;
    }  
  }

  logout(){
    this.storage.set("logged", false);
    this.navCtrl.setRoot(LoginPage);
  }

}

interface Menu {
  label: string;
  icon: string;
}
