import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IToken} from "../modules/auth/interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';

  constructor(private httpClient: HttpClient) { }


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
