import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AccommodationsService } from 'src/app/accommodations.service';
import { ExploreCityService } from 'src/app/explore/explore-city/explore-city.service';
import { City } from 'src/app/explore/explore-main/cities/city.model';
import { ExploreService } from 'src/app/explore/explore.service';
import { Search } from 'src/app/search.model';
import { Accommodation } from '../accommodation.model';
import { AccommodationService } from '../accommodation.service';
import { AccommodationContent } from './accommodation-content-item/accommodation-content.model';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.component.html',
  styleUrls: ['./accommodation-detail.component.css']
})
export class AccommodationDetailComponent implements OnInit {

  currentSearch;
  currentAccommodation: Accommodation;
  otherAccommodations: Accommodation[];
  fromDate: NgbDate;
  toDate: NgbDate;
  currentCity:City;

  currentImage: number = 1;
  imageWidth: number;
  imagesCount: number;
  borders: number[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private element: ElementRef,
    private accommodationService: AccommodationService,
    private accommodationsService: AccommodationsService,
    private exploreService: ExploreService,
    private sanitizer: DomSanitizer,
    private exploreCityService: ExploreCityService
    ) { }

  ngOnInit(): void {
    this.fetchRouteParams();
    this.fetchAccommodation();
    this.initImagesData();
    this.fetchAccommodations();
  }
  fetchRouteParams(): void{
    this.route.queryParams.subscribe((params : Params)=> {
      this.currentSearch = params;
    })
    this.fetchDates();
  }
  fetchDates(): void{
    let startDate = new Date(this.currentSearch.fromDate);
    let endDate = new Date(this.currentSearch.toDate);
    this.fromDate = new NgbDate(startDate.getFullYear(),startDate.getMonth()+1,startDate.getDate())
    this.toDate = new NgbDate(endDate.getFullYear(),endDate.getMonth()+1,endDate.getDate())
  }
  fetchAccommodation(): void{
    this.currentAccommodation = this.accommodationsService.getAccommodationById(this.currentSearch.accommodationID);
    this.changeCancelInfo();
  }
  changeCancelInfo(): void{
    const description = 'otkažete do ' + this.fromDate.day+'.'+this.exploreCityService.getMonth(this.fromDate.month) + ' u 11:00 AM' ;
    let accommodationInfo = this.currentAccommodation.info.find(info => info.type === 'cancel');
    this.currentAccommodation.info.find(info => info.type === 'cancel').description = accommodationInfo.description.replace('otkažete',description);
  }

  initImagesData(): void{
    const image = this.element.nativeElement.querySelector('.slide-container');
    this.imageWidth = image.offsetWidth;
    this.imagesCount = this.currentAccommodation.images.length;
    this.initBorders();
  }
  initBorders(): void{
    for(let i = 0; i < this.currentAccommodation.images.length ; i++){
      this.borders.push(i* this.imageWidth);
    }
  }

  handleScroll(data){
    const currentOffset = data.target.scrollLeft;
    if(currentOffset < this.imageWidth){
      this.currentImage = 1;
    }
    else if(currentOffset > this.borders[this.currentImage] && currentOffset < this.borders[this.currentImage+1]){
      this.currentImage++;
    }
    else if(currentOffset < this.borders[this.currentImage-1]){
      this.currentImage--;
    }
    else if(currentOffset >= ((this.imagesCount-1)*this.imageWidth)){
      this.currentImage = this.imagesCount;
    }
  }

  fetchInfo(type:string,description:string){
    return this.accommodationService.getAccommodationInfo(type,description);
  }
  fetchFilteredContent(): AccommodationContent[]{
    return this.accommodationService.getFilteredAccommodationContent(this.currentAccommodation.content);
  }
  fetchMapUrl(): SafeUrl{
    this.fetchCurrentCity();
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentCity.map);
  }
  fetchCurrentCity(): void{
    this.currentCity = this.exploreService.fetchCity('Zagreb');
  }
  fetchAvaliableTime(): string{
    let month = this.exploreCityService.getMonth(this.toDate.month);
    return this.fromDate.day + '. - ' + this.toDate.day +'.'+month;
  }
  fetchAccommodations(): void{
    this.otherAccommodations = this.accommodationsService.getFilteredAccommodations(this.getParams());
  }
  navigateToResultsScreen(): void{
    this.router.navigate(['/explore/results'],{queryParams: this.getParams()})
  }

  getParams(): Search{
    let params: Search = {
      place: this.route.snapshot.queryParams.place,
      searchType: this.route.snapshot.queryParams.searchType,
      fromDate: this.route.snapshot.queryParams.fromDate,
      toDate: this.route.snapshot.queryParams.toDate,
      dateOption: this.route.snapshot.queryParams.dateOption,
      adults:this.route.snapshot.queryParams.adults,
      kids:this.route.snapshot.queryParams.kids,
      babies:this.route.snapshot.queryParams.babies,
      petsAllowed: this.route.snapshot.queryParams.petsAllowed,
    }
    return params;
  }

}
