import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AccommodationsService } from 'src/app/accommodations.service';
import { Accommodation } from '../accommodation.model';

@Component({
  selector: 'app-accommodation-reseve',
  templateUrl: './accommodation-reseve.component.html',
  styleUrls: ['./accommodation-reseve.component.css']
})
export class AccommodationReseveComponent implements OnInit {

  currentSearch;
  currentAccommodation: Accommodation;
  fromDate: NgbDate;
  toDate: NgbDate;
  numberOfDays: number;
  personNumber: number;
  otherFees = 0.00;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private accommodationsService: AccommodationsService
  ) { }

  ngOnInit(): void {
    this.fetchParams();
    this.fetchAccommodation();
    this.convertDates();
    this.countPersons();
  }

  fetchParams(): void{
    this.activeRoute.queryParams.subscribe((params:Params) => {
      this.currentSearch = params;
      console.log(this.currentSearch);
    })
  }
  fetchAccommodation(): void{
    const id = this.currentSearch.accommodationID;
    this.currentAccommodation = this.accommodationsService.getAccommodationById(id);
    console.log(this.currentAccommodation);
  }
  convertDates(): void{
    const startDate = new Date(this.currentSearch.fromDate);
    const endDate = new Date(this.currentSearch.toDate);
    this.numberOfDays = Math.round((+endDate-+startDate)/(1000*60*60*24));
    this.fromDate = new NgbDate(startDate.getFullYear(),startDate.getMonth()+1,startDate.getDate());
    this.toDate = new NgbDate(endDate.getFullYear(),endDate.getMonth()+1,endDate.getDate());
  }

  fetchDateRange(): string{
    let dateRange = '';
    dateRange += this.fromDate.year + '.' + this.fromDate.month + '.' + this.fromDate.day + '-';
    dateRange += this.toDate.year + '.' + this.toDate.month + '.' + this.toDate.day ;
    return dateRange;
  }
  countPersons(): void{
    this.personNumber = +this.currentSearch.adults + +this.currentSearch.kids + +this.currentSearch.babies;
  }
  fetchTotalPrice(): number{
    return (+this.currentAccommodation.newPrice * +this.numberOfDays) + this.otherFees;
  }
  fetchCancelInfo(): string{
    const newInfo = 'otkažete do 11 AM '+ this.fromDate.day + '.' + this.fromDate.month+ '.';
    let info = this.currentAccommodation.info.find(info => info.type === 'cancel').description;
    info = info.replace('otkažete',newInfo);
    return info;
  }
  onBack(): void{
    this.router.navigate(['../'],{
      relativeTo: this.activeRoute,
      queryParams: this.currentSearch
    });
  }
}
