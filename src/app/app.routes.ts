import { Routes, RouterModule } from '@angular/router';

import { ItemCommentsComponent }  from './modules/comment/item-comments/item-comments.component';
import { UserComponent}           from './modules/user/user/user.component';
import { StoriesComponent }      from './modules/stories/stories/stories.component';

const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch : 'full'}, 
  {path: 'news',    component: StoriesComponent},
  {path: 'item/:id', component: ItemCommentsComponent},
  {path: 'user/:id', component: UserComponent}
];

export const routing = RouterModule.forRoot(routes);