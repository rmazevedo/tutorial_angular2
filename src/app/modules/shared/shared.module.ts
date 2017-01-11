import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';

import { ResourceModule } from '../../resource/resource.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ResourceModule
  ],
  providers: [],
  declarations: []
})
export class SharedModule { }
