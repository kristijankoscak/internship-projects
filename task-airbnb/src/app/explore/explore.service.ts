import { EventEmitter, Injectable } from '@angular/core';
import { City } from './explore-main/cities/city.model';

import  {default as exploreData}  from './explore.json';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor() { }

  personCountChanged: EventEmitter<boolean> = new EventEmitter();

  getMonth(monthNumber: number): string {
    const months = this.getData('months');
    const id = monthNumber - 1;
    return months[id];
  }

  getData(key: string): any {
    return exploreData[key];
  }

  fetchCity(cityName: string): City {
    const nearbyCities = this.getData('searchNearbyCities');
    let tempCity: City = nearbyCities[0];
    nearbyCities.forEach(city => {
      if (city.name === cityName) {
        tempCity = city;
      }
    });
    return tempCity;
  }
}
