import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CalculosProvider } from '../../../providers/calculos/calculos';

@Component({
  selector: 'page-apache2',
  templateUrl: 'apache2.html',
})
export class Apache2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: CalculosProvider) {
  }
  porMortalidad: number = 0;
  porMortalidadPos: number = 0;
  APACHE2 = 0;
  Temperatura: string;
  PAM: string;
  FC: string;
  FR: string;
  NaP: string;
  KP: string;
  Creatinina: string;
  Hematocrito: string;
  Leucocitos: string;
  GCS: string;
  edad: string;
  enfPrev: string;
 

  calcular() {
    let Temperatura = parseInt(this.Temperatura);
    let PAM = parseInt(this.PAM);
    let FC = parseInt(this.FC);
    let FR = parseInt(this.FR);
    let NaP = parseInt(this.PAM);
    let KP = parseInt(this.KP);   
    let Creatinina = parseInt(this.Creatinina);
    let Hematocrito = parseInt(this.Hematocrito);
    let Leucocitos = parseInt(this.Leucocitos);
    let GCS = parseInt(this.GCS);
    let edad = parseInt(this.edad);
    let enfPrev = parseInt(this.enfPrev);
    
       
    this.APACHE2 = this.service.apache2(Temperatura,PAM,FC,FR,NaP,KP,Creatinina,Hematocrito,Leucocitos,GCS,edad,enfPrev);
    this.porMortalidad = (this.APACHE2*1.5564)
    this.porMortalidadPos = (this.APACHE2*0.3648)
  }

}
