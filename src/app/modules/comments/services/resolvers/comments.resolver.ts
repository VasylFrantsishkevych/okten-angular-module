import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IComments} from "../../interfaces";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<IComments[]> {

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComments[]> | Promise<IComments[]> | IComments[] {
    return this.commentService.getAll();
  }

}
