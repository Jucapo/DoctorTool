import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';


@Component({
  selector: 'page-holliday',
  templateUrl: 'holliday.html',
})
export class HollidayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
  }

  holliday = 0;
  peso: string;
  tiempo: string;
 

  calcular() {
    let peso = parseInt(this.peso); 
    let tiempo = parseInt(this.tiempo); 
    this.holliday = this.service.holliday(peso,tiempo);
  }
}
