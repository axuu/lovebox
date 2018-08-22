import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewOrNotPage } from './new-or-not';

@NgModule({
  declarations: [
    NewOrNotPage,
  ],
  imports: [
    IonicPageModule.forChild(NewOrNotPage),
  ],
  exports: [
    NewOrNotPage
  ]
})
export class NewOrNotPageModule {}
