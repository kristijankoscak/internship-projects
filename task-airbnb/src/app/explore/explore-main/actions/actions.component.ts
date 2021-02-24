import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';
import { Action } from './action.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  actions: Action[];

  constructor(private exploreService: ExploreService) { }

  ngOnInit(): void {
    this.actions = this.exploreService.getData('actions');
  }

}
