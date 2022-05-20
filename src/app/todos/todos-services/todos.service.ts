import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITodos, ITodosDetails} from "../../interfaces";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<ITodos[]> {
    return this._http.get<ITodos[]>(urls.todos);
  }

  getOne(id: string): Observable<ITodosDetails> {
    return this._http.get<ITodosDetails>(urls.todos + '/' + id)
  }
}
