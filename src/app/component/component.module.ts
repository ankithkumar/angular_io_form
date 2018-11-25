import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserActionComponent } from './user-action/user-action.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    UserActionComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
