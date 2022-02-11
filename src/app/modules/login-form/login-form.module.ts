import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginFormComponent } from './login-form.component'
import { RouterModule } from '@angular/router'
import { ContainerModule } from '../../shared/layout/container/container.module'
import { SectionModule } from '../../shared/layout/section/section.module'
import { InputModule } from '../../shared/ui/input/input.module'
import { WhiteWrapperModule } from '../../shared/layout/white-wrapper/white-wrapper.module'
import { LoginStepComponent } from './components/login-step/login-step.component'
import { PreloaderStepComponent } from './components/preloader-step/preloader-step.component'
import { FinalStepComponent } from './components/final-step/final-step.component'
import { ButtonModule } from '../../shared/ui/button/button.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module'


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginStepComponent,
    PreloaderStepComponent,
    FinalStepComponent
  ],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    SectionModule,
    InputModule,
    WhiteWrapperModule,
    ButtonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginFormModule {
}
