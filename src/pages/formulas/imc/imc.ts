import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';


@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public service: CalculosProvider) {
  }
  imc= 0;
  peso: string;
  altura: string;
  escala: string;


  calcular() {
    let peso = parseInt(this.peso);
    let altura = parseFloat(this.altura);
    this.imc = this.service.imc(peso, altura);

    if(this.imc < 16){this.escala = "PESO BAJO: delgadez SEVERA";}
    else if(this.imc < 17){this.escala = "PESO BAJO: delgadez moderada";}
    else if(this.imc < 18.5){this.escala = "PESO BAJO: delgadez aceptable";}
    else if(this.imc < 25){this.escala = "Peso normal";}
    else if(this.imc < 30){this.escala = "SOBREPESO: Pre-obeso";}
    else if(this.imc < 35){this.escala = "OBESO TIPO I (Riesgo Moderado)";}
    else if (this.imc < 40){this.escala = "OBESO TIPO II (Riesgo Severo)";}
    else if(this.imc > 40){this.escala = "OBESO TIPO III (Riesgo Muy Severo)";}
  

  }


}
