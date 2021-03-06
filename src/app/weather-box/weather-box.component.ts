import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { WeatherService, CityInfo } from '../weather.service';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent {

  constructor() { }

  @Input() items: CityInfo[];

}
