import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from "./todos-components/todos/todos.component";
import {TodosDetailsComponent} from "./todos-components/todos-details/todos-details.component";

const routes: Routes = [
  {path: '',
    component: TodosComponent,
    children: [
      {path: ':id', component: TodosDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
