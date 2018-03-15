import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FillEmailPage } from './fill-email';

@NgModule({
  declarations: [
    FillEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(FillEmailPage),
  ],
  exports: [
    FillEmailPage
  ]
})
export class FillEmailPageModule {}
