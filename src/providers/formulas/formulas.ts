import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Formula } from './formula';


@Injectable()
export class FormulasProvider {

  data:Formula[];

  constructor(public http: Http) {
    this.loadData();
  }

  loadData(){
    this.data = [
      { id:0, nombre: 'OSMP', descripcion: 'Osmolaridad Plasmatica', especialidad:'General', favorito: true, imagen:'assets/icon_formulas/osmp.png' },
      { id:1, nombre: 'IMC', descripcion: 'Indice Masa Corporal', especialidad:'General', favorito: false, imagen:'assets/icon_formulas/imc.png' }, 
      { id:2, nombre: 'ASC', descripcion: 'Area Superficie Corporal', especialidad:'General', favorito: false, imagen:'assets/icon_formulas/asc.png' },
      { id:3, nombre: 'LEE', descripcion: 'Indice de pronostico de LEE', especialidad:'Anestesiologia', favorito: false, imagen:"assets/icon_formulas/lee.png" },
      { id:4, nombre: 'VTS', descripcion: 'Volumen Total Sanguinio', especialidad:'General', favorito: true, imagen:"assets/icon_formulas/vst.png" },
      
    ];
  }

}
