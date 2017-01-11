import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StoriesModel }   from '../../../models/stories.models';
import { StoriesUseCase } from '../../../domain/stories.use-case';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: StoriesModel; 
  sub: any;
  
  constructor(
    private storiesUseCase: StoriesUseCase,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.storiesUseCase.fetchStories()
                              .subscribe(
                                items => this.items = items,
                                error => console.log('Error fetching stories'));
    });  
  }

}
