import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from "./componemts/todos/todos.component";
import {TodoResolver, TodosResolver} from "./services";
import {TodoDetailsComponent} from "./componemts/todo-details/todo-details.component";

const routes: Routes = [
  {
    path: '', component: TodosComponent,
    resolve: {todosData: TodosResolver},
    children: [
      {
        path: ':id', component: TodoDetailsComponent,
        resolve: {todoData: TodoResolver},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
