import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { Moment } from "../../model/moment";

@Injectable()
export class HomeService {
  public momentdbURL = 'http://127.0.0.1:3000/moment';
  public subject: Subject<Moment> = new Subject<Moment>();

  constructor(public http: Http) {

  }

  // public getmoments(): Promise<Moment[]> {
  //   return this.http.get(this.momentdbURL)
  //     .toPromise()
  //     .then(response => response.json() as Moment[])
  //     .catch(this.handleError)
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('Get moments error', error);
  //   return Promise.reject(error.message || error);
  // }

}
