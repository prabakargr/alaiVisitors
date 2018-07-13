import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { VisitorPage } from '../visitor/visitor';
import { VisitorListPage } from '../visitor-list/visitor-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rootPage: any;
  @ViewChild(Nav) nav: Nav;
    constructor() {}
  openPage(page){
    switch (page) {
      case 'home': 
       this.nav.setRoot(VisitorPage);
       break;
      case 'list':
        this.nav.setRoot(VisitorListPage);
        break;
        
      default:
        this.nav.setRoot(VisitorPage);
        break;
    }
  }
 ionViewDidLoad() {
  this.rootPage = VisitorPage;
 }
}
