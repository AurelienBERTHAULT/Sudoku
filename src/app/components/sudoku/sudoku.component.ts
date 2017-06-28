import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { ColumnComponent } from '..'

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  // ViewChild takes a class type or a reference name string.
  // Here we are using the type
  @ViewChild(ColumnComponent) columnComponent: ColumnComponent;

  constructor() { }

  handleKnownBox() {
    
  }

  ngOnInit() {
  }

  resolve() {
    this.columnComponent.resolve();
  }
}
