import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../info.model';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  @Input() info: Info;

  constructor() { }

  ngOnInit(): void {
  }

}
