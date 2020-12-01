import { Component, OnInit } from '@angular/core';
import { Suggestion } from './suggestion.model';
import { SuggestionsService } from './suggestions.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  suggestions: Suggestion[];

  constructor(private suggestionsService: SuggestionsService) { }

  ngOnInit(): void {
    this.suggestions = this.suggestionsService.getSuggestions();
  }

}
