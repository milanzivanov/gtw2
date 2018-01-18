import { Injectable } from '@angular/core';

import { RootObject } from './weather-interface';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { log } from 'util';


@Injectable()
export class WeatherService {

  // result: RootObject[];

  // di
  constructor(private _http: HttpClient) { }

  // geting wether data from api
  getWeather(cityName: string) {

    return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id
    =524901&APPID=cf4acfccaeb719f8f2992c4f80d2031b&q=${cityName}&units=metric`)
              // .map(result => <RootObject>result);
              .map((result) => {
                // return result as RootObject;
                const temp = result as RootObject;
                return temp;
                // return <RootObject>result;
              });

  }

  // remove
  // removeItemService(i) {
  //   this.result.splice(i, 1);
  //   console.log('obrisano');
  // }

}
