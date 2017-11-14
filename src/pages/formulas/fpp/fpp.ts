import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculosProvider } from '../../../providers/calculos/calculos';


@Component({
  selector: 'page-fpp',
  templateUrl: 'fpp.html',
})
export class FppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
  }

  fpp: Date;
  fum: Date;

  calcular() {
    let fum = this.fum;
    this.fpp = this.service.fpp(fum);
  }

}
