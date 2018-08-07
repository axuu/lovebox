import { Component } from '@angular/core';
// import { NewOrNotPage } from "../new-or-not/new-or-not";
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

	toNeworNotPage() {
		console.log('11')
		this.navCtrl.pop();
	}

}
