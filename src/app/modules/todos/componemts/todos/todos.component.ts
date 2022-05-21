import { Component, OnInit } from '@angular/core';
import {ITodos} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodos[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({todosData}) => this.todos = todosData);
  }

}
