import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';
import { IntroHeaderComponent } from '../../components/intro-header/intro-header.component';
import { IntroSlideService } from "./intro.service"

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
	],
	entryComponents: [
		IntroHeaderComponent,
	],
	providers: [
		IntroSlideService,
	]
})
export class IntroPageModule {}
