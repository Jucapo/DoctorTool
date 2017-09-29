import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Formula } from '../../providers/formulas/formula';


@Component({
  selector: 'page-formula',
  templateUrl: 'formula.html',
})
export class FormulaPage {

  public formula: Formula[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.formula = this.navParams.get('formula');
  }
  
  
  /*
  podria tener los calculos aqui y dependiendo
  
  calulo_1(){}

  calulo_2(){}

  calulo_3(){}

  */

}
