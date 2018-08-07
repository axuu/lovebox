import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsgContentPage } from './msg-content';

@NgModule({
  declarations: [
    MsgContentPage,
  ],
  imports: [
    IonicPageModule.forChild(MsgContentPage),
  ],
  exports: [
    MsgContentPage
  ]
})
export class MsgContentPageModule {}
