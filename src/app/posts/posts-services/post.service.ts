import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost, IPostDetails} from "../../interfaces";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this._http.get<IPost[]>(urls.posts);
  }

  getOne(id: string): Observable<IPostDetails> {
    return this._http.get<IPostDetails>(urls.posts + '/' + id)
  }
}
