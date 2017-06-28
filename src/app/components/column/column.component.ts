import { Component, Directive, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() number;

  constructor() { }

  resolve(){
    console.log('Try to resolve column ' + this.number)
  }

  ngOnInit() {
  }

}
