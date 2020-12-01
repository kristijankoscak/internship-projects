import { Injectable } from '@angular/core';
import { Expirience } from './expirience.model';

@Injectable({
  providedIn: 'root'
})
export class ExpiriencesService {

  private expiriences: Expirience[] = [
    { image: 'https://a0.muscache.com/im/pictures/d1d7c836-e44a-429b-9f4c-aa03c381c0b9.jpg?im_q=lowq&im_w=720', description: 'Viljušci za juhu na šangajski način' },
    { image: 'https://a0.muscache.com/im/pictures/58ac59bc-43e3-442e-9f4c-c12a36ee41ab.jpg?im_q=medq&im_w=720', description: 'Feminizam uz uličnu umjetnost i grafite' },
    { image: 'https://a0.muscache.com/im/pictures/6ca0b5de-8e0a-4116-b190-5cccff497108.jpg?im_q=medq&im_w=720', description: 'Iza kulisa s njujorškim mađioničarom' },
    { image: 'https://a0.muscache.com/im/pictures/48f2a6c8-2875-48aa-8dcf-08e22a986466.jpg?im_q=medq&im_w=720', description: 'Kokteli i stereotipi u vezi sa spolovima' }
  ];

  constructor() { }

  getExpiriences(): Expirience[]{
    return this.expiriences;
  }
}
