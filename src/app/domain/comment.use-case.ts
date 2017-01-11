import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CommentModel } from '../models/comment.models';
import { CommentResource } from '../resource/comments.resource';

@Injectable()
export class CommentUseCase {

    constructor(private commentResource: CommentResource){
    }

    fetchComment(id: number): Observable<CommentModel>{
        return this.commentResource.fetch(id)
            .map(response => { return response; });
    }
}   