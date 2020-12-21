import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/accommodation/accommodation.model';

@Component({
  selector: 'app-accommodation-big-item',
  templateUrl: './accommodation-big-item.component.html',
  styleUrls: ['./accommodation-big-item.component.css']
})
export class AccommodationBigItemComponent implements OnInit {

  @Input() days: number;
  @Input() accommodation: Accommodation;

  currentActive = 0;

  accommodationImages: string[];

  imageWidth: number;
  imageHalfWidth: number;
  slideContainerWidth: number;
  borders: number[] = [];

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    this.initAccommodationImages();
    this.initSlideAccommodationsData();
  }

  initAccommodationImages(): void {
    this.accommodationImages = this.accommodation.images;
  }

  initSlideAccommodationsData(): void {
    const sliderContainer = this.element.nativeElement.querySelector('.accommodation-slide-container');
    this.imageWidth = sliderContainer.offsetWidth;
    this.imageHalfWidth = this.imageWidth / 2;
    this.slideContainerWidth = this.imageWidth * this.accommodationImages.length;
    this.initBorders();
  }
  initBorders(): void {
    for (let i = 0; i < this.accommodationImages.length; i++) {
      this.borders.push(this.imageHalfWidth + i * this.imageWidth);
    }
  }

  nextImage(i: number): void {
    this.currentActive = i;
  }

  handleScroll(data): void {
    const currentOffset = data.target.scrollLeft;
    if (this.currentActive === 0 && currentOffset < this.borders[this.currentActive]) {
      this.currentActive = 0;
    }
    else if (currentOffset <= this.borders[this.currentActive - 1]) {
      this.currentActive = this.currentActive - 1;
    }
    else if (currentOffset > this.borders[this.currentActive] && currentOffset < this.borders[this.currentActive + 1]) {
      this.currentActive = this.currentActive + 1;
    }
    else if (this.currentActive === (this.accommodationImages.length - 1) && currentOffset < this.borders[this.currentActive]) {
      this.currentActive = this.accommodationImages.length - 1;
    }
    else if (this.currentActive === (this.accommodationImages.length - 1) && currentOffset > this.borders[this.currentActive]) {
      this.currentActive = this.accommodationImages.length - 1;
    }
  }
}
