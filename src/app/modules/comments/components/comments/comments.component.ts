import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComments} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComments[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentsData}) => this.comments = commentsData);
  }

}
