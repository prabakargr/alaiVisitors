import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorRegistrationPage } from './visitor-registration';

@NgModule({
  declarations: [
    VisitorRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorRegistrationPage),
  ],
})
export class VisitorRegistrationPageModule {}
