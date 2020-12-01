import { Component, OnInit } from '@angular/core';
import { Info } from './info.model';
import { InfoService } from './info.service';

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

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.guestInfo = this.infoService.getGuestInfo();
    this.hostInfo = this.infoService.getHostInfo();
    this.helpersInfo = this.infoService.getHelpersInfo();
    this.moreInfo = this.infoService.getMoreInfo();
  }

}
