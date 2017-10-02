import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';

@Component({
  selector: 'page-osmolaridad',
  templateUrl: 'osmolaridad.html',
})
export class OsmolaridadPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public service: CalculosProvider ) {
  }

  osmp = 0;
  na: string;
  but: string;
  glucosa: string;

  calcular() {
    let na = parseInt(this.na);
    let but = parseInt(this.but);
    let glucosa = parseInt(this.glucosa);
    this.osmp = this.service.osmp(na, but, glucosa);
  }
  
}
