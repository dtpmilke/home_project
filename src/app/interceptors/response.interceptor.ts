import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http'
import { Observable, throwError, map, catchError, shareReplay } from 'rxjs'
import { AuthService } from '../services/auth/auth.service'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        map(this.handlerMap.bind(this)),
        catchError(this.handlerCatchError.bind(this)),
        shareReplay(),
      )
  }

  handlerMap(response: HttpEvent<any>): any {
    if (response instanceof HttpResponse) {
      return response.clone({body: response.body})
    }
  }

  handlerCatchError(error: HttpErrorResponse): any {
    if (error.status === 401) {
      this.auth.logout()
    }

    return throwError(error)
  }
}
