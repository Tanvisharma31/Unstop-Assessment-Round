import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';


@Injectable()
export class DataService {



  constructor(private _http: Http) { }

  // getUsers() {
  //   return this._http.get("/api/users")
  //     .map(result => this.result = result.json().data);
  // }

  confirmBookingDetails(value): Observable<any> {
        return this._http.post("/api/booking",value);
    }

}
