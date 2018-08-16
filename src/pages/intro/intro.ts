import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewOrNotPage } from "../new-or-not/new-or-not";
import { introSlide } from '../../model/introslide';

@IonicPage()
@Component({
	selector: 'page-intro',
	templateUrl: 'intro.html',
})
export class IntroPage {

	slides = [
		new introSlide('Treasure your love moments', 'Easily edit and store your love messages in a digital love box. ', 'assets/img/intro1.png', false),
		new introSlide('Know more about him/her', 'Each message should be “locked” with a question and the question need to be answered before reading the message. ', 'assets/img/intro2.png', true),
	];

	constructor(public navCtrl: NavController, public navParams: NavParams)	{
	}

	toNeworNotPage() {
		this.navCtrl.push(NewOrNotPage);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad IntroPage');
	}

}
