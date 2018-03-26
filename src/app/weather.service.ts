import { Injectable } from '@angular/core';
import { RootObject } from './weather-interface';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  // di
  constructor(private _http: HttpClient) { }

  // geting wether data from api
  getWeather(cityName: string): Observable<CityInfo> {

    return this._http.get(`https://api.openweathermap.org/data/2.5/forecast?id
    =524901&APPID=cf4acfccaeb719f8f2992c4f80d2031b&q=${cityName}&units=metric`)
              // .map(result => <RootObject>result);
              .map((result) => {
                // return result as RootObject;
                const temp = result as RootObject;
                // transformation
                return {
                  cityName: temp.city.name,
                  temp: temp.list[0].main.temp,
                  humid: temp.list[0].main.humidity,
                  icon: temp.list[0].weather[0].icon,
                  wind: temp.list[0].wind.speed,
                  date: temp.list[0].dt_txt
                };
              });
  }
}

export interface CityInfo {
  cityName: string;
  temp: number;
  humid: number;
  icon: string;
  wind: number;
  date: string;
}
