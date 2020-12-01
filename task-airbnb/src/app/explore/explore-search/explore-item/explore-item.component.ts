import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../explore-main/cities/city.model';

@Component({
  selector: 'app-explore-item',
  templateUrl: './explore-item.component.html',
  styleUrls: ['./explore-item.component.css']
})
export class ExploreItemComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit(): void {
  }

}
