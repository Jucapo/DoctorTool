import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  user = {} as User;

  constructor(private ofAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async registrar(user: User) {
    try {
      const result = await this.ofAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((authData) => {
          alert("Usuario Registrado Exitosamente")
          this.navCtrl.push(LoginPage);
        }).catch(function (error) {
          var msjError = error.message;
          alert(msjError)
        });
    }
    catch (e) {
      console.error(e);
    }
  }

}
