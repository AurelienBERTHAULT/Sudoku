import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../../providers/event.service';

@Component({
  selector: 'sudoku-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() number;

  constructor(private events: EventService) { }

  ngOnInit() {
    this.retrieveCellChildren().forEach(child => {
      console.log('cell' + child + 'HasBeenResolved')
      this.events
        .onEvent('cell' + child + 'HasBeenResolved')
        .subscribe(discoveredValue => {
          this.events
            .publish('valueDiscoveredInBloc' + this.number, discoveredValue);
        });
    })
  }

  retrieveCellChildren() {
    switch(this.number){
      case 1:
        return ['11','12','13','21','22','23','31','32','33'];
      case 2:
        return ['41','42','43','51','52','53','61','62','63'];
      case 3:
        return ['71','72','73','81','82','83','91','92','93'];
      case 4:
        return ['14','15','16','24','25','26','34','35','36'];
      case 5:
        return ['44','45','46','54','55','56','64','65','66'];
      case 6:
        return ['74','75','76','84','85','86','94','95','96'];
      case 7:
        return ['17','18','19','27','28','29','37','38','39'];
      case 8:
        return ['47','48','49','57','58','59','67','68','69'];
      case 9:
        return ['77','78','79','87','88','89','97','98','99'];
    }
  }
}
