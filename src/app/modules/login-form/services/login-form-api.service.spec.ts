import { TestBed } from '@angular/core/testing'

import { LoginFormApiService } from './login-form-api.service'

describe('LoginFormApiService', () => {
  let service: LoginFormApiService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LoginFormApiService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
