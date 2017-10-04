import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user';
import { RegistrarPage } from '../registrar/registrar';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  user = {} as User;

  constructor(private ofAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
  }

  async login(user: User) {
    try {
      const result = this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((authData)=>{
        if (result) {
          this.storage.set("logged", true);
          this.navCtrl.setRoot(HomePage);
        }
      }).catch(function(error){
        var  msjError = error.message;
        alert(msjError)
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  registrar() {
    this.navCtrl.push(RegistrarPage);
  }

}
