export class Accommodation{
  id:number;
  type: string;
  location: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  grade: number;
  votesCount: number;
  images: string[];
  guestCount: number;
  country: string;
  info: AccommodationInfo[];
  welcomeMessageCro: string;
  welcomeMessageEng: string;
  room: AccommodationRoom[];
  content: string[];
  street: string;
  review: AccommodationComment[];
  ownerInfo: AccommodationOwner;
}

export class AccommodationInfo {
  type:string;
  description: string;
}

export class AccommodationRoom {
  type:string;
  description;
}

export class AccommodationComment{
  user: string;
  date: string;
  comment: string;
}

export class AccommodationOwner{
  name: string;
  accommodationInfo: string;
  responseRate: number;
  responseTime: string;
}
