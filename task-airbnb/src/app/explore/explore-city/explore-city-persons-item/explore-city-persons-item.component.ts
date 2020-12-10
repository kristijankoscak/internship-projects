import { Component, Input, OnInit } from '@angular/core';
import { ExploreCityPerson } from '../explore-city.model';
import { ExploreCityService } from '../explore-city.service';

@Component({
  selector: 'app-explore-city-persons-item',
  templateUrl: './explore-city-persons-item.component.html',
  styleUrls: ['./explore-city-persons-item.component.css']
})
export class ExploreCityPersonsItemComponent implements OnInit {

  @Input() personType: ExploreCityPerson;

  constructor(private exploreCityService: ExploreCityService) { }

  ngOnInit(): void {
  }

  add(){
    this.personType.count++;
    this.exploreCityService.personCountChanged.emit(true);
  }
  minus(){
    this.personType.count--;
    this.exploreCityService.personCountChanged.emit(true);
  }

}
