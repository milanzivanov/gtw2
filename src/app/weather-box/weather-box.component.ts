import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { RootObject } from '../weather-interface';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  // aca
  ngOnChanges() {
    console.log('weather box chenges');
    // console.log(this.inputData);
  }


}
