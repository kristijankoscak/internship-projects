import { Component, Input, OnInit } from '@angular/core';
import { Expirience } from '../expirience.model';

@Component({
  selector: 'app-item-expirience',
  templateUrl: './item-expirience.component.html',
  styleUrls: ['./item-expirience.component.css']
})
export class ItemExpirienceComponent implements OnInit {

  @Input() expirience: Expirience;

  constructor() { }

  ngOnInit(): void {
  }

}
