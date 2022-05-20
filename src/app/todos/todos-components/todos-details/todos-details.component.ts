import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ITodosDetails} from "../../../interfaces";
import {TodosService} from "../../todos-services/todos.service";

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent implements OnInit {

  todosDetails: ITodosDetails;

  constructor(
    private _todosService: TodosService,
    private _activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(({id}) => {
      this._todosService.getOne(id).subscribe(value => this.todosDetails = value)
    })
  }

}
