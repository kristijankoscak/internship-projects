import { Injectable } from '@angular/core';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities: City[] = [
    { image: 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720', name: 'Split', distance: '15 min', map:'' },
    { image: 'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720', name: 'Rovinj', distance: '6 h ', map:'' },
    { image: 'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720', name: 'Zagreb', distance: '5 h' , map:''},
    { image: 'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720', name: 'Makarska', distance: '1.5 h', map:'' },
    { image: 'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720', name: 'Rijeka', distance: '5 h' , map:''},
    { image: 'https://a0.muscache.com/im/pictures/7c309a70-bc93-4603-8d3b-9d4cd9bf75b2.jpg?im_q=medq&im_w=720', name: 'Crikvenica', distance: '5 h' , map:''}
  ];

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }
}
