import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RootObject } from '../weather-interface';
import { log } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  //
  @Output() messageEvent = new EventEmitter<string>();

  message: string;
  receiveMessage($event) {
    this.message = $event;
  }

  sendMessage(message: string) {
    this.messageEvent.emit(this.message);
    console.log(this.message);
  }

  ngOnInit() {
  }

}
