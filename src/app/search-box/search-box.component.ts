import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WeatherService, CityInfo } from '../weather.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})

export class SearchBoxComponent implements OnInit {

  main: CityInfo;

  // 2 promeniti cityAdded
  @Output() cityAdded = new EventEmitter<CityInfo>();

  // 5555
  @Output() cityRemoved = new EventEmitter<CityInfo>();

  // di
  constructor(private _weather: WeatherService,
              private http: HttpClient) { }



  // input search
  cityName: string;

  // 555
  result: CityInfo[] = [];

  ngOnInit(): void {
    console.log(this.result);
    // call init() //
    // this.init();
  }

  init() {
    // input search
    const addedCities = this.cityName.split(',').map(city => city.trim());

    addedCities.forEach(city => {

      // http service
      this._weather.getWeather(city)
                   .subscribe(res => {

                      this.main = res;
                      console.log(res);

                      // output
                      this.cityAdded.emit(res);

                      // push data to resalt[]
                      this.result.push(res);

                      // empty field
                      this.cityName = '';

                    });
    });
  }

  // add
  eventHandler(event) {
    if (event.keyCode === 13) {
      this.init();
    }
  }

  // remove
  removeItem(i) {
    // 555
    const root = this.result[i];
    this.result.splice(i, 1);

    // 555
    this.cityRemoved.emit(root);
    console.log('test remove 111');
  }
}

