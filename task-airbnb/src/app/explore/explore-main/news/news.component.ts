import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  message = 'Saznajte najnovije informacije o tome što smo sve poduzeli u vezi s pandemijom bolesti COVID-19.';


  constructor() { }

  ngOnInit(): void {
  }

}
