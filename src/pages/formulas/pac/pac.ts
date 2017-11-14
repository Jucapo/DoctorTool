import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';


@Component({
  selector: 'page-pac',
  templateUrl: 'pac.html',
})
export class PacPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
    }

    pac= 0;
    peso: string;
    altura: string;
    edad: string;

    calcular() {
      let peso = parseInt(this.peso);
      let altura = parseFloat(this.altura);
      let edad = parseFloat(this.edad);      
      this.pac = this.service.pac(peso, altura,edad);
    }

}
