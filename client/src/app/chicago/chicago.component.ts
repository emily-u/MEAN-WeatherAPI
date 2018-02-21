import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  humidity;
  avg;
  high;
  low;
  status;
  weatherData;

  constructor( private _httpService: HttpService) { }

  ngOnInit() {
    this.getChicagoWeather();
  }

  getChicagoWeather() {
    console.log("getSeattleWeather");
    let observable = this._httpService.getWeather("chicago");
    observable.subscribe(data => {
    this.humidity = data.main.humidity;
    this.avg = data.main.temp;
    this.high = data.main.temp_max;
    this.low = data.main.temp_min;
    this.status = data.weather[0].description;
    this.weatherData = data;
  })

}
}