import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './component/board/board.component';
import { PositionTextComponent } from './component/position-text/position-text.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PositionTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
