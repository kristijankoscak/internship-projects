import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Accommodation } from 'src/app/accommodation/accommodation.model';
import { AccommodationService } from 'src/app/accommodation/accommodation.service';
import { City } from '../explore-main/cities/city.model';
import { ExploreService } from '../explore-search/explore.service';
import { Search } from '../search.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-explore-result',
  templateUrl: './explore-result.component.html',
  styleUrls: ['./explore-result.component.css']
})
export class ExploreResultComponent implements OnInit {

  sliderHeight: string;
  searchContainerBackground: string;
  currentCity: City;
  currentSearch: Search;
  accommodations: Accommodation[];

  constructor(
    private searchService: SearchService,
    private exploreService: ExploreService,
    private route: ActivatedRoute,
    private element: ElementRef,
    private sanitizer: DomSanitizer,
    private accommodationService: AccommodationService
  ) { }

  ngOnInit(): void {
    this.sliderHeight = 'slider-height-default';
    this.searchContainerBackground = 'search-container-bg-default'
    this.fetchSearchData();
    this.fetchCurrentCity();
    this.fetchAccommodations();
  }

  fetchSearchData(): void{
    this.currentSearch = this.searchService.getCurrentSearch();
  }
  fetchCurrentCity(): void{
    this.currentCity = this.exploreService.fetchCity(this.route.snapshot.params['city']);
  }
  fetchMapUrl(): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentCity.map);
  }
  fetchAccommodations(): void{
    this.accommodations = this.accommodationService.getAccommodations();
  }
  toggleSlider(): void {
    if (this.sliderHeight === 'slider-height-default') {
      this.sliderHeight = 'slider-height-full';
      this.searchContainerBackground = 'search-container-bg-white';
    }
    else {
      this.sliderHeight = 'slider-height-default';
      this.searchContainerBackground = 'search-container-bg-default';
    }
  }
}
