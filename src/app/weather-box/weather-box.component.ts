import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { RootObject } from '../weather-interface';
import { log } from 'util';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent {

  constructor() { }

  @Input() items: RootObject[];

}
