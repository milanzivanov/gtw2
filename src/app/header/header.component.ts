import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RootObject } from '../weather-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 1 search -- output -- > header
  main: RootObject;

  // 2 header -- output --> app-component
  @Output() rootEventParent = new EventEmitter<RootObject>();

  constructor() { }

  // 1 search -- output -- > header
  receiveData(value: RootObject) {

    this.main = value;
    // pitanje za acu? zasto se ovo u html-u ne vidi?
    console.log('Header component ' + value.city.country);

    // 2 header -- output --> app-component
    this.rootEventParent.emit(value);
    console.log('app component ' + value.city.id);
  }

  ngOnInit() {
  }

}
