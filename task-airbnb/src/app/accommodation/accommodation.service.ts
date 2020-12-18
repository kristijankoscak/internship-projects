import { Injectable } from '@angular/core';
import { Accommodation } from './accommodation.model';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  accommodations : Accommodation[] = [
    {
      id:0,
      type: 'Cijeli kondominij',
      location: 'Zagreb',
      description: 'COMFORTZONE1 ZAGREB CENTER',
      oldPrice: 335,
      newPrice: 241,
      grade: 4.84,
      votesCount: 236,
      images: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvcYSxQQmDQXaYVzh7VPXDwUI-lscsitxdQ&usqp=CAU',
        'https://cdn.mos.cms.futurecdn.net/urnQmjBrp6U2nnAqzzf2gb-768-80.jpg',
        'https://i.guim.co.uk/img/media/780338b4a60538843317f90a883e8e011c77b6ea/0_300_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=717bf05cf79345edc8e9d4422be37b99'
      ]
    },
    {
      id:1,
      type: 'Cijeli stan',
      location: 'Zagreb',
      description: 'S&L REPUBLIC2 ZAGREB CENTER',
      oldPrice: null,
      newPrice: 241,
      grade: 4.72,
      votesCount: 32,
      images: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvcYSxQQmDQXaYVzh7VPXDwUI-lscsitxdQ&usqp=CAU',
        'https://cdn.mos.cms.futurecdn.net/urnQmjBrp6U2nnAqzzf2gb-768-80.jpg',
        'https://i.guim.co.uk/img/media/780338b4a60538843317f90a883e8e011c77b6ea/0_300_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=717bf05cf79345edc8e9d4422be37b99',
        'https://cdn.mos.cms.futurecdn.net/urnQmjBrp6U2nnAqzzf2gb-768-80.jpg',
        'https://i.guim.co.uk/img/media/780338b4a60538843317f90a883e8e011c77b6ea/0_300_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=717bf05cf79345edc8e9d4422be37b99'
      ]
    },
    {
      id:2,
      type: 'Cijeli kondominij',
      location: 'Zagreb',
      description: 'COMFORTZONE1 ZAGREB CENTER',
      oldPrice: 335,
      newPrice: 241,
      grade: 4.84,
      votesCount: 236,
      images: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvcYSxQQmDQXaYVzh7VPXDwUI-lscsitxdQ&usqp=CAU',
        'https://cdn.mos.cms.futurecdn.net/urnQmjBrp6U2nnAqzzf2gb-768-80.jpg',
        'https://i.guim.co.uk/img/media/780338b4a60538843317f90a883e8e011c77b6ea/0_300_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=717bf05cf79345edc8e9d4422be37b99'
      ]
    },{
      id:3,
      type: 'Soba u boutique hotelu',
      location: 'Zagreb',
      description: 'Rooms at Zajčeva 34 - Economy Double Room',
      oldPrice: 312,
      newPrice: 241,
      grade: 5.00,
      votesCount: 11,
      images: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-ideas-rds-work-queens-road-08-1593114639.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvcYSxQQmDQXaYVzh7VPXDwUI-lscsitxdQ&usqp=CAU'
      ]
    }
  ];

  constructor() { }


  getAccommodations(): Accommodation[]{
    return this.accommodations;
  }
}
