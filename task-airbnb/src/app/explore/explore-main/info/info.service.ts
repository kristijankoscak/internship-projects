import { Injectable } from '@angular/core';
import { Info } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private guestInfo: Info[] = [
    { title: 'Što smo sve poduzeli zbog pandemije bolesti COVID-19', description: 'Novosti u pogledu sigurnosti i zaštite' },
    { title: 'Mogućnosti otkazivanja', description: 'Saznajte što je obuhvaćeno' },
    { title: 'Centar za pomoć', description: 'Zatražite pomoć' }
  ];
  private hostInfo: Info[] = [
    { title: 'Poruka Briana Cheskyja', description: 'Poruka našeg glavnog direktora' },
    { title: 'Informacije za domaćine', description: 'Na što sve utječe COVID-19' },
    { title: 'Kako ponuditi smještaj pružat...', description: 'Saznajte kako pomoći' }
  ];
  private helpersInfo: Info[] = [
    { title: 'Smještaji za pružatelje pomoći', description: 'Više informacija o inicijativi' },
    { title: 'Prijavite se', description: 'Potražite smještaj' },
    { title: 'Uplatite donaciju', description: 'Pomozite neprofitnim organizacija...' }
  ];
  private moreInfo: Info[] = [
    { title: 'Novosti o Airbnbu', description: 'Najnovije obavijesti' },
    { title: 'Svjetska zdravstvena organizacija', description: 'Informacije i obavijesti' }
  ];

  getGuestInfo(): Info[]{
    return this.guestInfo;
  }
  getHostInfo(): Info[]{
    return this.hostInfo;
  }
  getHelpersInfo(): Info[]{
    return this.helpersInfo;
  }
  getMoreInfo(): Info[]{
    return this.moreInfo;
  }

  constructor() { }
}
