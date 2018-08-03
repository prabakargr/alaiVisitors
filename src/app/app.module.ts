import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisitorPage } from '../pages/visitor/visitor'
import { VisitorListPage } from '../pages/visitor-list/visitor-list'
import {VisitorRegistrationPage} from '../pages/visitor-registration/visitor-registration';
import {CommunicationPage} from '../pages/communication/communication';
import {CommunicationVideoPage} from '../pages/communication-video/communication-video';
import {UnregisteredPage} from '../pages/unregistered/unregistered';
import {RegisteredPage} from '../pages/registered/registered';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisitorPage,
    VisitorListPage,
    VisitorRegistrationPage,
    CommunicationPage,
    CommunicationVideoPage,
    UnregisteredPage,
    RegisteredPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisitorPage,
    VisitorListPage,
    VisitorRegistrationPage,
    CommunicationPage,
    CommunicationVideoPage,
    UnregisteredPage,
    RegisteredPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
