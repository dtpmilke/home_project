import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { Observable } from 'rxjs'
import { ApiInterface } from '../../models/api.interface'
import { getMockup } from '../../helpers/get-mockup'
import { GetTokenMockup } from '../../mockup/get-token.mockup'
import { GetTokenResponseInterface } from '../../models/get-token-response.interface'
import { RefreshTokenResponseInterface } from '../../models/refresh-token-response.interface'
import { RefreshTokenMockup } from '../../mockup/refresh-token.mockup'

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private api: ApiService
  ) {
  }

  getToken(): Observable<GetTokenResponseInterface> {
    const requestData: ApiInterface = {
      path: '/getToken',
      mockupData: getMockup('/getToken', GetTokenMockup.response.success)
    }

    return this.api.get(requestData)
  }

  refreshToken(body: any): Observable<RefreshTokenResponseInterface> {
    const requestData: ApiInterface = {
      path: '/refreshToken',
      mockupData: getMockup('/refreshToken', RefreshTokenMockup.response.success),
      body
    }

    return this.api.post(requestData)
  }
}
