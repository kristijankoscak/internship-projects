import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import { City } from './city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  public cities: City[];

  constructor(
    private citiesService: CitiesService
  ) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
  }

}
