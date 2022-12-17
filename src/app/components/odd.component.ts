import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: [`
    .odd {
      color: yellowgreen
    }
  `]
})
export class OddComponent {
  @Input()
  number: number = 0;
}
