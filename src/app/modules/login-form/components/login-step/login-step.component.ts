import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { LoginRequestInterface } from '../../models/login-request.interface'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { FormValidators } from '../../../../helpers/form-validators'

@Component({
  selector: 'app-login-step',
  templateUrl: './login-step.component.html',
  styleUrls: ['./login-step.component.scss']
})
export class LoginStepComponent implements OnInit {
  @Output() submitted: EventEmitter<LoginRequestInterface> = new EventEmitter<LoginRequestInterface>()

  form!: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
  }

  get loginControl(): FormControl {
    return this.form.get('login') as FormControl
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', FormValidators.required],
      password: ['', FormValidators.required]
    })
  }

  submit(): void {
    this.form.markAllAsTouched()
    if (this.form.invalid) {
      return
    }

    this.submitted.emit(this.form.value)
  }

}
