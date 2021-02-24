import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user.model';
import { OptionItem } from './option-item.model';
import { UserOptionsService } from './user-options.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedUser: User;

  accountOptions: OptionItem[];
  hostingOptions: OptionItem[];
  inviteOptions: OptionItem[];
  supportOptions: OptionItem[];
  legalOptions: OptionItem[];

  constructor(
    private userOptionsService: UserOptionsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.accountOptions = this.userOptionsService.getOptions('accountOptions');
    this.hostingOptions = this.userOptionsService.getOptions('hostingOptions');
    this.inviteOptions = this.userOptionsService.getOptions('inviteOptions');
    this.supportOptions = this.userOptionsService.getOptions('supportOptions');
    this.legalOptions = this.userOptionsService.getOptions('legalOptions');
    this.loggedUser = this.authService.getUser();
  }
}
