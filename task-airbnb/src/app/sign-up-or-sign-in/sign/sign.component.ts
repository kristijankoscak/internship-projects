import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

interface Countries {
  name: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  initialCountryNumber = '+385';
  signUpForm: FormGroup;
  numberIsValid = false;
  minNuberLenght = 8;
  borderClassName: string;
  countries: Countries[] = [
    { name: 'Hrvatska', phoneNumber: '+385' },
    { name: 'Afganistan', phoneNumber: '+93' },
    { name: 'Albanija', phoneNumber: '+355' },
    { name: 'Angola', phoneNumber: '+244' },
    { name: 'Armenije', phoneNumber: '+374' },
    { name: 'Armenije', phoneNumber: '+374' },
    { name: 'Armenije', phoneNumber: '+374' }
  ];

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      country: new FormControl(),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(this.minNuberLenght)])
    });
    this.setInitialForm();
    this.subscribeToPhoneNumberChanges();


  }
  changeStyle(): void {
    if (this.signUpForm.controls.phoneNumber.invalid) {
      this.borderClassName = 'borders-warning';
    }
  }
  onSubmit(): void {
    const phoneNumber = this.signUpForm.get('country').value + this.signUpForm.get('phoneNumber').value;
    this.authService.setPhoneNumber(phoneNumber);
    this.navigateToSingUp();
  }

  login(): void {
    this.authService.loginViaOtherOptions();
    this.router.navigate(['/explore']);

  }

  private navigateToSingUp(): void {
    this.router.navigate(['up'], { relativeTo: this.route });
  }

  private subscribeToPhoneNumberChanges(): void {
    this.signUpForm.controls.phoneNumber.statusChanges.subscribe(
      event => {
        if (event === 'VALID') {
          this.borderClassName = 'borders-default';
          this.numberIsValid = true;
        }
        else {
          this.borderClassName = 'borders-warning';
          this.numberIsValid = false;
        }
      }
    );
  }
  private setInitialForm(): void {
    this.signUpForm.setValue({
      country: this.initialCountryNumber,
      phoneNumber: ''
    });
  }
}
