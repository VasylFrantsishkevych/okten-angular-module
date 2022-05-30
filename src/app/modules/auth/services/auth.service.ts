import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, IUser} from "../interfaces";
import {Observable, tap} from "rxjs";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //register new user
  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  //login user
  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user);
  }
}

