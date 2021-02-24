import { Component, Input, OnInit } from '@angular/core';
import { Suggestion } from '../suggestion.model';

@Component({
  selector: 'app-item-suggestion',
  templateUrl: './item-suggestion.component.html',
  styleUrls: ['./item-suggestion.component.css']
})
export class ItemSuggestionComponent implements OnInit {

  @Input() suggestion: Suggestion;

  constructor() { }

  ngOnInit(): void {
  }

}
