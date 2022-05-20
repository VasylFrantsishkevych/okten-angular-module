import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "./comments-services/comment.service";
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule,
  ],
  providers: [CommentService]
})
export class CommentsModule { }
