import { Component, OnInit } from '@angular/core';
import {IPostDetails} from "../../../interfaces";
import {PostService} from "../../posts-services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(
    private _postService: PostService,
    private _activateRout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activateRout.params.subscribe(({id}) => {
      this._postService.getOne(id).subscribe(value => this.postDetails = value);
    })
  }

}
