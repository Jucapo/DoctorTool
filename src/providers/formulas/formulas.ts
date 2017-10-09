import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Formula } from './formula';


@Injectable()
export class FormulasProvider {

  data: Formula[];
  formulasFav: Formula[] = [];
  formulasRec: Formula[] = [];
  formulasRecTemp: Formula[] = [];
  a = 0;
  b = 0;
  c = 1;

  constructor(public http: Http) {
    this.loadData();
  }

  loadData() {
    this.data = [
      { id: 0, nombre: 'OSMP', descripcion: 'Osmolaridad Plasmatica', especialidad: 'General', favorito: false, imagen: 'assets/icon_formulas/osmp.png' },
      { id: 1, nombre: 'IMC', descripcion: 'Indice Masa Corporal', especialidad: 'General', favorito: false, imagen: 'assets/icon_formulas/imc.png' },
      { id: 2, nombre: 'ASC', descripcion: 'Area Superficie Corporal', especialidad: 'General', favorito: false, imagen: 'assets/icon_formulas/asc.png' },
      { id: 3, nombre: 'LEE', descripcion: 'Indice de pronostico de LEE', especialidad: 'Anestesiologia', favorito: false, imagen: "assets/icon_formulas/lee.png" },
      { id: 4, nombre: 'VTS', descripcion: 'Volumen Total Sanguinio', especialidad: 'General', favorito: false, imagen: "assets/icon_formulas/vst.png" },

    ];
  }

  cargaFav() {

    this.a = 0;
    this.formulasFav.length = 0;
    for (var i = 0; i < this.data.length; i++) { // de todas las formulas, se escogeran las favoritas
      if (this.data[i].favorito) {
        this.formulasFav[this.a] = this.data[i];
        this.a++;
      }
    }
  }

  cargaRec(formula) {
    if (this.b == 0) {
      this.formulasRec[0] = formula;
    }
    else {
      this.formulasRecTemp = [];
      this.formulasRecTemp = this.formulasRec;
      this.formulasRec.length = this.b+1;
      for (var i = 0; i <  this.b; i++) {
        this.formulasRec[i+1] = this.formulasRecTemp[i];  
      }
      this.formulasRec[0] = formula;
    }
    this.b++;


      //   else if(this.b == 1){
      //   this.formulasRecTemp = this.formulasRec;
      //   this.formulasRec[1] = this.formulasRecTemp[0];
      //   this.formulasRec[0] = formula;
      // }
      // else if(this.b == 2){
      //   this.formulasRecTemp = this.formulasRec;
      //   this.formulasRec[2] = this.formulasRecTemp[1];
      //   this.formulasRec[1] = this.formulasRecTemp[0];
      //   this.formulasRec[0] = formula;
      // }
      // else if(this.b == 3){
      //   this.formulasRecTemp = this.formulasRec;
      //   this.formulasRec[3] = this.formulasRecTemp[2];
      //   this.formulasRec[2] = this.formulasRecTemp[1];
      //   this.formulasRec[1] = this.formulasRecTemp[0];
      //   this.formulasRec[0] = formula;
      // }
  
      // else if(this.b == 4){
      //   this.formulasRecTemp = this.formulasRec;
      //   this.formulasRec[4] = this.formulasRecTemp[3];
      //   this.formulasRec[3] = this.formulasRecTemp[2];
      //   this.formulasRec[2] = this.formulasRecTemp[1];
      //   this.formulasRec[1] = this.formulasRecTemp[0];
      //   this.formulasRec[0] = formula;
      // }
  
      // else if(this.b == 5){
      //   this.formulasRecTemp = this.formulasRec;
      //   this.formulasRec[5] = this.formulasRecTemp[4];
      //   this.formulasRec[4] = this.formulasRecTemp[3];
      //   this.formulasRec[3] = this.formulasRecTemp[2];
      //   this.formulasRec[2] = this.formulasRecTemp[1];
      //   this.formulasRec[1] = this.formulasRecTemp[0];
      //   this.formulasRec[0] = formula;
      // }

  }


}