import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IntroPage } from './intro';
import { IntroHeaderComponent } from '../../components/intro-header/intro-header.component';
import { IntroSlideService } from "./intro.service"
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [
		IntroPage,
		IntroHeaderComponent,
	],
	imports: [
		HttpClientModule,
		HttpModule,
		CommonModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: IntroPage
			}
		])
	],
	entryComponents: [
		IntroHeaderComponent,
	],
	providers: [
		IntroSlideService,
	]
})
export class IntroPageModule {}
