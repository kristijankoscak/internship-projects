import { Component, Input, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/accommodation/accommodation.model';

@Component({
  selector: 'app-accommodation-small-item',
  templateUrl: './accommodation-small-item.component.html',
  styleUrls: ['./accommodation-small-item.component.css']
})
export class AccommodationSmallItemComponent implements OnInit {

  @Input() accommodation: Accommodation;

  constructor() { }

  ngOnInit(): void {
  }

}
