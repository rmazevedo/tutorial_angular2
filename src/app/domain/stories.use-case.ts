import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { StoriesModel }     from '../models/stories.models';
import { StoriesResource }  from '../resource/stories.resource';

@Injectable()
export class StoriesUseCase {

    constructor(private storiesResource: StoriesResource){
    }

    fetchStories(): Observable<StoriesModel>{
        return this.storiesResource.fetch()
            .map(response => { return response; });
    }
}   