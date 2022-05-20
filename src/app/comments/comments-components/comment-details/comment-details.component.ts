import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICommentDetails} from "../../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.commentDetails = data;
    })
  }

}
