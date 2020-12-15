import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ExploreCityPerson } from './explore-city/explore-city.model';

export interface DateFromTo {
  dateFrom: NgbDate;
  dateTo: NgbDate;
}

export interface Search {
  city: string;
  searchType: string;
  dateFromTo: DateFromTo;
  dateAccuracy: string;
  persons: ExploreCityPerson[];
  petsAllowed: boolean;
}
