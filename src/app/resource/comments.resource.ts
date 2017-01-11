import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BASE_URL } from './constants';

@Injectable()
export class CommentResource {

  constructor(private http: Http) {
  }

  fetch(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/item/${id}`)
                    .map(response => response.json());
  }
}