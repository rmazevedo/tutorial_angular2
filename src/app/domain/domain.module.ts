import { NgModule }             from '@angular/core';

import { ResourceModule }       from '../resource/resource.module';

import { StoriesUseCase }   from './stories.use-case';
import { UserUseCase }      from './user.use-case';
import { CommentUseCase }   from './comment.use-case';

@NgModule({
  imports: [
    ResourceModule
  ],
  providers: [
    UserUseCase,
    CommentUseCase,
    StoriesUseCase
  ]
})

export class DomainModule {}