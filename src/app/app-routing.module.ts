import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActionComponent } from './component/user-action/user-action.component';
import { FavoriteComponent } from './component/favorite/favorite.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'userAction', pathMatch: 'full'
  },
  {
    path: 'userAction', component: UserActionComponent
  },
  {
    path: 'favorite', component: FavoriteComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}
