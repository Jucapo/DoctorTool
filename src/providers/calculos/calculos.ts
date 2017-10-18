import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CalculosProvider {
  constructor(public http: Http) {
    console.log('Hello CalculosProvider Provider');
  }

  osmp(na: number, but: number, glucosa: number): number {
    let osmp = 0;
    osmp = (2 * na) + (but / 18) + (glucosa / 2.8);
    return osmp;
  }

  imc(peso: number, altura: number): number {
    let imc = 0;
    imc = peso / (altura * altura);
    return imc;
  }

  asc(peso: number, altura: number): number {
    let asc = 0;
    asc = Math.sqrt(peso * altura) / 60;
    return asc;
  }

  apache2(Temperatura: number, PAM: number, FC: number, FR: number, NaP: number, KP: number,
    Creatinina: number, Hematocrito: number, Leucocitos: number, GCS: number, edad: number,
    enfPrev: number): number {
    let APACHE2 = 0;
    APACHE2 = (Temperatura + PAM + FC + FR + NaP + KP + Creatinina + Hematocrito + Leucocitos) + (GCS) + (edad) + (enfPrev);
    return APACHE2;
  }

}
