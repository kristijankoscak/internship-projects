import { Injectable } from '@angular/core';
import { Search } from './search.model';

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

  lastSearch: Search;

  setCurrentSearch(currentSearch: Search): void {
    this.currentSearch = currentSearch;
    this.lastSearch = this.currentSearch;
  }

  getCurrentSearch(): Search {
    return this.currentSearch;
  }
}
