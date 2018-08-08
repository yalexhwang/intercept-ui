import { Injectable } from '@angular/core';
import { Http, Response }from '@angular/http';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AjaxService {
    
    constructor(private http: Http) {}
    
    backendUrl = "https://cryptic-fjord-75697.herokuapp.com";
    
    getQuestions() : Observable<any> {
        return this.http.get(this.backendUrl + '/survey').map((res) => res.json());
    }

    getRelevantOrganizations(userData) : Observable<any> {
        return this.http.post(this.backendUrl + "/record", userData).map((res) => res.json());
    }
}