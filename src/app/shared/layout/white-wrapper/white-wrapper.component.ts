import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-white-wrapper',
  templateUrl: './white-wrapper.component.html',
  styleUrls: ['./white-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhiteWrapperComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
