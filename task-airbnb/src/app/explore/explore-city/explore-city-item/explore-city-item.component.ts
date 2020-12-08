import { Component, Input, OnInit } from '@angular/core';
import { ExploreCity } from '../explore-city.model';

@Component({
  selector: 'app-explore-city-item',
  templateUrl: './explore-city-item.component.html',
  styleUrls: ['./explore-city-item.component.css']
})
export class ExploreCityItemComponent implements OnInit {

  @Input() option:ExploreCity;

  constructor() { }

  ngOnInit(): void {
  }

}
