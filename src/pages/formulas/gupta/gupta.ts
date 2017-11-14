import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';


@Component({
  selector: 'page-gupta',
  templateUrl: 'gupta.html',
})
export class GuptaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
  }

  GUPTA = 0;
  edad: string;
  creatinina: string;
  asa: string;
  efp: string;
  ldp: string;


  calcular() {
    let edad = parseInt(this.edad);
    let creatinina = parseInt(this.creatinina);
    let asa = parseInt(this.asa);
    let efp = parseInt(this.efp);
    let ldp = parseInt(this.ldp);
     
    this.GUPTA = this.service.gupta(edad,creatinina,asa,efp,ldp);
  }


}
