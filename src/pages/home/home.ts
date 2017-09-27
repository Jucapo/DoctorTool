import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
//import { FavoritosPage } from '../favoritos/favoritos';
import { ConfiguracionesPage } from '../configuraciones/configuraciones';
import { MenuOpcionesPage } from '../menu-opciones/menu-opciones';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  root: any = MenuOpcionesPage;

  menuOpc: Menu[] = [

    { label: 'Inicio', icon: 'home' },
    { label: 'configuraciones', icon: 'md-settings' },
    { label: 'soporte', icon: 'md-build' },
    { label: 'perfil', icon: 'md-contact' },

  ]

  constructor(public navCtrl: NavController) { }

  setContent(index: number) {
    if (index == 0) {
      this.root = HomePage;
    } else {
      this.root = ConfiguracionesPage;
    }

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

}

interface Menu {
  label: string;
  icon: string;
}
