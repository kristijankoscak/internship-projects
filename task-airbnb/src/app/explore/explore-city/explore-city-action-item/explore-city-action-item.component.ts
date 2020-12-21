import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/search.service';
import { ExploreCityAction } from '../explore-city.model';

@Component({
  selector: 'app-explore-city-action-item',
  templateUrl: './explore-city-action-item.component.html',
  styleUrls: ['./explore-city-action-item.component.css']
})
export class ExploreCityActionItemComponent implements OnInit {

  @Input() type:ExploreCityAction;

  constructor(
    private searchService: SearchService,
    private activeRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setSearchType(): void {
    console.log('uso')
    console.log(this.router.url)
    this.router.navigate([], {relativeTo: this.activeRoute, queryParams: {
      place: this.activeRoute.snapshot.queryParams.place,
      searchType: this.type.title
    }})
  }

}
