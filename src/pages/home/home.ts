import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { VisitorPage } from '../visitor/visitor';
import { VisitorListPage } from '../visitor-list/visitor-list';
import {VisitorRegistrationPage} from '../visitor-registration/visitor-registration';
import {CommunicationPage} from '../communication/communication';
import {CommunicationVideoPage} from '../communication-video/communication-video'
import {UnregisteredPage} from '../unregistered/unregistered';
import {RegisteredPage} from '../registered/registered';

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
      case 'register':
         this.nav.setRoot(VisitorRegistrationPage);
         break;
      case 'communication':
         this.nav.setRoot(CommunicationPage); 
         break;
      case 'communicationVideo':
         this.nav.setRoot(CommunicationVideoPage); 
         break;
      case 'unregistered':
         this.nav.setRoot(UnregisteredPage)
         break 
      case 'registered':
         this.nav.setRoot(RegisteredPage)
         break         
         
      default:
        this.nav.setRoot(VisitorPage);
        break;
    }
  }
 ionViewDidLoad() {
  this.rootPage = VisitorPage;
 }
}
