import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitorPage } from '../visitor/visitor';
@Component({
  selector: 'page-visitor-list',
  templateUrl: 'visitor-list.html',
})
export class VisitorListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorListPage');
  }

}
