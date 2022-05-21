import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentResolver, CommentsResolver} from "./services";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    children: [
      {
        path: ':id', component: CommentDetailsComponent,
        resolve: {commentData: CommentResolver},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
