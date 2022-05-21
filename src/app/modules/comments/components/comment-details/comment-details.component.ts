import { Component, OnInit } from '@angular/core';
import {IComments} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentsDetail: IComments;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData}) => this.commentsDetail = commentData);
  }

}
