import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';
import { ExploreCityAction } from '../explore-city.model';

@Component({
  selector: 'app-explore-city-action-item',
  templateUrl: './explore-city-action-item.component.html',
  styleUrls: ['./explore-city-action-item.component.css']
})
export class ExploreCityActionItemComponent implements OnInit {

  @Input() option:ExploreCityAction;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  setSearchType(): void {
    this.searchService.setSearchType(this.option.title);
  }

}
