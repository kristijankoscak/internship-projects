import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AccommodationContent } from './accommodation-content.model';

@Component({
  selector: 'app-accommodation-content-item',
  templateUrl: './accommodation-content-item.component.html',
  styleUrls: ['./accommodation-content-item.component.css']
})
export class AccommodationContentItemComponent implements OnInit {

  @Input() accommodationContent: AccommodationContent;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  fetchContentUrl(): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.accommodationContent.imagePath);
  }

}
