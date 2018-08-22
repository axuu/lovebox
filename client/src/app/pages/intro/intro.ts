import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewOrNotPage } from "../new-or-not/new-or-not";
import { IntroSlideService } from "./intro.service"

@IonicPage()
@Component({
	selector: 'page-intro',
	templateUrl: 'intro.html',
})
export class IntroPage implements OnInit {

	constructor (
		public navCtrl: NavController,
		public navParams: NavParams,
		private IntroSlideService: IntroSlideService
	){

	}

	// Data
	slides; // slides of intro page

	// life circle methodes
	ngOnInit() {
		this.getSlides()
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad IntroPage');
	}

	getSlides(): void {
		this.IntroSlideService.getSlides()
			.subscribe(slides => {
				if (slides.length === 0) {
					// no slides got
					this.navCtrl.setRoot(NewOrNotPage)
				} else {
					this.slides = slides
				}
			});
	}

}
