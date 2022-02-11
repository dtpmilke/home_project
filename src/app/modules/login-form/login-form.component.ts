import { Component, OnInit } from '@angular/core'
import { LoginStateInterface } from './models/login-state.interface'
import { Subscription } from 'rxjs'
import { LoginFormService } from './services/login-form.service'
import { loginPageType } from './models/login-page.type'
import { LoginRequestInterface } from './models/login-request.interface'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  state!: LoginStateInterface
  stateSub!: Subscription


  constructor(
    private loginForm: LoginFormService
  ) {
  }

  ngOnInit(): void {
    this.stateSub = this.loginForm.state$.subscribe(this.refreshState.bind(this))
    this.setPage('form')
  }

  loginSubmit(data: LoginRequestInterface): void {
    this.setPage('load')
    this.loginForm.login(data)
  }

  setPage(page: loginPageType): void {
    this.loginForm.setPage(page)
  }

  private refreshState(data: LoginStateInterface): void {
    this.state = Object.assign({}, data)
  }

}
