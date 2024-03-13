import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ENUM_JWT_Token, ENUM_StatusCodes } from './shared-kernel/shared-enums';

@Injectable()

export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Retrieve the token from local storage
    const token = localStorage.getItem(ENUM_JWT_Token.TokenKey);

    // Add headers, log requests, handle errors, etc.
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(modifiedReq).pipe(  //pipe function to compose complex operations on observable streams
      tap((event: HttpEvent<any>) => {   //tap intercepts the HTTP events emitted by the observable returned by next.handle(modifiedReq)
        if (event instanceof HttpResponse) {
          if (event.status === ENUM_StatusCodes.Unauthorized) {
            localStorage.removeItem(ENUM_JWT_Token.TokenKey);
            console.log('Login failed:', event.body.message);
          }
        }
      })
    );
  }
}
