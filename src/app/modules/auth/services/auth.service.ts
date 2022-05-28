import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, IUser} from "../interfaces";
import {Observable, tap} from "rxjs";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';

  constructor(private httpClient: HttpClient) { }

  //register new user
  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user);
  }

  //login user
  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user);
  }

  // get new pair tokens and set their to the localStorage
  refresh(): Observable<IToken> {
    const refresh = this.getRefreshToken();
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setTokens(tokens)
      })
    )
  }

  //save token pair in localStorage
  setTokens(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access)
    localStorage.setItem(this.refreshTokenKey, token.refresh)
  }

  // get access token from localstorage
  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  // get refresh token from localstorage
  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string;
  }

  // delete tokens in localStorage
  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  //check if the user is registered
  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }
}

