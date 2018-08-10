import { Injectable } from '@angular/core';
import { IntroSlide } from '../../model/introslide'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class IntroSlideService {

	constructor(
		private http: HttpClient,
	) {}

	private slidesUrl = 'http://localhost:3000/introslides';  // URL to web api

	getSlides(): Observable<IntroSlide[]> {
		return this.http.get<IntroSlide[]>(this.slidesUrl)
			// .pipe(
			// 	catchError(this.handleError('getSlides', []))
			// );
	}

	// private handleError<T> (operation = 'operation', result?: T) {
	// 	return (error: any): Observable<T> => {

	// 	  // TODO: send the error to remote logging infrastructure
	// 	  console.error(error); // log to console instead

	// 	  // TODO: better job of transforming error for user consumption
	// 	  //this.log(`${operation} failed: ${error.message}`);

	// 	  // Let the app keep running by returning an empty result.
	// 	  return of(result as T);
	// 	};
	//   }


}
