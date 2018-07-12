import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VisitorPage} from '../visitor/visitor'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage:any 
    constructor(public navCtrl: NavController) {
         
        }
  openPage(page){
    switch (page) {
      case 'home': 
      this.navCtrl.setRoot(VisitorPage);
      break;
    }
  }
 ionViewDidLoad() {
  this.rootPage = VisitorPage;
 }
}
