import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityInfo } from '../weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 1 search -- output -- > header
  main: CityInfo;

  // 2 header -- output --> app-component
  @Output() cityAdded = new EventEmitter<CityInfo>();

  // 555 u headr serach
  @Output() cityRemoved = new EventEmitter<CityInfo>();

  constructor() { }

  // 1 search -- output -- > header
  onCityAdded(value: CityInfo) {
    this.main = value;

    // 2 header -- output --> app-component
    this.cityAdded.emit(value);
  }

  // 555
  onCityRemoved(value: CityInfo) {
    console.log('log from remove on header component');
    this.cityRemoved.emit(value);
  }

  ngOnInit() {
  }

}
