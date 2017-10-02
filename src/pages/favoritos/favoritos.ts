import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Formula } from '../../providers/formulas/formula';

//_________________________SERVICIOS__________________________________
import { FormulasProvider } from '../../providers/formulas/formulas';

//_________________________FORMULAS__________________________________
// import { ImcPage } from '../formulas/imc/imc';
// import { OsmolaridadPage } from '../formulas/osmolaridad/osmolaridad';
// import { AscPage } from '../formulas/asc/asc';
// import { VstPage } from '../formulas/vst/vst';
// import { LeePage } from '../formulas/lee/lee';


@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  formulas: Formula[] = [];
  formulasFav: Formula[] = [];
  a=0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: FormulasProvider) {
      
    this.formulas = service.data;

    for (var i = 0; i < this.formulas.length; i++) {
      if (this.formulas[i].favorito) {
        this.formulasFav[this.a] = this.formulas[i];
        this.a++;
      }
    }
    
  
  }

  





}
