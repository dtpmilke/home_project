import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PreloaderStepComponent } from './preloader-step.component'

describe('PreloaderStepComponent', () => {
  let component: PreloaderStepComponent
  let fixture: ComponentFixture<PreloaderStepComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreloaderStepComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderStepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
