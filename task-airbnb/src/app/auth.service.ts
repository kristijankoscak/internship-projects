import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  phoneNumber: string;

  otherLogins: User[] = [
    {
      phoneNumber: '+385921122334',
      userName: 'Marko',
      userSurname: 'Markovic',
      userBirthDate: new Date(1998, 16, 2),
      userEmail: 'mmarkovic@test.com',
      adsDisallowed: true
    }
  ];

  user: User = {
    phoneNumber: '',
    userName: '',
    userSurname: '',
    userBirthDate: null,
    userEmail: '',
    adsDisallowed: null
  };

  constructor() {

  }

  setPhoneNumber(phoneNumber): void{
    this.phoneNumber = phoneNumber;
  }
  setUserData(user): void{
    this.user = user;
  }
  loginViaOtherOptions(): void{
    this.user = this.otherLogins[0];
  }

  getUser(): User{
    return this.user;
  }

  clearUserData(): void{
    this.user.phoneNumber = '';
    this.user.userName = '';
    this.user.userSurname = '';
    this.user.userBirthDate = null;
    this.user.userEmail = '';
    this.user.adsDisallowed =  null;
  }
}
