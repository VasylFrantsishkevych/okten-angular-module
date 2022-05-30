import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {Router} from "@angular/router";

import {TokenService} from "./services";
import {IToken} from "./modules/auth/interfaces";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  isRefreshing = false;

  constructor(
    private router: Router,
    private tokenService: TokenService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const isAuthorization = this.tokenService.isAuthorization();

    if (isAuthorization) {
      request = this.addToken(request, this.tokenService.getAccessToken())
    }
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handle401Error(request, next)
        }
        return throwError(() => new Error('Token invalid'))
      })
    )
  }

  // Add token to the current request
  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  //handles the error and return new tokens
  handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this.tokenService.refresh().pipe(
        switchMap((tokens: IToken) => {
          return next.handle(this.addToken(request, tokens.access))
        }),
        catchError(() => {
          this.isRefreshing = false;
          this.tokenService.deleteToken();
          this.router.navigate(['login']);
          return throwError(() => new Error('Token invalid'))
        })
      )
    }
  }
}
