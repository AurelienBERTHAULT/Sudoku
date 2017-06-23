import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, CellComponent, ColumnComponent, RowComponent } from '.';

import {
  BlockService, 
  ColumnService, 
  EventService,
  RowService 
} from '.';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    RowComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: 'blockService', 
      useFactory: () => 
        () => new BlockService(), 
      deps: []
    },
    {
      provide: 'columnService', 
      useFactory: () => 
        () => new ColumnService(), 
      deps: []
    },
    EventService,
    {
      provide: 'rowService', 
      useFactory: () => 
        () => new RowService(), 
      deps: []
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
