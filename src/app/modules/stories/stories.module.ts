import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { StoriesComponent } from './stories/stories.component';

import { StoriesResource } from '../../resource/stories.resource';
import { StoriesUseCase } from '../../domain/stories.use-case';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule],
  providers: [
      StoriesResource,
      StoriesUseCase
  ],
  declarations: [ 
      ItemComponent, 
      StoriesComponent
  ]
})
export class StoriesModule { }
