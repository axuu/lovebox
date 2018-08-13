import { Component, OnInit } from '@angular/core';
import { IonicModule, NavParams } from '@ionic/angular';
// import { NewOrNotPage } from "../new-or-not/new-or-not";
import { IntroSlideService } from "./intro.service"

@Component({
	selector: 'page-intro',
	templateUrl: 'intro.html',
	styleUrls: ['intro.scss'],
})
export class IntroPage implements OnInit {

	constructor (
		// public navParams: NavParams,
		private IntroSlideService: IntroSlideService
	){

	}

	// Data
	// slides of intro page
	slides = [
		{
			"title": "Treasure your love moments",
			"subtitle": "Easily edit and store your love messages in a digital love box.",
			"imgSrc": "/assets/img/intro1.png",
		},
		{
			"title": "Know more about him/her",
			"subtitle": "Each message should be “locked” with a question and the question need to be answered before reading the message.",
			"imgSrc": "/assets/img/intro2.png",
		}
	]

	// add button and skip to the last slide
	addStartBtn(arr):void {
		arr[arr.length - 1].isShowBtn = true
	}

	// life circle methodes
	ngOnInit() {
		// this.getSlides()
		this.addStartBtn(this.slides)
	}

	getSlides(): void {
		this.IntroSlideService.getSlides()
			.subscribe(slides => {
				if (slides.length === 0) {
					// no slides got
					// this.navCtrl.setRoot(NewOrNotPage)
				} else {
					this.slides = slides
				}
			});
	}

}
