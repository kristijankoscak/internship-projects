import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';
import { Info } from './info.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class INFOComponent implements OnInit {

  guestInfo: Info[];
  hostInfo: Info[];
  helpersInfo: Info[];
  moreInfo: Info[];

  constructor(private exploreService: ExploreService) { }

  ngOnInit(): void {
    this.guestInfo = this.exploreService.getData('guestInfo');
    this.hostInfo = this.exploreService.getData('hostInfo');
    this.helpersInfo = this.exploreService.getData('helpersInfo');
    this.moreInfo = this.exploreService.getData('moreInfo');
  }

}
