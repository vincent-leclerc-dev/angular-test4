import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [`
  .even {
    color: purple
  }
`]
})
export class EvenComponent {
  @Input()
  number: number = 0;
}
