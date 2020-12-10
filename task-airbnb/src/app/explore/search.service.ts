import { Injectable } from '@angular/core';
import { City } from './explore-main/cities/city.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private nearbyCities: City[]= [
    { image: 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720', name: 'Split', distance: '15 min ' },
    { image: 'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720', name: 'Rovinj', distance: '6 h ' },
    { image: 'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720', name: 'Zagreb', distance: '5 h' },
    { image: 'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720', name: 'Makarska', distance: '1.5 h' },
    { image: 'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720', name: 'Rijeka', distance: '5 h' },
    { image: 'https://a0.muscache.com/im/pictures/7c309a70-bc93-4603-8d3b-9d4cd9bf75b2.jpg?im_q=medq&im_w=720', name: 'Dubrovnik', distance: '7.5 h' },
    { image: 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720', name: 'Zadar', distance: '3.5 h' },
    { image: 'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720', name: 'Pula', distance: '3.5 h' }
  ];

  private searchResults: City[]=[
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Vienna,Austrija',distance:''},
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Vinkovci,Hrvatska',distance:''},
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Vinkovićeva ulica,Zagreb',distance:''},
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Vinkovačka ulica,Split',distance:''},
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Osijek,Hrvatska',distance:''},
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Osijek-Baranja County,Croatia',distance:''},
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Oslo',distance:''},
    { image:'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png',name: 'Zagreb,Hrvatska',distance:''}
  ]

  constructor() { }

  getNearbyCities(): City[]{
    return this.nearbyCities;
  }
  getSearchCities(): City[]{
    return this.searchResults;
  }
}
