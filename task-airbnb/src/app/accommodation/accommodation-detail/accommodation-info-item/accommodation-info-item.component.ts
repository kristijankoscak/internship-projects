import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AccommodationInfo } from './accommodation-info.model';

@Component({
  selector: 'app-accommodation-info-item',
  templateUrl: './accommodation-info-item.component.html',
  styleUrls: ['./accommodation-info-item.component.css']
})
export class AccommodationInfoItemComponent implements OnInit {

  @Input() info : AccommodationInfo;
  // @Input() endDate: NgbDate;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

  }

  fetchIconUrl(): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.info.imagePath);
  }

}
