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
      { id:0, nombre: 'OSMP', descripcion: 'Osmolaridad Plasmatica', especialidad:'General', favorito: true, imagen:"https://image.ibb.co/ew0X8w/osmp.png" },
      { id:1, nombre: 'IMC', descripcion: 'Indice Masa Corporal', especialidad:'General', favorito: false, imagen:"https://image.ibb.co/jZyKow/imc.png" }, 
      { id:2, nombre: 'ASC', descripcion: 'Area Superficie Corporal', especialidad:'General', favorito: false, imagen:"https://image.ibb.co/d7Ps8w/asc.png" },
      { id:3, nombre: 'LEE', descripcion: 'Indice de pronostico de LEE', especialidad:'Anestesiologia', favorito: false, imagen:"https://image.ibb.co/bMvzow/lee.png" },
      { id:4, nombre: 'VTS', descripcion: 'Volumen Total Sanguinio', especialidad:'General', favorito: true, imagen:"https://image.ibb.co/dZdxab/vst.png" },
      
    ];
  }

}
