import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { LoginStateInterface } from '../models/login-state.interface'
import { LoginFormApiService } from './login-form-api.service'
import { LoginRequestInterface } from '../models/login-request.interface'
import { loginPageType } from '../models/login-page.type'
import { AuthService } from '../../../services/auth/auth.service'
import { AppService } from '../../../services/app/app.service'

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  public state$: Subject<LoginStateInterface> = new Subject<LoginStateInterface>()
  private state: LoginStateInterface = {
    page: 'load',
    login: '',
    password: '',
  }

  constructor(
    private api: LoginFormApiService,
    private auth: AuthService,
    private app: AppService
  ) {
  }

  login(data: LoginRequestInterface): void {
    this.api.login(data).subscribe(
      (response) => {
        if (response.resultCode !== 'OK') {
          this.setPage('final')
          return
        }

        const payload = response.payload || {}

        const userData = {
          name: '',
          surname: '',
        }

        if (payload.name && payload.surname) {
          userData.name = payload.name
          userData.surname = payload.surname

          this.auth.setUserData(userData)
          this.app.init()
        }
      }
    )
  }

  setPage(page: loginPageType): void {
    this.state.page = page
    this.refreshState()
  }

  private refreshState(): void {
    this.state$.next(this.state)
  }
}
