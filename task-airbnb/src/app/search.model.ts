import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ExploreCityPerson } from './explore/explore-city/explore-city.model';

export interface DateFromTo {
  dateFrom: NgbDate;
  dateTo: NgbDate;
}

export interface Search {
  place: string;
  searchType: string;
  fromDate: Date;
  toDate: Date;
  dateOption: string;
  adults:number;
  kids:number;
  babies:number;
  petsAllowed: boolean
}
