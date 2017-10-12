import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UsersComponent} from "./users.component";
import {NewUserComponent} from "./new-user.component";
import {UserInfoComponent} from "./user-info.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UsersComponent},
      {path: 'users/new', component: NewUserComponent},
      {path: 'users/:userId', component: UserInfoComponent}

    ])
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
