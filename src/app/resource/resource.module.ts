import { NgModule }             from '@angular/core';

import { CommentResource }  from './comments.resource';
import { StoriesResource }  from './stories.resource';
import { UserResource }  from './user.resource';

@NgModule({
  imports: [
  ],
  providers: [
    CommentResource,
    StoriesResource,
    UserResource
  ]
})

export class ResourceModule {}