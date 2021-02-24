import { Component, Input, OnInit } from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'app-item-city',
  templateUrl: './item-city.component.html',
  styleUrls: ['./item-city.component.css']
})
export class ItemCityComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit(): void {
  }

}
