import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EvenComponent } from './components/even.component';
import { GameControlComponent } from './components/game-control.component';
import { OddComponent } from './components/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
