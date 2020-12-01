import { Component, OnInit } from '@angular/core';
import { Expirience } from './expirience.model';
import { ExpiriencesService } from './expiriences.service';

@Component({
  selector: 'app-expiriences',
  templateUrl: './expiriences.component.html',
  styleUrls: ['./expiriences.component.css']
})
export class ExpiriencesComponent implements OnInit {

  expiriences: Expirience[];

  constructor(private expiriencesService: ExpiriencesService) { }

  ngOnInit(): void {
    this.expiriences = this.expiriencesService.getExpiriences();
  }

}
