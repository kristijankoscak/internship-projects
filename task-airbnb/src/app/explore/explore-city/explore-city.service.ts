import { EventEmitter, Injectable } from '@angular/core';
import { ExploreCityAction, ExploreCityPerson } from './explore-city.model';

@Injectable({
  providedIn: 'root'
})
export class ExploreCityService {

  personCountChanged: EventEmitter<boolean> = new EventEmitter();

  private actions: ExploreCityAction[] = [
    { title: 'Pronađite smještaj', description: 'Cijeli smještaji, sobe i još mnogo toga', image: 'https://a0.muscache.com/4ea/air/v2/pictures/02a9e2fa-1d42-409a-b040-99e8eeeb0448.jpg' },
    { title: 'Pronađite smještaj u kojem možete boraviti mjesec dana', description: 'Smještaji za boravak od 4 i više tjedana', image: 'https://a0.muscache.com/4ea/air/v2/pictures/02a9e2fa-1d42-409a-b040-99e8eeeb0448.jpg' },
    { title: 'Pronađite doživljaj', description: 'Aktivnosti koje vode lokalci', image: 'https://a0.muscache.com/4ea/air/v2/pictures/d0652aac-13ac-4378-a97e-b10d2289d97e.jpg' },
  ];
  private personTypes: ExploreCityPerson[] = [
    { type:'Odrasli', description:'Najmanje 13 god.',count: 0},
    { type:'Djeca', description:'Dob: 2-12',count: 0},
    { type:'Bebe', description:'Mlađi od 2',count: 0}
  ]

  constructor() { }

  getActions(): ExploreCityAction[]{
    return this.actions;
  }
  getPersonTypes(): ExploreCityPerson[]{
    return this.personTypes;
  }
}
