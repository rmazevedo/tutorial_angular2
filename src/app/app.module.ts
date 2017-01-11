import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { CommentModule }  from './modules/comment/comment.module';
import { SharedModule }   from './modules/shared/shared.module';
import { UserModule }     from './modules/user/user.module';
import { StoriesModule }  from './modules/stories/stories.module';

import { AppComponent }   from './app.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HeaderComponent } from './modules/shared/header/header.component';

import { routing } from './app.routes';

@NgModule({
  imports: [
    routing,
    SharedModule,
    CommentModule,
    StoriesModule,
    UserModule
  ],
  declarations: [
    AppComponent,
    FooterComponent, 
    HeaderComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
