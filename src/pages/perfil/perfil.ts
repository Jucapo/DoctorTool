import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase ) {
  }


  crearPerfil(){
    this.afAuth.authState.take(1).subscribe( auth => {
      this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil)
      .then(()=> this.navCtrl.setRoot(HomePage))
    })
  }

}
