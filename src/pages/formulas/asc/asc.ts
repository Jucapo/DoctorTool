import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';


@Component({
  selector: 'page-asc',
  templateUrl: 'asc.html',
})
export class AscPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
  }

  asc = 0;
  peso: string;
  altura: string;

  calcular() {
    let peso = parseInt(this.peso);
    let altura = parseInt(this.altura);
    this.asc = this.service.asc(peso, altura);
  }

}
