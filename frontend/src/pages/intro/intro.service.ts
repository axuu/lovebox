import { Injectable } from '@angular/core';
import { INTROSLIDES } from '../../mock/introslides';
import { IntroSlide } from '../../model/introslide'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class IntroSlideService {

	constructor() {}

	getSlides(): Observable<IntroSlide[]> {
		return of(INTROSLIDES)
	}

}
