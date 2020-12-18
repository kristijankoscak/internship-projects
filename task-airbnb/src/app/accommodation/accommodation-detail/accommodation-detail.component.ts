import { Component, ElementRef, OnInit } from '@angular/core';
import { AccommodationService } from '../accommodation.service';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.component.html',
  styleUrls: ['./accommodation-detail.component.css']
})
export class AccommodationDetailComponent implements OnInit {

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
    private accomodationService: AccommodationService
    ) { }

  ngOnInit(): void {
    this.initImagesData();
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

}
