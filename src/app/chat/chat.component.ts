import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  convSelected = false;

  constructor(public service: DataService) {
    this.convSelected = this.service.convSelected;
    this.getConv();
  }

  ngOnInit() {
  }

  getConv() {
      setInterval(() => {
        this.convSelected = this.service.convSelected;
    }, 1);
  }

}
