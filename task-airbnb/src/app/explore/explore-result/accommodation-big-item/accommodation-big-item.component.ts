import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-big-item',
  templateUrl: './accommodation-big-item.component.html',
  styleUrls: ['./accommodation-big-item.component.css']
})
export class AccommodationBigItemComponent implements OnInit {

  currentActive: number = 0;

  accommodationsImage = [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvcYSxQQmDQXaYVzh7VPXDwUI-lscsitxdQ&usqp=CAU',
    'https://cdn.mos.cms.futurecdn.net/urnQmjBrp6U2nnAqzzf2gb-768-80.jpg',
    'https://i.guim.co.uk/img/media/780338b4a60538843317f90a883e8e011c77b6ea/0_300_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=717bf05cf79345edc8e9d4422be37b99'
  ]

  imageWidth: number;
  imageHalfWidth: number;
  slideContainerWidth: number;
  borders : number[] = [];

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    this.initSlideAccommodationsData();
  }

  initSlideAccommodationsData(){
    const sliderContainer = this.element.nativeElement.querySelector('.accommodation-slide-container');
    console.log(sliderContainer.offsetWidth)
    this.imageWidth = sliderContainer.offsetWidth;
    this.imageHalfWidth = this.imageWidth / 2;
    this.slideContainerWidth = this.imageWidth * this.accommodationsImage.length;
    this.initBorders();
  }
  initBorders(){
    for(let i = 0; i < this.accommodationsImage.length ;i++){
      this.borders.push(this.imageHalfWidth + i*this.imageWidth);
    }
  }


  nextImage(i:number): void{
    this.currentActive = i;
  }

  handleScroll(data){
    const currentOffset = data.target.scrollLeft;
    console.log(currentOffset)
    if(this.currentActive === 0 && currentOffset < this.borders[this.currentActive]){
      console.log('naprijed 1')
      this.currentActive = 0;
    }
    else if(currentOffset <= this.borders[this.currentActive-1]){
      console.log('nazad 1')
      this.currentActive = this.currentActive - 1;
    }
    else if(currentOffset > this.borders[this.currentActive] && currentOffset < this.borders[this.currentActive+1]){
      console.log('naprijed 2')
      this.currentActive = this.currentActive + 1;
    }
    else if(this.currentActive === (this.accommodationsImage.length-1) && currentOffset < this.borders[this.currentActive]){
      console.log('nazad 2')
      this.currentActive = this.accommodationsImage.length-1;
    }
    else if(this.currentActive === (this.accommodationsImage.length-1) && currentOffset > this.borders[this.currentActive]){
      console.log('naprijed 3')
      this.currentActive = this.accommodationsImage.length-1;
    }
  }
}
