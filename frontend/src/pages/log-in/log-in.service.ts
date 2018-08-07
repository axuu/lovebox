import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../../model/user';

@Injectable()
export class UserLoginService {
  public userLoginURL = 'http://127.0.0.1:3000/users';
  public subject: Subject<User> = new Subject<User>();
  
  constructor(public http:Http){

  }

  public get currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  // public login(user:User){
  //   return this.http
  //           .get(this.userLoginURL)
  //           .map((response: Response) => {
  //             let user = response.json();
  //             console.log("user object>"+user);
  //             if(user && user.password){
  //               localStorage.setItem("currentUser",JSON.stringify(user));
  //               console.log("whats this");                
  //               this.subject.next(Object.assign({},user));
  //             }
  //             return response;
  //           })
  //           .subscribe(
  //               data => {
  //                   console.log("login success>"+data);
  //               },
  //               error => {
  //                   console.error(error);
  //               }
  //           );
  // }

  public logout():void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
