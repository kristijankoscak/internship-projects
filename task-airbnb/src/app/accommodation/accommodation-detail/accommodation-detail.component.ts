import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { City } from 'src/app/explore/explore-main/cities/city.model';
import { ExploreService } from 'src/app/explore/explore-search/explore.service';
import { Accommodation } from '../accommodation.model';
import { AccommodationService } from '../accommodation.service';
import { AccommodationContent } from './accommodation-content-item/accommodation-content.model';
import { AccommodationInfo } from './accommodation-info-item/accommodation-info.model';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.component.html',
  styleUrls: ['./accommodation-detail.component.css']
})
export class AccommodationDetailComponent implements OnInit {

  otherAccommodations: Accommodation[];

  type: string = 'Kondominij';
  endDate: NgbDate = new NgbDate(2020,12,20);
  accommodationInformations = [
    {
      type:'clean',
      description:''
    },
    {
      type:'location',
      description:''
    },
    {
      type:'comming',
      description:'Samostalni ulazak u smještaj uz pomoć digitalne brave.'
    },
    {
      type:'cancel',
      description: 'Ako otkažete, dobit ćete povrat cjelokupnog iznosa za preostala noćenja 24 h nakon otkazivanja, umanjen za naknadu za usluge i naknadu za čišćenje.'
    },
    {
      type:'house-rules',
      description: 'Domaćin ne dozvoljava organiziranje zabava ni pušenje.'
    },
  ]
  accommodationContent=[
    'Wi-Fi','Kuhinja','Glačalo','Grijanje','Sušilo za kosu'
  ]
  currentCity:City;

  accommodationImages= [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg'
  ]

  currentImage: number = 1;
  imageWidth: number;
  imagesCount: number;
  borders: number[] = [];


  constructor(
    private element: ElementRef,
    private accommodationService: AccommodationService,
    private exploreService: ExploreService,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.initImagesData();
    this.fetchAccommodations();
  }
  initImagesData(): void{
    const image = this.element.nativeElement.querySelector('.slide-container');
    console.log(image.offsetWidth) // width...
    this.imageWidth = image.offsetWidth;
    this.imagesCount = this.accommodationImages.length;
    this.initBorders();
  }
  initBorders(): void{
    for(let i = 0; i < this.accommodationImages.length ; i++){
      this.borders.push(i* this.imageWidth);
    }
  }

  handleScroll(data){
    const currentOffset = data.target.scrollLeft;
    if(currentOffset < this.imageWidth){  // first image
      console.log('1')
      this.currentImage = 1;
    }
    else if(currentOffset > this.borders[this.currentImage] && currentOffset < this.borders[this.currentImage+1]){
      console.log('izmedu...')
      this.currentImage++;
    }
    else if(currentOffset < this.borders[this.currentImage-1]){
      console.log('nazad 2')
      this.currentImage--;
    }
    else if(currentOffset >= ((this.imagesCount-1)*this.imageWidth)){  // last image
      console.log('4')
      this.currentImage = this.imagesCount;
    }
    console.log(data.target.scrollLeft);
  }

  fetchInfo(type:string,description:string){
    return this.accommodationService.getAccommodationInfo(type,description);
  }
  fetchFilteredContent(): AccommodationContent[]{
    return this.accommodationService.getFilteredAccommodationContent(this.accommodationContent);
  }
  fetchMapUrl(): SafeUrl{
    this.fetchCurrentCity();
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentCity.map);
  }
  fetchCurrentCity(): void{
    this.currentCity = this.exploreService.fetchCity('Zagreb');
  }
  fetchAccommodations(): void{
    this.otherAccommodations = this.accommodationService.getAccommodations();
  }

}
