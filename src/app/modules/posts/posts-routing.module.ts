import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./componnets/posts/posts.component";
import {PostResolver, PostsResolver} from "./services";
import {PostDetailsComponent} from "./componnets/post-details/post-details.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children: [
      {
        path: ':id', component: PostDetailsComponent,
        resolve: {postData: PostResolver},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
