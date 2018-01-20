import { Component, OnInit, Input } from '@angular/core';
import { WeatherService, CityInfo } from '../../weather.service';
// import { RootObject } from '../../weather-interface';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'weather-box-item',
  templateUrl: '../wather-box-item/wather-box-item.html',
  styleUrls: ['../wather-box-item/weather-box-item.scss']
})
export class WeatherBoxItemComponent {

  @Input() item: CityInfo;

}
