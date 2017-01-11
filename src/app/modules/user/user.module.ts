import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';

import { DomainModule } from '../../domain/domain.module';
import { ResourceModule } from '../../resource/resource.module';

import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ResourceModule,
    DomainModule
  ],
  providers: [],
  declarations: [ UserComponent ]
})
export class UserModule { }
