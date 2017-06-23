import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,  } from '@angular/core';
import { EventService } from '../../providers/event.service';

@Component({
  selector: 'sudoku-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnChanges, OnInit {
  
  @Input() number;
  reportRequestCount = 0;
  reports = [];

  constructor(private events: EventService) {}

  analyseReport(report){
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    for(let column = 1; column < 10; column++){
      this.events
        .onEvent('cell' + column + this.number + 'HasBeenResolved')
        .subscribe(discoveredValue => {
          this.events
            .publish('valueDiscoveredInRow' + this.number, discoveredValue);
        });
    }

    let reportRequests = setTimeout(() => {
      this.reportRequestCount++;
      //console.log(this.reports);
      this.reports[this.reportRequestCount] = [];
      for(let column = 1; column < 10; column++){
        this.events
          .onEvent('report' + this.reportRequestCount + 'ForCell' + column + this.number)
          .subscribe(possibleValues => {
            this.reports[this.reportRequestCount][column + "" + this.number] = possibleValues;
          });
      }
      this.events
          .publish('reportRequestForRow' + this.number, this.reportRequestCount);
    }, 2000);

    let reportAnalyse = setTimeout(() => {
      this.reports.forEach(report => {
        console.log('Un rapport : ', JSON.stringify(report));
        // Si toutes les cases ont retourné leur réponse
        /*if(report.length == 9){
          this.analyseReport(report);
          currentArray.splice(index, 1);
        }*/
      });
    }, 4000);
  } 

  /*retrievePossibleValues() {
    let possibleValues = [1,2,3,4,5,6,7,8,9];

    for(let propertyName in this) {
      let propertyValue = this[propertyName];
      if(typeof propertyValue == "object" && propertyValue != null && typeof propertyValue['possibleValues'] != 'undefined' && propertyValue['possibleValues'].length == 1){
        let index = possibleValues.indexOf(propertyValue['possibleValues'][0]);
        possibleValues.splice(index, 1);
      }
    }

    return possibleValues;
  }*/

  /*updateCellPossibleValues(possibleValues) {
    for(let propertyName in this) {
      let propertyValue = this[propertyName];
      if(typeof propertyValue == "object" && propertyValue != null && typeof propertyValue['possibleValues'] != 'undefined' && propertyValue['possibleValues'].length != 1){
        let intersectPossibleValues = this.intersectionDestructive(propertyValue['possibleValues'], possibleValues);
        let cellHasChanged = propertyValue['possibleValues'] != intersectPossibleValues;
        propertyValue['possibleValues'] = intersectPossibleValues;
        if(cellHasChanged){
          console.log('Cell has changed')
          this[propertyName + "Change"].emit(propertyValue);
        }
      }
    }
  }*/
}
