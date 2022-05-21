import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITodos} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ITodos[]> {
    return this.httpClient.get<ITodos[]>(urls.todos);
  }

  getOne(id: string): Observable<ITodos> {
    return this.httpClient.get<ITodos>(urls.todos + '/' + id);
  }
}
