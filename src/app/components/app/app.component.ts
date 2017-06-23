import { Component, Inject, OnInit } from '@angular/core';
import { SudokuGrid } from '../../../../data/sudoku.data';
//import { EventService } from '../../providers/event.service';
//import { ColumnService } from '../../providers/column.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  columns = [];
  rows = [];
  blocs = [];
  /*column1Service;
  column2Service;
  column3Service;
  column4Service;
  column5Service;
  column6Service;
  column7Service;
  column8Service;
  column9Service;*/

  /*title = 'app';
  case1 = {};
  case2 = {};
  case3 = {};
  case4 = {};
  case5 = {};
  case6 = {};
  case7 = {};
  case8 = {};
  case9 = {};
  case10 = {};
  case11 = {};
  case12 = {};
  case13 = {};
  case14 = {};
  case15 = {};
  case16 = {};
  case17 = {};
  case18 = {};
  case19 = {};
  case20 = {};
  case21 = {};
  case22 = {};
  case23 = {};
  case24 = {};
  case25 = {};
  case26 = {};
  case27 = {};
  case28 = {};
  case29 = {};
  case30 = {};
  case31 = {};
  case32 = {};
  case33 = {};
  case34 = {};
  case35 = {};
  case36 = {};
  case37 = {};
  case38 = {};
  case39 = {};
  case40 = {};
  case41 = {};
  case42 = {};
  case43 = {};
  case44 = {};
  case45 = {};
  case46 = {};
  case47 = {};
  case48 = {};
  case49 = {};
  case50 = {};
  case51 = {};
  case52 = {};
  case53 = {};
  case54 = {};
  case55 = {};
  case56 = {};
  case57 = {};
  case58 = {};
  case59 = {};
  case60 = {};
  case61 = {};
  case62 = {};
  case63 = {};
  case64 = {};
  case65 = {};
  case66 = {};
  case67 = {};
  case68 = {};
  case69 = {};
  case70 = {};
  case71 = {};
  case72 = {};
  case73 = {};
  case74 = {};
  case75 = {};
  case76 = {};
  case77 = {};
  case78 = {};
  case79 = {};
  case80 = {};*/

  constructor(@Inject('columnService') private _columnServiceFactory, @Inject('rowService') private _rowServiceFactory, @Inject('blockService') private _blockServiceFactory){
    /*this.init(SudokuGrid);

    this.events.onEvent('toto').subscribe(item => console.log('event received', item));
  
    this.events.publish('toto', 'coucou');*/
  }

  /*init(grid){
    // On parcours les valeurs dans les data
    grid.forEach((value, index, currentArray) => {
      // On récupère la valeur de la case
      let cellValue = grid[index];
      // On en déduit les valeurs possibles de la case
      let cellPossibleValues = cellValue == 0
        ? [1,2,3,4,5,6,7,8,9]
        : [cellValue];
      // On déduit le numéro de ligne de la case
      let cellRow = Math.trunc(index / 9) + 1;
      // On déduit le numéro de colonne de la case
      let cellColumn = index % 9 + 1;
      // On déduit le nom de la case
      let cellName = cellColumn + '-' + cellRow;
      // La case devient un nouvel attribut
      this[ "case" + (index+1) ] = {
        "possibleValues": cellPossibleValues,
        "nom": cellName
      };
    });
  }*/

  ngOnInit() {
    this.initColumns();
    this.initRows();
    this.initblocks();
  }

  initColumns() {
    for(let n = 1; n < 10; n++){
      this['column' + n + 'Service'] = this._columnServiceFactory().setNumber(n);
    }
    /*this.column1Service = this._columnServiceFactory().setNumber(1);
    this.column2Service = this._columnServiceFactory().setNumber(2);
    this.column3Service = this._columnServiceFactory().setNumber(3);
    this.column4Service = this._columnServiceFactory().setNumber(4);
    this.column5Service = this._columnServiceFactory().setNumber(5);
    this.column6Service = this._columnServiceFactory().setNumber(6);
    this.column7Service = this._columnServiceFactory().setNumber(7);
    this.column8Service = this._columnServiceFactory().setNumber(8);
    this.column9Service = this._columnServiceFactory().setNumber(9);*/
  }

  initRows() {
    for(let n = 1; n < 10; n++) {
      this['row' + n + 'Service'] = this._rowServiceFactory().setNumber(n);
    }
  }

  initblocks() {
    for(let n = 1; n < 10; n++) {
      this['block' + n + 'Service'] = this._blockServiceFactory().setNumber(n);
    }
  }

  test() {
    //this.events.publish('setPossibleValuesFor99', [9]);
  }
}
