import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BASE_URL } from './constants';

@Injectable()
export class StoriesResource {

  constructor(private http: Http) {
  }

  fetch(): Observable<any> {
    return this.http.get(`${BASE_URL}/news`)
                    .map(response => response.json());
  }
}