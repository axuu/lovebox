import { Component } from '@angular/core';
import { NewOrNotPage } from "../../pages/new-or-not/new-or-not";
import { IonicPage, NavController } from 'ionic-angular';


@Component({
	selector: 'intro-header',
	templateUrl: './intro-header.component.html',
})
export class IntroHeaderComponent {

	constructor(
		public navCtrl: NavController,
	) {

	}

	clickSkip(): void {
		this.navCtrl.push(NewOrNotPage)
	}

}
