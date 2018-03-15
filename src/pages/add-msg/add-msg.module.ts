import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMsgPage } from './add-msg';

@NgModule({
  declarations: [
    AddMsgPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMsgPage),
  ],
  exports: [
    AddMsgPage
  ]
})
export class AddMsgPageModule {}
