import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ExploreCityAction, ExploreCityPerson } from './explore-city.model';
import { ExploreCityService } from './explore-city.service';

// TO DO - switch calendar language

@Component({
  selector: 'app-explore-city',
  templateUrl: './explore-city.component.html',
  styleUrls: ['./explore-city.component.css']
})
export class ExploreCityComponent implements OnInit {

  actionCounter = 0;
  actions: string[] = ['Što tražite?', 'Kad dolazite?','Koliko ljudi dolazi?'];
  currentAction: string;

  currentCity: string;
  options: ExploreCityAction[];
  sliderHeight: string;

  model: NgbDateStruct;
  date: { year: number, month: number };
  hoveredDate: NgbDate | null = null;
  todayDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  dateOption: string = '';

  dateIsPicked: boolean;

  personTypes: ExploreCityPerson[];
  personsValid = false;


  constructor(
    private exploreCityService: ExploreCityService,
    private route: ActivatedRoute,
    private router: Router,
    private element: ElementRef,
    private calendar: NgbCalendar

  ) { }

  ngOnInit(): void {
    this.initStartScreen();
    this.todayDate = this.calendar.getToday();
    this.initPersonTypeScreen();
    this.initPersonCountChange();
  }

  initStartScreen(): void {
    this.currentAction = this.actions[this.actionCounter];
    this.currentCity = this.route.snapshot.params['city'];
    this.options = this.exploreCityService.getActions();
    this.sliderHeight = 'slider-height-default';
  }

  initPersonTypeScreen(): void{
    this.personTypes = this.exploreCityService.getPersonTypes();
  }

  initPersonCountChange(): void{
    this.exploreCityService.personCountChanged.subscribe(value => {
      if(this.personTypes[0].count !== 0 || this.personTypes[1].count !== 0 || this.personTypes[2].count !== 0 ){
        this.personsValid = true;
      }
      else{
        this.personsValid = false;
      }
    })
  }

  toggleSlider(): void {
    if (this.sliderHeight === 'slider-height-default') {
      this.sliderHeight = 'slider-height-full';
      console.log(this.element.nativeElement.querySelector('.cdk-overlay-container'));
    }
    else {
      this.sliderHeight = 'slider-height-default';
    }
  }
  nextAction(): void {
    this.actionCounter++;
    this.currentAction = this.actions[this.actionCounter];
  }
  previousAction(): void {
    this.actionCounter--;
    this.currentAction = this.actions[this.actionCounter];
  }

  onBack(): void {
    switch (this.currentAction) {
      case this.actions[0]: {
        this.router.navigate(['/explore/search']);
        break;
      }
      case this.actions[1]: {
        this.previousAction();
      }
      case this.actions[2]: {
        this.previousAction();
      }
    }
  }

  onDateSelection(date: NgbDate): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.dateIsPicked = true;
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.dateIsPicked = false;
      this.dateOption = '';
    }
  }
  isHovered(date: NgbDate): boolean {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): boolean {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate): boolean {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  getMonth(monthNumber): string{
    switch(monthNumber) {
      case 1: {
        return 'sij';
        break;
      }
      case 2: {
        return 'vel';
        break;
      }
      case 3: {
        return 'ozu';
        break;
      }
      case 4: {
        return 'tra';
        break;
      }
      case 5: {
        return 'svi';
        break;
      }
      case 6: {
        return 'lip';
        break;
      }
      case 7: {
        return 'srp';
        break;
      }
      case 8: {
        return 'kol';
        break;
      }
      case 9: {
        return 'ruj';
        break;
      }
      case 10: {
        return 'lis';
        break;
      }
      case 11: {
        return 'stu';
        break;
      }
      case 12: {
        return 'pro';
        break;
      }

    }
  }
  addDateOption(option): void{
    if(option.target.innerText === 'Točni datumi'){
      this.dateOption = '';
    }
    else{
      this.dateOption = '( ' + option.target.innerText + ' )';
    }
  }

  checkPersonsCount(): boolean{
    let status: boolean;
    if(this.personTypes[0].count !== 0 || this.personTypes[1].count !== 0 || this.personTypes[2].count !== 0 ){
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
  clearPersonsCount(): void{
    this.personTypes.forEach(person => {
      person.count = 0;
    })
  }

}
