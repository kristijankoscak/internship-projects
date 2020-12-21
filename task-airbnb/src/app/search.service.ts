import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ExploreCityPerson } from './explore/explore-city/explore-city.model';
import { DateFromTo, Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  currentSearch: Search = {
    place: '',
    searchType: '',
    fromDate: new Date(),
    toDate: new Date(),
    dateOption: '',
    adults: null,
    kids: null,
    babies: null,
    petsAllowed: null
  };

  lastSearch: Search ;

  setCurrentSearch(currentSearch: Search){
    this.currentSearch = currentSearch;
    this.lastSearch = this.currentSearch;
  }

  getCurrentSearch(): Search{
    return this.currentSearch;
  }
}
