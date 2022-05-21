import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserResolver, UsersResolver} from "./services";
import {UserDetailsComponent} from "./components/user-details/user-details.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver,},
    children: [
      {
        path: ':id', component: UserDetailsComponent,
        resolve: {userData: UserResolver},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
