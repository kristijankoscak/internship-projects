import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userIsLogged = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.getUser());
    console.log('pravim');
    const user = this.authService.getUser();
    if (user.userName !== ''){
      this.userIsLogged = true;
    }
    else{
      this.userIsLogged = false;
    }
  }

}
