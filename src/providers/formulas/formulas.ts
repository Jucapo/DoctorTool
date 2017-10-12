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

  constructor(public http: Http) {
    this.loadData();
  }

  loadData() {
    this.data = [

      //A
      {  nombre: 'ASC', descripcion: 'Area Superficie Corporal', especialidad: 'General', favorito: false, imagen: 'assets/icon_formulas/a.png' },
      {  nombre: 'APACHE II', descripcion: 'Calculo APACHE II', especialidad: 'Cirugia General', favorito: false, imagen: "assets/icon_formulas/a.png" },  
      //E
      {  nombre: 'EDAD G', descripcion: 'Calculo de Edad Gestional', especialidad: 'GinecoObstetricia', favorito: false, imagen: "assets/icon_formulas/e.png" },
      //F
      {  nombre: 'FPP', descripcion: 'Calculo de Fecha Probable de Parto', especialidad: 'GinecoObstetricia', favorito: false, imagen: "assets/icon_formulas/f.png" },
      //G
      {  nombre: 'GUPTA', descripcion: 'Calculadora de Riesgo Gupta', especialidad: 'Anestesiologia', favorito: false, imagen: "assets/icon_formulas/g.png" },
      //H
      {  nombre: 'HOLLIDAY', descripcion: 'Formula HOLLIDAY para Calculo de Lliquidos', especialidad: 'Pediatria', favorito: false, imagen: "assets/icon_formulas/h.png" }, 
      //I
      {  nombre: 'IMC', descripcion: 'Indice Masa Corporal', especialidad: 'General', favorito: false, imagen: 'assets/icon_formulas/i.png' },
      //L
      {  nombre: 'LEE', descripcion: 'Indice de pronostico de LEE', especialidad: 'Anestesiologia', favorito: false, imagen: "assets/icon_formulas/l.png" },
      //O
      {  nombre: 'OSMP', descripcion: 'Osmolaridad Plasmatica', especialidad: 'Medicina Interna', favorito: false, imagen: 'assets/icon_formulas/o.png' },
      //P
      {  nombre: 'PAC', descripcion: 'Porcentaje de Agua Corporal', especialidad: 'General', favorito: false, imagen: "assets/icon_formulas/p.png" },
      {  nombre: 'PSP', descripcion: 'Perdidas Sanguineas Permisibles', especialidad: 'Anestesiologia', favorito: false, imagen: "assets/icon_formulas/p.png" },
      {  nombre: 'PSE', descripcion: 'Ccalculo de Peso Segun la Edad', especialidad: 'Pediatria', favorito: false, imagen: "assets/icon_formulas/p.png" },
      {  nombre: 'PPT', descripcion: 'Percentiles de Peso y Talla', especialidad: 'Pediatria', favorito: false, imagen: "assets/icon_formulas/p.png" },
      //T
      {  nombre: 'TFG', descripcion: 'Tasa de Filtracion Glomerural', especialidad: 'Medicina Interna', favorito: false, imagen: "assets/icon_formulas/t.png" },     
      //V
      {  nombre: 'VST', descripcion: 'Volumen Total Sanguinio', especialidad: 'General', favorito: false, imagen: "assets/icon_formulas/v.png" },
     
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
      this.formulasRecTemp = this.formulasRec;
      for (var i = 0; i < this.b; i++) {
        this.formulasRec[this.b - i] = this.formulasRecTemp[(this.b - i) - 1];
      }
      this.formulasRec[0] = formula;
    }
    if (this.b == 6) {
      this.b++;
    }



  }


}