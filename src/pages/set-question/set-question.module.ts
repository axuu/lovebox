import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetQuestionPage } from './set-question';

@NgModule({
  declarations: [
    SetQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(SetQuestionPage),
  ],
  exports: [
    SetQuestionPage
  ]
})
export class SetQuestionPageModule {}
