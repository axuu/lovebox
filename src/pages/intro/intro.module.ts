import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';
import { IntroHeaderComponent } from './intro-header/intro-header.component';

@NgModule({
	declarations: [
		IntroPage,
		IntroHeaderComponent,
	],
	imports: [
		IonicPageModule.forChild(IntroPage),
	],
	exports: [
		IntroPage,
		IntroHeaderComponent,
	]
})
export class IntroPageModule {}
