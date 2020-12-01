import { Injectable } from '@angular/core';
import { Action } from './action.model';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private actions: Action[] = [
    { image: 'https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=720', description: 'Ponudite smještaj' },
    { image: 'https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=720', description: 'Ponudite online doživljaj' },
    { image: 'https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=720', description: 'Ponudite doživljaj' }
  ];

  constructor() { }

  getActions(): Action[] {
    return this.actions;
  }
}
