import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken()
    let headers!: HttpHeaders

    if (token) {
      headers = new HttpHeaders({
        Authorization: 'Bearer ' + token.toString()
      })
    }

    request = request.clone({
      headers,
      body: request.body,
      //withCredentials: true
    })

    return next.handle(request)
  }
}
