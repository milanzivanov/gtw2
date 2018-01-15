import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WeatherService } from '../weather.service';
import { RootObject } from '../weather-interface';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})


export class SearchBoxComponent implements OnInit {

  @Input() msg: string;

  // aca
  @Output() rootObjectChanged = new EventEmitter<RootObject>();

  // di
  constructor(private _weather: WeatherService,
              private http: HttpClient) { }

  main: RootObject;


  // cityName: string;
  // result: { cityName: string,
  //           temp: number,
  //           humid: number,
  //           icon: string,
  //           date: string,
  //           city: string,
  //           wind: number}[] = [];

  ngOnInit(): void {

    console.log('box-search');
    // call init()
    this.init();

  }

  init() {

    this._weather.getWeather()
                 .subscribe(res => {
                    // const weatherCity = res;

                    this.main = res;

                    // console.log(res);

                    // aca event metod koji prima metod
                    this.rootObjectChanged.emit(res);


                  });
  }

}

