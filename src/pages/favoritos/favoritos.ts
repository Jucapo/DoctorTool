import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Formula } from '../../providers/formulas/formula';

//_________________________SERVICIOS__________________________________
import { FormulasProvider } from '../../providers/formulas/formulas';

//_________________________FORMULAS__________________________________
import { ImcPage } from '../formulas/imc/imc';
import { OsmolaridadPage } from '../formulas/osmolaridad/osmolaridad';
import { AscPage } from '../formulas/asc/asc';
import { VstPage } from '../formulas/vst/vst';
import { LeePage } from '../formulas/lee/lee';


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
      
    this.formulas = service.data; // todas las formulas
    for (var i = 0; i < this.formulas.length; i++) { // de todas las formulas, se escogeran las favoritas
      if (this.formulas[i].favorito) {
        this.formulasFav[this.a] = this.formulas[i]; 
        this.a++;
      }
    }  
  }

//_______________________ Quitar Formula a Favoritos ____________________________

  addFavorito(formula){
    this.service.data[formula.id].favorito = !this.service.data[formula.id].favorito ; 
  }


  //_________________ Me lleva  a formula seleccionada _______________________
  goToFormula(formula) {
    switch (formula.id) {
      case 0: this.navCtrl.push(OsmolaridadPage, (formula = formula)); break;
      case 1: this.navCtrl.push(ImcPage, (formula = formula)); break;
      case 2: this.navCtrl.push(AscPage, (formula = formula)); break;
      case 3: this.navCtrl.push(LeePage, (formula = formula)); break;
      case 4: this.navCtrl.push(VstPage, (formula = formula)); break;
    }
  }

  
}
