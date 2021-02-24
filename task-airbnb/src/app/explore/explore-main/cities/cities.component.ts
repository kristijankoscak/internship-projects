import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';
import { City } from './city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  public cities: City[];

  constructor(
    private exploreService: ExploreService
  ) { }

  ngOnInit(): void {
    this.cities = this.exploreService.getData('cities');
  }

}
