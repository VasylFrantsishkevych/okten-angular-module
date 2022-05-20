import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos-components/todos/todos.component';
import { TodoComponent } from './todos-components/todo/todo.component';
import {TodosService} from "./todos-services/todos.service";
import { TodosDetailsComponent } from './todos-components/todos-details/todos-details.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodosDetailsComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule,
  ],
  providers: [TodosService]
})
export class TodosModule { }
