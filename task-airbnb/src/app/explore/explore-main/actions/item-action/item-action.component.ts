import { Component, Input, OnInit } from '@angular/core';
import { Action } from '../action.model';

@Component({
  selector: 'app-item-action',
  templateUrl: './item-action.component.html',
  styleUrls: ['./item-action.component.css']
})
export class ItemActionComponent implements OnInit {

  @Input() action: Action;

  constructor() { }

  ngOnInit(): void {
  }

}
