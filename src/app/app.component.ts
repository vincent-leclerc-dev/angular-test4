import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    ul, li {
      list-style: none
    }
  `]
})
export class AppComponent {
  title = 'Exercice 4';

  @Input() logs: {round: number}[] = [];

  onTick(round:number) {
    if(round === -1)
      this.logs = []

    if(round > 0)
      this.logs.push({round});
  }
}
