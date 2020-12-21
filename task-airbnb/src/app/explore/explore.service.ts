import { EventEmitter, Injectable } from '@angular/core';
import { City } from './explore-main/cities/city.model';

import * as exploreData from './explore.json';

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
    switch (key) {
      case 'actions': {
        return exploreData.actions;
        break;
      }
      case 'searchNearbyCities': {
        return exploreData.searchNearbyCities;
        break;
      }
      case 'searchAllResults': {
        return exploreData.searchAllResults;
        break;
      }
      case 'cities': {
        return exploreData.cities;
        break;
      }
      case 'expiriences': {
        return exploreData.expiriences;
        break;
      }
      case 'guestInfo': {
        return exploreData.guestInfo;
        break;
      }
      case 'hostInfo': {
        return exploreData.hostInfo;
        break;
      }
      case 'helpersInfo': {
        return exploreData.helpersInfo;
        break;
      }
      case 'moreInfo': {
        return exploreData.moreInfo;
        break;
      }
      case 'suggestions': {
        return exploreData.suggestions;
        break;
      }
      case 'searchTypes': {
        return exploreData.searchTypes;
        break;
      }
      case 'months': {
        return exploreData.months;
        break;
      }
      case 'personTypes': {
        return exploreData.personTypes;
        break;
      }
    }
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
