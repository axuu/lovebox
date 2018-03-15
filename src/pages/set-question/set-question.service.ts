import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Moment } from "../../model/moment";

@Injectable()
export class SetQuestionService {
    public userRegisterURL = "http://127.0.0.1:3000/moment";

    constructor(public http:Http) {
    }

    public save(moment: Moment){
        console.log(moment);
        
        //向后台post数据的写法如下
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let data = JSON.stringify(moment);

        return this.http.post(this.userRegisterURL, data, options);
        
    }

}