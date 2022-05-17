import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPostDetails} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.postDetails = data;
    })
  }

}
