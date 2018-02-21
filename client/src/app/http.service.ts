import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {  }

  getWeather(city){

    let weather = this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a315342c813b36d79d27d4eb23895ae1');

    return weather;
  }
}
