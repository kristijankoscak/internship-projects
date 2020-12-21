import { Injectable } from '@angular/core';
import { Accommodation } from './accommodation/accommodation.model';
import * as accommodationsResponse from './accommodations.json';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  accommodations: Accommodation[] = accommodationsResponse.accommodations;
  filteredAccommodations: Accommodation[] = [];

  constructor() { }

  getFilteredAccommodations(search: Search): Accommodation[]{
    this.filterAccommodations(search);
    return this.filteredAccommodations;
  }
  filterAccommodations(search: Search): void{
    this.filteredAccommodations = [];
    let numberOfGuests: number = +search.adults + +search.kids + +search.babies;
    this.accommodations.find(accommodation => {
      if(accommodation.location === search.place && accommodation.guestCount >= numberOfGuests){
        this.filteredAccommodations.push(accommodation);
      }
    })
  }
  getAccommodationById(id:string): Accommodation{
    let tempAccommodation = this.accommodations.find(
      accommodation => accommodation.id === +id
    );
    return tempAccommodation;
  }
}
