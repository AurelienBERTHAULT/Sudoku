import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sudoku-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnChanges, OnInit {

  @Input() name: string;
  @Input() blockService;
  @Input() columnService;
  @Input() rowService;
  possibleValues = [1,2,3,4,5,6,7,8,9];

  constructor() {}

  isPossibleValue(value) {
    return this.possibleValues.includes(value);
  }

  listenToBlockMessages(){
    this.blockService.messageForAllBoxesInTheBlock.subscribe(message => {
      if(message.message == 'The following value has been discovered in the block'){
        if(this.possibleValues.length > 1){
          this.removePossibleValue(message.value);
        }
      } else if(message.message == 'The box with the following possible value is resolved'){
        console.log("cell " + this.name,"La cellule a été avertie", message.value, typeof message.value);
        if(this.possibleValues.indexOf(parseInt(message.value)) != -1){
          this.resolveBox(parseInt(message.value));
        }
      }
    });
  }

  listenToColumnMessages(){
    this.columnService.messageForAllBoxesInTheColumn.subscribe(message => {
      if(message.message == 'The following value has been discovered in the column'){
        if(this.possibleValues.length > 1){
          this.removePossibleValue(message.value);
        }
      } else if(message.message == 'The box with the following possible value is resolved'){
        console.log("cell " + this.name,"La cellule a été avertie", message.value, typeof message.value);
        if(this.possibleValues.indexOf(parseInt(message.value)) != -1){
          this.resolveBox(parseInt(message.value));
        }
      }
    });
  }

  listenToRowMessages(){
    this.rowService.messageForAllBoxesInTheRow.subscribe(message => {
        if(message.message == 'The following value has been discovered in the row'){
          if(this.possibleValues.length > 1){
            this.removePossibleValue(message.value);
          }
        } else if(message.message == 'The box with the following possible value is resolved'){
        console.log("cell " + this.name,"La cellule a été avertie", message.value, typeof message.value);
        if(this.possibleValues.indexOf(parseInt(message.value)) != -1){
          this.resolveBox(parseInt(message.value));
        }
      }
      });
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.subscribeToBlock();
    this.subscribeToColumn();
    this.subscribeToRow();
    this.listenToBlockMessages();
    this.listenToColumnMessages();
    this.listenToRowMessages();
  }

  removePossibleValue(discoveredValue){
    let index = this.possibleValues.indexOf(discoveredValue);

    if(index !== -1) {
      this.possibleValues.splice(index, 1);
      this.blockService.handleBoxChange(this);
      this.columnService.handleBoxChange(this);
      this.rowService.handleBoxChange(this);
    }
  }

  resolveBox(value: number) {
    /*console.log('resolveBox');*/
    this.possibleValues = [value];
    this.blockService.handleBoxChange(this);
    this.columnService.handleBoxChange(this);
    this.rowService.handleBoxChange(this);
  }

  subscribeToBlock(){
    this.blockService.registerTheBox(this);
  }

  subscribeToColumn(){
    this.columnService.registerTheBox(this);
  }

  subscribeToRow(){
    this.rowService.registerTheBox(this);
  }
}
