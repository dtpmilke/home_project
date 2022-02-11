import { Injectable } from '@angular/core'
import { Observable, of, map, catchError, throwError } from 'rxjs'
import { RefreshTokenResponseInterface } from '../../models/refresh-token-response.interface'
import { AuthApiService } from '../api/auth-api.service'
import { GetTokenResponseInterface } from '../../models/get-token-response.interface'
import { tap } from 'rxjs/operators'

import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { UserInterface } from '../../models/user.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: any
  private refreshTokenTimeout: any

  constructor(
    private api: AuthApiService,
    private cookie: CookieService,
    private router: Router
  ) {
    window.addEventListener('storage', this.storageEventListener.bind(this))
  }

  getToken(): string {
    return this.token
  }

  logout(): void {
    this.cookie.delete('userData')
    this.deleteToken()
    location.reload();
  }

  setUserData(data: UserInterface): void {
    this.cookie.set('userData', JSON.stringify(data), {expires: 2147483647})
  }

  isAuth(): boolean {
    return this.token && this.cookie.get('userData')
  }

  deleteToken(): void {
    this.token = null
    localStorage.removeItem('refresh_token')
  }

  getNewToken(): Observable<GetTokenResponseInterface> {
    this.deleteToken()

    return this.api.getToken()
      .pipe(
        tap(
          (data: GetTokenResponseInterface) => {
            this.setToken(data.token, data.refreshToken)
          }
        )
      )
  }

  refreshToken(): Observable<RefreshTokenResponseInterface | null> {
    const refreshToken = localStorage.getItem('refresh_token')

    if (!refreshToken) {
      localStorage.setItem('logout-event', 'logout-' + Math.random())

      return of(null)
    }

    const body: any = {refreshToken}

    return this.api.refreshToken(body)
      .pipe(
        map(
          (data: RefreshTokenResponseInterface) => {
            this.setToken(data.token, data.refreshToken)
            return data
          }
        ),
        catchError(
          (error => {
            return throwError(error)
          })
        )
      )
  }

  private storageEventListener(event: StorageEvent): void {
    if (!event.oldValue) {
      this.logout()
    }
    if (event.storageArea !== localStorage) {
      return
    }

    if (event.key === 'logout-event') {
      this.logout()
    }
  }

  private setToken(token: string, refreshToken: string): void {
    this.token = token
    localStorage.setItem('refresh_token', refreshToken)

    this.startRefreshTokenTimer()
  }

  private startRefreshTokenTimer(): void {
    if (this.refreshTokenTimeout) {
      this.stopRefreshTokenTimer()
    }

  }

  private stopRefreshTokenTimer(): void {
    clearTimeout(this.refreshTokenTimeout)
  }
}
