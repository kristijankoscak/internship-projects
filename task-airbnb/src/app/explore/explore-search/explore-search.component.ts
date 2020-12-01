import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { City } from '../explore-main/cities/city.model';
import { ExploreService } from './explore.service';


@Component({
  selector: 'app-explore-search',
  templateUrl: './explore-search.component.html',
  styleUrls: ['./explore-search.component.css']
})
export class ExploreSearchComponent implements OnInit {

  gpsNearbyPlace: City = { image: 'https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq', name: 'Pogledajte obližnje destinacije', distance: '' };
  nearbyCities: City[];
  searchCities: City[];

  closeButtonVisible = false;
  nearbyCitiesVisible = true;

  input = '';

  citiesControl = new FormControl();
  filteredCities: Observable<City[]>;

  @ViewChild('inputSearch') inputSearch: ElementRef;

  constructor(private exploreServices: ExploreService) {
    this.filteredCities = this.citiesControl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this._filterCities(city) : this.searchCities.slice())
      );
  }
  ngOnInit(): void {

    this.nearbyCities = this.exploreServices.getNearbyCities();
    this.searchCities = this.exploreServices.getSearchCities();
  }
  toggleCloseButton(data): void {
    if (data !== '') {
      this.closeButtonVisible = true;
    }
    else {
      this.closeButtonVisible = false;
    }
  }
  displayNearbyCities(state): void {
    this.nearbyCitiesVisible = state;

  }
  closeFilteredCities(): void {
    this.closeButtonVisible = false;
    this.nearbyCitiesVisible = true;
    this.input = '';
  }
  private _filterCities(value: string): City[] {
    const filterValue = value.toLowerCase();
    return this.searchCities.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }


}
