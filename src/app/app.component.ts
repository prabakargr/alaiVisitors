import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { VisitorPage } from '../pages/visitor/visitor';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage = HomePage;
  public unregisterBackButtonAction: any;
  @ViewChild(Nav) nav: Nav;
  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        this.nav.popTo(HomePage);
      })
    });
  }
  ionViewDidEnter() {
    this.initializeBackButtonCustomHandler();
  }
  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
  public initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(
      () => {
        this.customHandleBackButton();
      },
      10
    );
  }

  private customHandleBackButton(): void {
    this.nav.popTo(VisitorPage);
  }
}

