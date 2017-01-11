import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserModel }     from '../models/user.models';
import { UserResource }  from '../resource/user.resource';

@Injectable()
export class UserUseCase {

    constructor(private userResource: UserResource){
    }

    fetchUser(id: string): Observable<UserModel>{
        return this.userResource.fetch(id)
            .map(response => { return response; });
    }
}   