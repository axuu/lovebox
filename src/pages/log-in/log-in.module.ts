import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogInPage } from './log-in';

@NgModule({
  declarations: [
    LogInPage,
  ],
  imports: [
    IonicPageModule.forChild(LogInPage),
  ],
  exports: [
    LogInPage
  ]
})
export class LogInPageModule {}
