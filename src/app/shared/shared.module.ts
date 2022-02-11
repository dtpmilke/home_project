import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorMessagePipe } from './pipe/error-message.pipe'


@NgModule({
  declarations: [
    ErrorMessagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessagePipe
  ]
})
export class SharedModule {
}
