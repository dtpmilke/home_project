import { getClearValue } from './helper'
import { FormControl } from '@angular/forms'

export interface ErrorObject {
  [key: string]: string
}

export class FormValidators {
  static required(control: FormControl): ErrorObject | null {
    const value = getClearValue(control.value)
    if (value === '') {
      return {required: 'Поле обязательно для заполнения'}
    }

    return null
  }

}

