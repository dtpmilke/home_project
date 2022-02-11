import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WhiteWrapperComponent } from './white-wrapper.component'


@NgModule({
  declarations: [
    WhiteWrapperComponent
  ],
  exports: [
    WhiteWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WhiteWrapperModule {
}
