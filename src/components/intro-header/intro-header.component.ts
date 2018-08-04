import { Component } from '@angular/core';


@Component({
	selector: 'intro-header',
	templateUrl: './intro-header.component.html',
})
export class IntroHeaderComponent {

	constructor() {}

	toNeworNotPage() {
		this.navCtrl.push(NewOrNotPage);
	}

}
