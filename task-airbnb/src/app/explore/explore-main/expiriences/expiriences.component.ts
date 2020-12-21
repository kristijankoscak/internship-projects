import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';
import { Expirience } from './expirience.model';

@Component({
  selector: 'app-expiriences',
  templateUrl: './expiriences.component.html',
  styleUrls: ['./expiriences.component.css']
})
export class ExpiriencesComponent implements OnInit {

  expiriences: Expirience[];

  constructor(private exploreService: ExploreService) { }

  ngOnInit(): void {
    this.expiriences = this.exploreService.getData('expiriences');
  }

}
