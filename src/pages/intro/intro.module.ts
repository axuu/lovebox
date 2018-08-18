import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';
import { IntroHeaderComponent } from '../../components/intro-header/intro-header.component';

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
		// IntroHeaderComponent,
	],
	entryComponents: [
		IntroHeaderComponent,
	],
})
export class IntroPageModule {}
