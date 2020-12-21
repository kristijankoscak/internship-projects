import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from 'src/app/search.service';
import { DateFromTo } from '../../search.model';
import { ExploreCityAction, ExploreCityPerson } from './explore-city.model';
import { ExploreCityService } from './explore-city.service';

// TO DO - switch calendar language

@Component({
  selector: 'app-explore-city',
  templateUrl: './explore-city.component.html',
  styleUrls: ['./explore-city.component.css']
})
export class ExploreCityComponent implements OnInit {

  screenPointer = 0;
  screens: string[] = ['Što tražite?', 'Kad dolazite?','Koliko ljudi dolazi?'];
  currentScreen: string;

  currentCity: string;
  searchTypes: ExploreCityAction[];
  sliderHeight: string;

  model: NgbDateStruct;
  date: { year: number, month: number };
  hoveredDate: NgbDate | null = null;
  todayDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  dateOption: string = 'Točni datumi';
  dateIsPicked: boolean;

  personTypes: ExploreCityPerson[];
  petsAllowed = false;
  personsValid = false;


  constructor(
    private exploreCityService: ExploreCityService,
    private route: ActivatedRoute,
    private router: Router,
    private element: ElementRef,
    private calendar: NgbCalendar,
    private searchService: SearchService,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initSearchTypeScreen();
    this.todayDate = this.calendar.getToday();
    this.initPersonTypeScreen();
    this.subscribeToPersonCountChange();
    this.fetchRouteParams();
  }

  initSearchTypeScreen(): void {
    this.searchTypes = this.exploreCityService.getSearchTypes();
    this.sliderHeight = 'slider-height-default';
  }
  initPersonTypeScreen(): void{
    this.personTypes = this.exploreCityService.getPersonTypes();
  }

  subscribeToPersonCountChange(): void{
    this.exploreCityService.personCountChanged.subscribe(value => {
      if(this.personTypes[0].count !== 0 || this.personTypes[1].count !== 0 || this.personTypes[2].count !== 0 ){
        this.personsValid = true;
      }
      else{
        this.personsValid = false;
      }
    })
  }
  fetchRouteParams(): void{
    this.route.queryParams.subscribe((params: Params) => {
      if(params.place){
        console.log('ima place');
        this.screenPointer = 0;
        this.currentCity = params.place;
      }
      if(params.searchType){
        console.log('ima searchType');
        this.screenPointer = 1;
        this.clearCalendar();
      }
      if(params.fromDate){
        console.log('ima date');
        this.screenPointer = 2;
      }
      this.currentScreen = this.screens[this.screenPointer];
    })
  }


  nextScreen(): void {
    this.handleScreen();
    this.screenPointer++;
    this.currentScreen = this.screens[this.screenPointer];
  }
  handleScreen(){
    if(this.currentScreen === this.screens[1]){
      const dateFromTo: DateFromTo = { dateFrom:this.fromDate, dateTo:this.toDate }
      this.router.navigate([], {relativeTo: this.activeRoute, queryParams: {
        ...this.activeRoute.snapshot.queryParams,
        fromDate: this.convertNgbDateToDate(this.fromDate),
        toDate: this.convertNgbDateToDate(this.toDate),
        dateOption: this.dateOption
      }})
    }
    if(this.currentScreen === this.screens[2]){
      this.router.navigate(['../results'], { relativeTo: this.route,
        queryParams: {
        ...this.activeRoute.snapshot.queryParams,
        adults: this.personTypes[0].count,
        kids: this.personTypes[1].count,
        babies: this.personTypes[2].count,
        petsAllowed: this.petsAllowed
        }
      })
    }
  }
  onBack(): void {
    switch (this.currentScreen) {
      case this.screens[0]: {
        this.router.navigate(['/explore/search']);
        break;
      }
      case this.screens[1]: {
        this.router.navigate([], {relativeTo: this.activeRoute, queryParams: {
          place: this.activeRoute.snapshot.queryParams.place
        }})
        break;
      }
      case this.screens[2]: {
        this.router.navigate([], {relativeTo: this.activeRoute, queryParams: {
          place: this.activeRoute.snapshot.queryParams.place,
          searchType: this.activeRoute.snapshot.queryParams.searchType
        }})
        break;
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
  addDateOption(option): void{
    this.dateOption = option.target.innerText;
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
  clearCalendar(): void{
    this.fromDate = null;
    this.toDate = null;
    this.dateOption = 'Točni datumi';
    this.dateIsPicked = false;
  }

  getMonth(monthNumber: number): string{
    return this.exploreCityService.getMonth(monthNumber);
  }

  convertNgbDateToDate(date:NgbDate): Date{
    return new Date(date.year, date.month - 1, date.day);
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

}
