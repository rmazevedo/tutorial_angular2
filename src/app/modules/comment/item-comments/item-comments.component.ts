import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentUseCase } from '../../../domain/comment.use-case';
import { CommentModel } from '../../../models/comment.models';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})

export class ItemCommentsComponent implements OnInit {
  item: CommentModel;
  sub: any;

  constructor(
    private commentUseCase: CommentUseCase,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {    
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this.commentUseCase.fetchComment(itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + itemID));
    });
  }
}
