import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './componemts/todos/todos.component';
import { TodoComponent } from './componemts/todo/todo.component';
import { TodoDetailsComponent } from './componemts/todo-details/todo-details.component';
import {TodoResolver, TodosResolver, TodosService} from "./services";


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule,
  ],
  providers: [
    TodosService,
    TodosResolver,
    TodoResolver,
  ]
})
export class TodosModule { }
