import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginStepComponent } from './login-step.component'

describe('LoginStepComponent', () => {
  let component: LoginStepComponent
  let fixture: ComponentFixture<LoginStepComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginStepComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
