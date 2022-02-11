import { loginPageType } from './login-page.type'

export interface LoginStateInterface {
  page: loginPageType,
  login: string,
  password: string
}
