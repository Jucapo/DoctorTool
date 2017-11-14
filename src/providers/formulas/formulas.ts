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
  formulasEspecialidad: Formula[] = [];
  a = 0;
  b = 0;
  porcentaje = 0;
  inversion = 0;
  compound = 0;
  temp=0;
  x=0;

  constructor(public http: Http) {
    this.loadData();
  }

  loadData() {
    this.data = [

      //A
      { id: 0, nombre: 'ASC', descripcion: 'Area Superficie Corporal', especialidad: 'General', favorito: false, imagen: 'assets/icon_formulas/a.png' },
      { id: 1, nombre: 'APACHE II', descripcion: 'Calculo APACHE II', especialidad: 'Cirugia General', favorito: false, imagen: "assets/icon_formulas/a.png" },
      //E
      { id: 2, nombre: 'EDAD G', descripcion: 'Calculo de Edad Gestional', especialidad: 'GinecoObstetricia', favorito: false, imagen: "assets/icon_formulas/e.png" },
      //F
      { id: 3, nombre: 'FPP', descripcion: 'Calculo de Fecha Probable de Parto', especialidad: 'GinecoObstetricia', favorito: false, imagen: "assets/icon_formulas/f.png" },
      //G
      { id: 4, nombre: 'GUPTA', descripcion: 'Riesgo Cardiaco Preoperatorio', especialidad: 'Anestesiologia', favorito: false, imagen: "assets/icon_formulas/g.png" },
      //H
      { id: 5, nombre: 'HOLLIDAY', descripcion: 'Calculo de Liquidos', especialidad: 'Pediatria', favorito: false, imagen: "assets/icon_formulas/h.png" },
      //I
      { id: 6, nombre: 'IMC', descripcion: 'Indice Masa Corporal', especialidad: 'General', favorito: false, imagen: 'assets/icon_formulas/i.png' },
      //L
      { id: 7, nombre: 'LEE', descripcion: 'Indice de pronostico de LEE', especialidad: 'Anestesiologia', favorito: false, imagen: "assets/icon_formulas/l.png" },
      //O
      { id: 8, nombre: 'OSMP', descripcion: 'Osmolaridad Plasmatica', especialidad: 'Medicina Interna', favorito: false, imagen: 'assets/icon_formulas/o.png' },
      //P
      { id: 9, nombre: 'PAC', descripcion: 'Porcentaje de Agua Corporal', especialidad: 'General', favorito: false, imagen: "assets/icon_formulas/p.png" },
      { id: 10, nombre: 'PSP', descripcion: 'Perdidas Sanguineas Permisibles', especialidad: 'Anestesiologia', favorito: false, imagen: "assets/icon_formulas/p.png" },
      { id: 11, nombre: 'PSE', descripcion: 'Ccalculo de Peso Segun la Edad', especialidad: 'Pediatria', favorito: false, imagen: "assets/icon_formulas/p.png" },
      { id: 12, nombre: 'PPT', descripcion: 'Percentiles de Peso y Talla', especialidad: 'Pediatria', favorito: false, imagen: "assets/icon_formulas/p.png" },
      //T
      { id: 13, nombre: 'TFG', descripcion: 'Tasa de Filtracion Glomerural', especialidad: 'Medicina Interna', favorito: false, imagen: "assets/icon_formulas/t.png" },
      //V
      { id: 14, nombre: 'VST', descripcion: 'Volumen Total Sanguinio', especialidad: 'General', favorito: false, imagen: "assets/icon_formulas/v.png" },
    ];
  }

  cargaFav() {
    this.a = 0;
    this.formulasFav.length = 0;
    for (var i = 0; i < this.data.length; i++) { 
      if (this.data[i].favorito) {
        this.formulasFav[this.a] = this.data[i];
        this.a++;
      }
    }
  }

  cargaEspecialidad(especialidad:string) {
    this.a = 0;
    this.formulasFav.length = 0;
    for (var i = 0; i < this.data.length; i++) { 
      if (this.data[i].especialidad == especialidad) {
        this.formulasEspecialidad[this.a] = this.data[i];
        this.a++;
      }
    }

    // this.data.filter(it => it.especialidad == especialidad)
    //   .forEach(it => this.formulasEspecialidad.push(it)); 
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
    if (this.b <= 4) {
      this.b++;
    }

  }

  calculo(p: number, inv: number, c: number) {
      
    this.porcentaje = p;
    this.inversion = inv;
    this.compound = c
    let total = 0;

    for (var i = 0; i < this.compound; i++) {  
      if (i  == 0) {
        this.temp = this.inversion;
      } 
      else {
        total = ((this.temp*this.porcentaje)/100)+this.temp;
        this.temp = total; 
      }        
    }
  return total;
  }


}