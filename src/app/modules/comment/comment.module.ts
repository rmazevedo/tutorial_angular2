import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';

import { ResourceModule } from '../../resource/resource.module';
import { CommentUseCase } from '../../domain/comment.use-case';

import { ItemCommentsComponent }  from './item-comments/item-comments.component';
import { CommentTreeComponent }   from './comment-tree/comment-tree.component';
import { CommentComponent }       from './comment/comment.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ResourceModule],

  providers: [],
  
  declarations: [
    ItemCommentsComponent, 
    CommentTreeComponent, 
    CommentComponent]
})
export class CommentModule { }
