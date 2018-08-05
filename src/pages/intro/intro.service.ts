import { Injectable } from '@angular/core';
import { INTROSLIDES } from '../../model/introslides';
import { introSlide } from '../../model/introslide'
import { Observable, of } from 'rxjs';

@Injectable()
export class IntroSlideService {

	constructor() {}

	getSlides(): Observable<introSlide[]> {
		return of(INTROSLIDES)
	}

}
