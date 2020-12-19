import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AccommodationInfo } from './accommodation-info.model';

@Component({
  selector: 'app-accommodation-info-item',
  templateUrl: './accommodation-info-item.component.html',
  styleUrls: ['./accommodation-info-item.component.css']
})
export class AccommodationInfoItemComponent implements OnInit {

  @Input() info : AccommodationInfo;
  @Input() accommodationType: string;
  @Input() endDate: NgbDate;

  description:string;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.handleAccommodationType();
  }

  handleAccommodationType(): void{
    // if(this.info.type === 'home' ){
    //   this.info.description = this.info.description.replace('prostor', 'prostor ('+this.accommodationType+') ');
    // }
    // else if(this.info.type === 'cancel'){
    //   const description = 'do ' + this.endDate.day+'.'+this.endDate.month + ' u 11:00 AM' ;
    //   this.info.description = this.info.description.replace('otkažete',description);
    // }
  }

  fetchIconUrl(): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.info.imagePath);
  }

}
