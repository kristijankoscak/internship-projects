import { Component, Input, OnInit } from '@angular/core';
import { Accommodation } from '../../accommodation.model';

@Component({
  selector: 'app-other-accommodation-item',
  templateUrl: './other-accommodation-item.component.html',
  styleUrls: ['./other-accommodation-item.component.css']
})
export class OtherAccommodationItemComponent implements OnInit {

  @Input() accommodation: Accommodation;
  @Input() days: number;
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

  getRoomDescription(): string {
    this.handleLenght(this.accommodation.room[0].description);
    return this.description + '...';
  }
  handleLenght(text: string): void {
    if (text.length > 10) {
      this.description = text.slice(0, 10);
    }
  }
}
