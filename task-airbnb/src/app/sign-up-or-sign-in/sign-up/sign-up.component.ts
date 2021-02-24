import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userDataForm: FormGroup;
  formInvalid: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formInvalid = true;
    this.initForm();
    this.userDataForm.valueChanges.subscribe(val => {
      this.formInvalid = !(this.userDataForm.status === 'VALID');
    });
  }

  onSubmit(): void{
    const user: User = {
      phoneNumber: this.authService.phoneNumber,
      ...this.userDataForm.value
    };
    this.authService.setUserData(user);
    this.navigateToExploreScreen();
  }

  private initForm(): void{
    this.userDataForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userSurname: new FormControl(null, [Validators.required]),
      userBirthDate: new FormControl(null, [Validators.required]),
      userEmail : new FormControl(null, [Validators.required, Validators.email]),
      userDontSendAds : new FormControl(null, [])
    });
  }

  private navigateToExploreScreen(): void{
    this.router.navigate(['/explore']);
  }

}
