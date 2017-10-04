import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { EspecialidadPage } from '../especialidad/especialidad';
import { ProcesosPage } from '../procesos/procesos';
import { RecientesPage } from '../recientes/recientes';
import { TodosPage } from '../todos/todos';

//_________________________SERVICIOS__________________________________
import { FormulasProvider } from '../../providers/formulas/formulas';

@Component({
  selector: 'page-menu-opciones',
  templateUrl: 'menu-opciones.html',
})
export class MenuOpcionesPage {

  favoritosRoot    = FavoritosPage;
  procesosRoot     = ProcesosPage;
  especialidadRoot = EspecialidadPage;
  recientesRoot    = RecientesPage;
  todosRoot        = TodosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: FormulasProvider) {
  }


}
