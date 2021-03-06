import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Formula } from '../../providers/formulas/formula';
//import { FavoritosPage } from '../favoritos/favoritos';

//_________________________SERVICIOS__________________________________
import { FormulasProvider } from '../../providers/formulas/formulas';

//_________________________FORMULAS__________________________________
import { OsmpPage } from '../formulas/osmp/osmp';
import { ImcPage } from '../formulas/imc/imc';
import { AscPage } from '../formulas/asc/asc';
import { LeePage } from '../formulas/lee/lee';
import { VstPage } from '../formulas/vst/vst';
import { Apache2Page } from '../formulas/apache2/apache2';
import { EdadGPage } from '../formulas/edad-g/edad-g';
import { FppPage } from '../formulas/fpp/fpp';
import { GuptaPage } from '../formulas/gupta/gupta';
import { HollidayPage } from '../formulas/holliday/holliday';
import { PacPage } from '../formulas/pac/pac';
import { PptPage } from '../formulas/ppt/ppt';
import { PsePage } from '../formulas/pse/pse';
import { PspPage } from '../formulas/psp/psp';
import { TfgPage } from '../formulas/tfg/tfg';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  formulas: Formula[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: FormulasProvider) {
    this.formulas = service.data;

  }

  //_______________________ Añadir Formula a Favoritos ____________________________

  addFavorito(formula) {
    this.service.data[formula.id].favorito = !this.service.data[formula.id].favorito;
    this.service.cargaFav();
  }

  //_________________ Me lleva  a formula seleccionada _______________________
  goToFormula(formula) {
    this.service.cargaRec(formula);
    switch (formula.nombre) {
      case "IMC": this.navCtrl.push(ImcPage, (formula = formula)); break;   
      case "ASC": this.navCtrl.push(AscPage, (formula = formula)); break;
      case "VST": this.navCtrl.push(VstPage, (formula = formula)); break;      
      case "PAC": this.navCtrl.push(PacPage, (formula = formula)); break;
      case "APACHE II": this.navCtrl.push(Apache2Page, (formula = formula)); break;
      case "LEE": this.navCtrl.push(LeePage, (formula = formula)); break;
      case "GUPTA": this.navCtrl.push(GuptaPage, (formula = formula)); break;
      case "PSP": this.navCtrl.push(PspPage,(formula = formula)); break;
      case "EDAD G": this.navCtrl.push(EdadGPage, (formula = formula)); break;
      case "FPP": this.navCtrl.push(FppPage, (formula = formula)); break;
      case "OSMP": this.navCtrl.push(OsmpPage, (formula = formula)); break;
      case "TFG": this.navCtrl.push(TfgPage, (formula = formula)); break;
      case "HOLLIDAY": this.navCtrl.push(HollidayPage, (formula = formula)); break;
      case "PSE": this.navCtrl.push(PsePage, (formula = formula)); break;
      case "PPT": this.navCtrl.push(PptPage, (formula = formula)); break;
    }
  }

}
