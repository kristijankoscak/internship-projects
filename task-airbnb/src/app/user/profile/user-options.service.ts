import { Injectable } from '@angular/core';
import { OptionItem } from './option-item.model';

@Injectable({
  providedIn: 'root'
})
export class UserOptionsService {

  accountOptions: OptionItem[] = [
    { name: 'Osobni podaci', desc: '', icon: 'person_outline' },
    { name: 'Plaćanja i isplate', desc: '', icon: 'payment' },
    { name: 'Obavijesti', desc: '', icon: 'notification_important' },
    { name: 'Poslovna putovanja', desc: '', icon: 'domain' },
  ];

  hostingOptions: OptionItem[] = [
    { name: 'Oglasite svoj smještaj', desc: '', icon: 'home' },
    { name: 'Saznajte više o ugošćivanju', desc: '', icon: 'home' },
    { name: 'Ponudite doživljaj', desc: '', icon: 'nature' }
  ];
  inviteOptions: OptionItem[] = [
    { name: 'Invite friends', desc: 'When they join,your friends will get up to 375kn off a qulifying booking.', icon: 'redeem' }
  ];
  supportOptions: OptionItem[] = [
    { name: 'Kako funkcionira airbnb', desc: '', icon: 'language' },
    { name: 'Centar za sigurnost', desc: 'Saznajte više o podršci, alatima i informacijam koje vam jamče sigurnost.', icon: 'local_hospital' },
    { name: 'Obratite se službi za podršku susjedstva', desc: 'Obavijestite naš tim o potencijalnim problemima koji se odnose na iznajmljivanje stambenog prostora na vašem području', icon: 'help_outline' },
    { name: 'Zatražite pomoć', desc: '', icon: 'help_outline' },
    { name: 'Pošaljite nam svoj komentar', desc: '', icon: 'event' },
  ];
  legalOptions: OptionItem[] = [
    { name: 'Uvjeti korištenja', desc: '', icon: 'insert_drive_file' },
    { name: 'Postavke privatnosti', desc: '', icon: 'lock' },
    { name: 'Odjava', desc: '', icon: '' }
  ];


  constructor() { }

  getAccountOptions(): OptionItem[] {
    return this.accountOptions;
  }
  getHostingOptions(): OptionItem[] {
    return this.hostingOptions;
  }
  getInviteOptions(): OptionItem[] {
    return this.inviteOptions;
  }
  getSupportOptions(): OptionItem[] {
    return this.supportOptions;
  }
  getLegalOptions(): OptionItem[] {
    return this.legalOptions;
  }
}
