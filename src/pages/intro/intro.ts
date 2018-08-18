import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewOrNotPage } from "../new-or-not/new-or-not";
import { IntroSlideService } from "./intro.service"

@IonicPage()
@Component({
	selector: 'page-intro',
	templateUrl: 'intro.html',
})
export class IntroPage implements OnInit {

	constructor(public navCtrl: NavController, public navParams: NavParams, private IntroSlideService: IntroSlideService)	{
	}

	slides;

	toNeworNotPage() {
		this.navCtrl.push(NewOrNotPage);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad IntroPage');
	}

	getSlides(): void {
		this.slides = this.IntroSlideService.getSlides();
	}

	ngOnInit() {
		this.getSlides()
	}

}
