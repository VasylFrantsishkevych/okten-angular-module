import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../../interfaces";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this._http.get<IComment[]>(urls.comments)

  }
}
