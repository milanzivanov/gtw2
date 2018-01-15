import { Injectable } from '@angular/core';

import { RootObject } from './weather-interface';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


// shering data
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class WeatherService {

  // shering data
  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  readonly _url = `http://api.openweathermap.org/data/2.5/forecast?id%20=524901&APPID=cf4acfccaeb719f8f2992c4f80d2031b&q=subotica&units=metric`;

  // di
  constructor(private _http: HttpClient) { }

  // geting wether data from api
  getWeather() {

    return this._http.get(this._url)
              // .map(result => <RootObject>result);
              .map((result) => {
                // return result as RootObject;
                const temp = result as RootObject;
                return temp;
                // return <RootObject>result;
              });

  }

  // shering data
  chengeMessage(message: string) {
    this.messageSource.next(message);
  }

}
