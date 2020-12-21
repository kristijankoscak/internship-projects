import { Injectable } from '@angular/core';
import { City } from './explore-main/cities/city.model';

import * as exploreData from './explore.json';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor() { }

  getData(key:string): any {
    switch(key) {
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
    }
  }

  fetchCity(cityName: string): City{
    let nearbyCities = this.getData('searchNearbyCities');
    let tempCity:City = nearbyCities[0];
    nearbyCities.forEach(city => {
      if(city.name === cityName){
        tempCity = city;
      }
    });
    return tempCity;
  }
}
