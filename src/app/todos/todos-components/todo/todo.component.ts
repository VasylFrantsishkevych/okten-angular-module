import {Component, Input, OnInit} from '@angular/core';

import {ITodos} from "../../../interfaces";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodos;

  constructor() { }

  ngOnInit(): void {
  }

}
