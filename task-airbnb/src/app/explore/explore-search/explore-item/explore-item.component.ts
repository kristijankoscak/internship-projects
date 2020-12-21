import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/search.service';
import { City } from '../../explore-main/cities/city.model';

@Component({
  selector: 'app-explore-item',
  templateUrl: './explore-item.component.html',
  styleUrls: ['./explore-item.component.css']
})
export class ExploreItemComponent implements OnInit {

  @Input() city: City;

  constructor(
    private searchService: SearchService,
    private activeRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navigateToExploreCity(): void{
    this.handleManualSearch();
    this.router.navigate(
      ['../city'], {relativeTo: this.activeRoute, queryParams: {
        place: this.city.name
      }}
    );
  }

  handleManualSearch(): void{
    if(this.city.name.includes(',')){
      this.city.name = this.city.name.split(',')[0];
    }
  }

}
