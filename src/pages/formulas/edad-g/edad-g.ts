import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculosProvider } from '../../../providers/calculos/calculos';

@Component({
  selector: 'page-edad-g',
  templateUrl: 'edad-g.html',
})
export class EdadGPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
  }

  edadG: Date;
  fum: Date;

  calcular() {
    let fum = this.fum;
    this.edadG = this.service.edadG(fum);
  }

}
