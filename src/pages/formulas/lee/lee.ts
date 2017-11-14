import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';

@Component({
  selector: 'page-lee',
  templateUrl: 'lee.html',
})
export class LeePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
  }

  LEE = 0;
  LEEP = 0;
  edad: string;
  peso: string;
  altura: string;
  afc: string;

  calcular() {
    let edad = parseInt(this.edad);
    let peso = parseInt(this.peso);
    let altura = parseInt(this.altura);
    let afc = parseInt(this.afc);
     
    this.LEE = this.service.LEE(edad,peso,altura,afc);
    this.LEEP = this.LEE* 2.5679;
  }

}
