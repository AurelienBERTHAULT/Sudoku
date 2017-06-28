import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColumnComponent, SudokuComponent } from '.';

@NgModule({
  declarations: [
    ColumnComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SudokuComponent]
})
export class AppModule {}
