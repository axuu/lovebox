import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterProfilePage } from './register-profile';

@NgModule({
  declarations: [
    RegisterProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterProfilePage),
  ],
  exports: [
    RegisterProfilePage
  ]
})
export class RegisterProfilePageModule {}
