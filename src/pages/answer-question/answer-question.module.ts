import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnswerQuestionPage } from './answer-question';

@NgModule({
  declarations: [
    AnswerQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(AnswerQuestionPage),
  ],
  exports: [
    AnswerQuestionPage
  ]
})
export class AnswerQuestionPageModule {}
