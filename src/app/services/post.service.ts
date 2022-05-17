import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../constants";
import {IPostDetails} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts);
  }

  getOne(id: string): Observable<IPostDetails> {
    return this.http.get<IPostDetails>(urls.posts + '/' + id);
  }
}
