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

  ngOnInit() {
  }

}
