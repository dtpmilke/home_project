import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent {
  @Output() clickedBack: EventEmitter<any> = new EventEmitter<any>()
}
