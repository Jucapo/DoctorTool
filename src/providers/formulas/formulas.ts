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
      { id:1, nombre: 'Osmolaridad', descripcion: 'Osmolaridad plasmatica', especialidad:'General', favorito: 1, imagen:"../../assets/formulas/osmolaridad.png" },
      { id:2, nombre: 'IMC', descripcion: 'Indice Masa Corporal', especialidad:'General', favorito: 1, imagen:"../../assets/formulas/imc.png" }, 
      { id:3, nombre: 'SCP', descripcion: 'Superficie Corporal Total', especialidad:'General', favorito: 1, imagen:"../../assets/formulas/sct.png" },
    ];
  }

}
