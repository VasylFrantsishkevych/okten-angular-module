import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./app-components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren:() => import('./modules').then(value => value.UsersModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
