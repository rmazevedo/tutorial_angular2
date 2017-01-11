import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserResource } from '../../resource/user.resource';
import { UserUseCase } from '../../domain/user.use-case';

import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule],
  providers: [ 
      UserResource,
      UserUseCase
    ],
  declarations: [ UserComponent ]
})
export class UserModule { }
