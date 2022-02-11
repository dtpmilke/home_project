import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WhiteWrapperComponent } from './white-wrapper.component'

describe('WhiteWrapperComponent', () => {
  let component: WhiteWrapperComponent
  let fixture: ComponentFixture<WhiteWrapperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhiteWrapperComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteWrapperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
