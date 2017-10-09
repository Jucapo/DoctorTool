import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//_________________________SERVICIOS__________________________________
import { Formula } from '../../providers/formulas/formula';
import { FormulasProvider } from '../../providers/formulas/formulas';

//_________________________FORMULAS__________________________________
import { ImcPage } from '../formulas/imc/imc';
import { OsmolaridadPage } from '../formulas/osmolaridad/osmolaridad';
import { AscPage } from '../formulas/asc/asc';
import { VstPage } from '../formulas/vst/vst';
import { LeePage } from '../formulas/lee/lee';


@Component({
  selector: 'page-recientes',
  templateUrl: 'recientes.html',
})
export class RecientesPage {

  formulasRec: Formula[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: FormulasProvider) {    
      this.formulasRec = this.service.formulasRec;
      
  }

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
