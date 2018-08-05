import { Injectable } from '@angular/core';
import { introSlide } from '../../model/introslide';
import { Observable, of } from 'rxjs';

@Injectable()
export class IntroSlideService {

	constructor() {}

	getSlides() {
		return [

		]
	}

	// new introSlide('Treasure your love moments', 'Easily edit and store your love messages in a digital love box. ', 'assets/img/intro1.png', false),
	// new introSlide('Know more about him/her', 'Each message should be “locked” with a question and the question need to be answered before reading the message. ', 'assets/img/intro2.png', true),

}
