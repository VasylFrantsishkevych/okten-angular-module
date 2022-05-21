import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComments} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IComments[]> {
    return this.httpClient.get<IComments[]>(urls.comments);
  }

  getOne(id: string): Observable<IComments> {
    return this.httpClient.get<IComments>(urls.comments + '/' + id);
  }
}
