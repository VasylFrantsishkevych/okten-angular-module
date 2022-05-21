import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './componnets/posts/posts.component';
import {PostComponent} from './componnets/post/post.component';
import {PostDetailsComponent} from './componnets/post-details/post-details.component';
import {PostResolver, PostService, PostsResolver} from "./services";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PostService,
    PostsResolver,
    PostResolver,
  ]
})
export class PostsModule {
}
