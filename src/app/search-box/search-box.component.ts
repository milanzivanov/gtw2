import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { WeatherService } from '../weather.service';
import { RootObject } from '../weather-interface';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})


export class SearchBoxComponent implements OnInit {


  main: RootObject;

  // 2
  @Output() rootEvent = new EventEmitter<RootObject>();

  // di
  constructor(private _weather: WeatherService,
              private http: HttpClient) { }



  // input search
  cityName: string;
  result: { cityName: string,
            temp: number,
            humid: number,
            icon: string,
            date: string,
            wind: number}[] = [];

  // addedCities: string[] = [];

  ngOnInit(): void {

    console.log('box-search');
    console.log(this.result);
    // call init()
    // this.init();

  }

  init() {

    // input search
    const addedCities = this.cityName.split(',').map(city => city.trim());

    addedCities.forEach(city => {

      // http service
      this._weather.getWeather(city)
                   .subscribe(res => {

                      // const weatherCity = res;

                      this.main = res;
                      console.log(res);

                      // output
                      this.rootEvent.emit(res);

                      // push data to resalt[]
                      this.result.push({
                        cityName: res.city.name,
                        temp: res.list[0].main.temp,
                        humid: res.list[0].main.humidity,
                        icon: res.list[0].weather[0].icon,
                        wind: res.list[0].wind.speed,
                        date: res.list[0].dt_txt
                      });

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
    this.result.splice(i, 1);
    // this._weather.removeItemService(i);
}


}

