import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitorListPage }from '../visitor-list/visitor-list'

@Component({
  selector: 'page-visitor',
  templateUrl: 'visitor.html',
})
export class  VisitorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorPage');
  }

}
