import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  componentsWithoutNavbar = [
    '/',
    '/sign',
    '/sign/up',
    '/explore/search'
  ];

  dynamicalRoutes = [
    '/explore/city/'
  ]

  showNavbar = true;

  title = 'task-airbnb';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.dynamicalRoutes.find((component) => {
          return val.url.includes(component);
        })) {
          this.showNavbar = false;
        }
        else if (this.componentsWithoutNavbar.find((component) => {
          return component === val.url;
        })) {
          this.showNavbar = false;
        }
        else {
          this.showNavbar = true;
        }
      }
    });


  }
}
