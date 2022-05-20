import {Component, Input, OnInit} from '@angular/core';

import {ITodos} from "../../../interfaces";
import {TodosService} from "../../todos-services/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodos[];

  constructor(private _todosService: TodosService) { }

  ngOnInit(): void {
    this._todosService.getAll().subscribe(value => this.todos = value);
  }

}
