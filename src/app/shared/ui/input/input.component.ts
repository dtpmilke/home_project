import { Component, OnInit, forwardRef, Input, EventEmitter, Output } from '@angular/core'
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms'
import { inputType } from './models/input.type'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
  ]
})
export class InputComponent implements OnInit {
  @Input() readonly = false
  @Input() placeholder = ''
  @Input() label = ''
  @Input() type: inputType = 'text'
  @Input() errorMessage = ''
  @Input() control!: FormControl

  @Output() blurEvent: EventEmitter<any> = new EventEmitter<any>()
  @Output() focusEvent: EventEmitter<any> = new EventEmitter<any>()

  //@ViewChild(DefaultValueAccessor) valueAccessor!: DefaultValueAccessor

  value: any = ''
  focused = false
  isPassword = false

  // registerOnChange = (fn: (value: any) => {}) => this.onChange = fn
  //
  // registerOnTouched = (fn: () => {}) => this.onTouched = fn

  constructor() {
  }

  ngOnInit(): void {
    this.isPassword = this.type === 'password'
  }

  // writeValue(obj: any) {
  //   if (!obj) return
  //   this.valueAccessor.writeValue(obj)
  // }
  //
  //
  // onBlur(): void {
  //   this.focused = false
  //   this.blurEvent.emit(this.value)
  // }
  //
  // onFocus(): void {
  //   this.focused = true
  //   this.focusEvent.emit(this.value)
  // }
  //
  // private onChange = (value: any) => {
  // }
  //
  // private onTouched = () => {
  // }

}
