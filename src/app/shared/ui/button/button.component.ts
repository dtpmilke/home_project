import { ChangeDetectionStrategy, EventEmitter, Component, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button'
  @Input() inline = false
  @Input() disabled = false
  @Input() url = ''

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>()

  onClick(): void {
    this.clicked.emit()
  }
}
