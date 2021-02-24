import { Component, Input, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';
import { ExploreCityPerson } from '../explore-city.model';

@Component({
  selector: 'app-explore-city-persons-item',
  templateUrl: './explore-city-persons-item.component.html',
  styleUrls: ['./explore-city-persons-item.component.css']
})
export class ExploreCityPersonsItemComponent implements OnInit {

  @Input() personType: ExploreCityPerson;

  constructor(private exploreService: ExploreService) { }

  ngOnInit(): void {
  }

  add(): void{
    this.personType.count++;
    this.exploreService.personCountChanged.emit(true);
  }
  minus(): void{
    this.personType.count--;
    this.exploreService.personCountChanged.emit(true);
  }

}
