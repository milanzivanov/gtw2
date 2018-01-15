import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RootObject } from '../weather-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

    // aca
  @Output() rootObjectChanged = new EventEmitter<RootObject>();

    // aca
  newRootObject(value: RootObject) {

    this.rootObjectChanged.emit(value);

  }

  ngOnInit() {
  }

}
