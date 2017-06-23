import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventService } from '../../providers/event.service';

@Component({
  selector: 'sudoku-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnChanges, OnInit {

  @Input() number;

 /* @Input() id;
  @Input() case1;
  @Output() case1Change = new EventEmitter();
  @Input() case2;
  @Output() case2Change = new EventEmitter();
  @Input() case3;
  @Output() case3Change = new EventEmitter();
  @Input() case4;
  @Output() case4Change = new EventEmitter();
  @Input() case5;
  @Output() case5Change = new EventEmitter();
  @Input() case6;
  @Output() case6Change = new EventEmitter();
  @Input() case7;
  @Output() case7Change = new EventEmitter();
  @Input() case8;
  @Output() case8Change = new EventEmitter();
  @Input() case9;
  @Output() case9Change = new EventEmitter();*/

  constructor(private events: EventService) {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    for(let row = 1; row < 10; row++){
      this.events
        .onEvent('cell' + this.number + row + 'HasBeenResolved')
        .subscribe(discoveredValue => {
          this.events
            .publish('valueDiscoveredInColumn' + this.number, discoveredValue);
        });
    }
  }
}
