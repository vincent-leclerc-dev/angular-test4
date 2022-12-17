import { Component, EventEmitter, Input, Output } from '@angular/core';

enum GameStatus {
  STARTED = 'started',
  STOPPED = 'stopped'
}
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent {

  status: GameStatus = GameStatus.STOPPED;

  interval: any = 0;

  @Input() round: number = 0;
  @Output() tick: EventEmitter<any> = new EventEmitter<any>();

  start () {
    this.status = GameStatus.STARTED;

    this.tick.emit(-1); // to reset logs without push

    this.round = 0;
    this.interval = setInterval(() => {
      this.round++;
      this.tick.emit(this.round);
    }, 1000);
  }

  stop () {
    this.status = GameStatus.STOPPED;
    clearInterval(this.interval);
  }
}
