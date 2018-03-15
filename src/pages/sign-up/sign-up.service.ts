import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../../model/user';

@Injectable()
export class UserRegisterService {
    public userRegisterURL = "http://127.0.0.1:3000/users";
    public testEmailURL = "";
    public subject: Subject<User> = new Subject<User>();

    constructor(public http:Http) {
    }

    public get currentUser():Observable<User>{
        return this.subject.asObservable();
    }

    public register(user: User){
        console.log(user);
        
        //向后台post数据的写法如下
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let data = JSON.stringify(user);

        return this.http.post(this.userRegisterURL, data, options);
        
        // return this.http
        //             .get(this.userRegisterURL)
        //             .map((response: Response) => {
        //                 let user = response.json();
        //                 localStorage.setItem("currentUser",JSON.stringify(user));
        //                 this.subject.next(user);    
        //             });
    }

    public testEmail(email:string){
        // return this.http.get(this.testEmailURL)
        //     .map((response: Response) => response.json());
    }
}