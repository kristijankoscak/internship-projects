import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Accommodation } from 'src/app/accommodation/accommodation.model';
import { City } from '../explore-main/cities/city.model';
import { ExploreService } from '../explore.service';
import { Search } from '../../search.model';
import { SearchService } from 'src/app/search.service';
import { AccommodationsService } from 'src/app/accommodations.service';

@Component({
  selector: 'app-explore-result',
  templateUrl: './explore-result.component.html',
  styleUrls: ['./explore-result.component.css']
})
export class ExploreResultComponent implements OnInit {

  sliderHeight: string;
  searchContainerBackground: string;
  currentSearch: Search;
  currentCity: City;
  accommodations: Accommodation[];
  navBarIsVisible: boolean;

  constructor(
    private searchService: SearchService,
    private exploreService: ExploreService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private accommodationsService: AccommodationsService
  ) { }

  ngOnInit(): void {
    this.fetchRouteParameters();
    this.initStartHeights();
    this.fetchCurrentCity();
    this.fetchAccommodations();
  }

  fetchRouteParameters(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.saveCurrentSearch(params as Search);
    });
  }
  saveCurrentSearch(search: Search): void {
    this.currentSearch = search;
    this.searchService.setCurrentSearch(search);
  }
  initStartHeights(): void {
    this.sliderHeight = 'slider-height-default';
    this.searchContainerBackground = 'search-container-bg-default';
    this.navBarIsVisible = false;
  }
  fetchCurrentCity(): void {
    this.currentCity = this.exploreService.fetchCity(this.currentSearch.place);
  }
  fetchMapUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentCity.map);
  }
  fetchAccommodations(): void {
    this.accommodations = this.accommodationsService.getFilteredAccommodations(this.currentSearch);
  }
  fetchDays(): number {
    let days: number;
    const toDate = new Date(this.currentSearch.toDate).getDate();
    const fromDate = new Date(this.currentSearch.fromDate).getDate();
    days = toDate - fromDate;
    return days;
  }

  toggleSlider(): void {
    if (this.sliderHeight === 'slider-height-default') {
      this.sliderHeight = 'slider-height-full';
      this.searchContainerBackground = 'search-container-bg-white';
      this.navBarIsVisible = true;
    }
    else {
      this.sliderHeight = 'slider-height-default';
      this.searchContainerBackground = 'search-container-bg-default';
      this.navBarIsVisible = false;
    }
  }

  navigateToAccommodationDetail(accommodationID: number): void {
    const params = {
      ...this.currentSearch,
      accommodationID: accommodationID
    };
    this.router.navigate(['/accommodation/' + accommodationID], { queryParams: params });

  }
}
