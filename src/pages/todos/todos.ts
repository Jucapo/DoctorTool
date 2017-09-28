import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Formula } from '../../providers/formulas/formula';
import { FormulasProvider } from '../../providers/formulas/formulas';
import { FormulaPage } from '../formula/formula';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  formulas : Formula [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public service: FormulasProvider) {
      this.formulas = service.data;
  }

  goToFormula(formula){
    this.navCtrl.push(FormulaPage, { formula: formula});
  }

}
