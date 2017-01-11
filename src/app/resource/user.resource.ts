import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BASE_URL } from './constants';

@Injectable()
export class UserResource {

  constructor(private http: Http) {
  }

  fetch(id: string): Observable<any> {
    return this.http.get(`${BASE_URL}/user/${id}`)
                    .map(response => response.json());
  }
}