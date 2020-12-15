import { Injectable } from '@angular/core';
import { City } from '../explore-main/cities/city.model';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  private nearbyCities: City[] = [
    { image: 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720', name: 'Split', distance: '15 min ', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46293.486860912046!2d16.41406403682449!3d43.51604109996401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355dfc6bbcf517%3A0xa1798ff631b49f98!2s21000%2C%20Split!5e0!3m2!1shr!2shr!4v1607637553098!5m2!1shr!2shr'},
    { image: 'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720', name: 'Rovinj', distance: '6 h ' ,map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90162.83513108362!2d13.600657043162563!3d45.073856025399685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cbf634d5c86ff%3A0xffc69f61c598ae53!2sRovinj!5e0!3m2!1shr!2shr!4v1607637612315!5m2!1shr!2shr'},
    { image: 'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720', name: 'Zagreb', distance: '5 h' , map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177891.77679597997!2d15.824248265386553!3d45.84011036381781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb!5e0!3m2!1shr!2shr!4v1607637203421!5m2!1shr!2shr'},
    { image: 'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720', name: 'Makarska', distance: '1.5 h', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46452.9656025348!2d16.99904983519239!3d43.30776226654876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134aee6e8952db23%3A0xa922454b4400a59b!2s21300%2C%20Makarska!5e0!3m2!1shr!2shr!4v1607637645922!5m2!1shr!2shr' },
    { image: 'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720', name: 'Rijeka', distance: '5 h', map:'' },
    { image: 'https://a0.muscache.com/im/pictures/7c309a70-bc93-4603-8d3b-9d4cd9bf75b2.jpg?im_q=medq&im_w=720', name: 'Dubrovnik', distance: '7.5 h', map:'' },
    { image: 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720', name: 'Zadar', distance: '3.5 h', map:'' },
    { image: 'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720', name: 'Pula', distance: '3.5 h', map:'' }
  ];

  private searchResults: City[] = [
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Vienna,Austrija', distance: '' , map:'' },
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Vinkovci,Hrvatska', distance: '' , map:'' },
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Vinkovićeva ulica,Zagreb', distance: '' , map:'' },
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Vinkovačka ulica,Split', distance: '' , map:'' },
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Osijek,Hrvatska', distance: '' , map:'' },
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Osijek-Baranja County,Croatia', distance: '' , map:'' },
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Oslo', distance: '' , map:'' },
    { image: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png', name: 'Zagreb,Hrvatska', distance: '' , map:'' }
  ];

  constructor() { }

  getNearbyCities(): City[] {
    return this.nearbyCities;
  }
  getSearchCities(): City[] {
    return this.searchResults;
  }

  fetchCity(cityName: string): City{
    return this.nearbyCities.find(city => {
      return city.name === cityName;
    })
  }
}
