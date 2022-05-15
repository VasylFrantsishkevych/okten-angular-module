import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser, IUserDetails} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(urls.users);
  }
  getOne(id: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(urls.users + '/' + id);
  }
}
