import { Injectable } from '@angular/core'
import { ApiService } from '../../../services/api/api.service'
import { LoginRequestInterface } from '../models/login-request.interface'
import { Observable } from 'rxjs'
import { LoginResponseInterface } from '../models/login-response.interface'
import { ApiInterface } from '../../../models/api.interface'
import { getMockup } from '../../../helpers/get-mockup'
import { LoginMockup } from '../mockup/login.mockup'

@Injectable({
  providedIn: 'root'
})
export class LoginFormApiService {

  constructor(
    private api: ApiService
  ) {
  }

  login(body: LoginRequestInterface): Observable<LoginResponseInterface> {
    const requestData: ApiInterface = {
      path: '/login',
      mockupData: getMockup('/login', LoginMockup.response.success),
      body
    }

    return this.api.post(requestData)
  }
}
