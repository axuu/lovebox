import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewOrNotPage } from './new-or-not';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewOrNotPage,
  ],
  imports: [
	RouterModule,
    IonicPageModule.forChild(NewOrNotPage),
  ],
  exports: [
    NewOrNotPage
  ]
})
export class NewOrNotPageModule {}
