import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';
import { Suggestion } from './suggestion.model';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  suggestions: Suggestion[];

  constructor(private exploreService: ExploreService) { }

  ngOnInit(): void {
    this.suggestions = this.exploreService.getData('suggestions');
  }

}
