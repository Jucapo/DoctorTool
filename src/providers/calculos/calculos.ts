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

  fpp(fum: Date) {
    let fpp: Date;
    fpp = fum;
    return fpp;
  }

  edadG(fum: Date) {
    let edadG: Date;
    edadG = fum;
    return edadG;
  }


  gupta(edad: number, creatinina: number, asa: number, efp: number, ldp: number) {
    let GUPTA = 0;
    GUPTA = (edad * 1.1223) + (creatinina) + (asa * 3.61) + (efp * 5.0871) + (ldp);
    return GUPTA;
  }

  holliday(peso: number, tiempo: number) {
    let holliday = 0;

    if (peso <= 10) {
      holliday = tiempo * (peso * 4);
    }
    else if (peso <= 20) {
      holliday = tiempo * ((40) + ((peso - 10) * 2));
    }
    else if (peso > 20) {
      holliday = tiempo * ((60) + ((peso - 20)));
    }
    return holliday
  }

  LEE(edad: number, peso: number, altura: number, afc: number) {
    let LEE = 0;
    if (edad <= 70) {
      LEE = (peso * 0.0189) + (altura) + (afc);
    }
    else if (edad <= 80) {
      LEE = (peso * 0.0174) + (altura) + (afc);
    }
    else {
      LEE = (peso * 0.0160) + (altura) + (afc);
    }
    return LEE;

  }

  pac(peso: number, altura: number, edad: number) {
    let pac = 0;
    pac = ((peso / (altura * altura))*3.2)*((edad*0.8)/edad) ;
    return pac;

  }

}
