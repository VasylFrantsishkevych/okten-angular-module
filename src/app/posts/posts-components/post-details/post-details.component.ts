import {ActivatedRoute} from "@angular/router";

import { Component, OnInit } from '@angular/core';
import {IPostDetails} from "../../../interfaces";
import {PostService} from "../../posts-services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(
    private postService: PostService,
    private activateRout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRout.params.subscribe(({id}) => {
      this.postService.getOne(id).subscribe(value => this.postDetails = value);
    })
  }

}
