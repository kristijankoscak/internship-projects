import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ExploreCityPerson } from './explore-city/explore-city.model';
import { City } from './explore-main/cities/city.model';
import { DateFromTo, Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  currentSearch: Search = {
    city: '',
    searchType: '',
    dateFromTo: { dateFrom: new NgbDate(0,0,0), dateTo: new NgbDate(0,0,0) },
    dateAccuracy: '',
    persons: [],
    petsAllowed: false
  };

  lastSearch: Search;

  setCity(city: string): void {
    this.currentSearch.city = city;
    console.log(this.currentSearch);
  }
  setSearchType(type: string): void {
    this.currentSearch.searchType = type;
    console.log(this.currentSearch);
  }
  setDateOptions(dateFromTo: DateFromTo, dateAccuracy: string): void {
    this.currentSearch.dateFromTo = dateFromTo;
    this.currentSearch.dateAccuracy = dateAccuracy;
    console.log(this.currentSearch);
  }
  setPersons(persons: ExploreCityPerson[], petsAllowed: boolean): void {
    this.currentSearch.persons = persons;
    this.currentSearch.petsAllowed = petsAllowed;
    console.log(this.currentSearch);
  }

  getCurrentSearch(): Search{
    return this.currentSearch;
  }
}
