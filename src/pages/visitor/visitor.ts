import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitorListPage }from '../visitor-list/visitor-list'

/**
 * Generated class for the VisitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
  nextpage(){
    this.navCtrl.setRoot(VisitorListPage)
  }

}
