import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signupfree',
  templateUrl: './signupfree.component.html',
  styleUrl: './signupfree.component.scss'
})
export class SignupfreeComponent {

  showEmailSection: boolean = true;
  showdob: boolean = false;
  showPassword: boolean = false;
  email: string;
  isEmailValid: boolean = false;
  password: string;
  isPasswordValid: boolean = false;
  visible: boolean = true;
  changetype: boolean = true;
  showGender: boolean = false;
  option: boolean = true;
  option1: boolean = true;
  showTerms: boolean = false;

  showPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  chooseOption() {
    this.option = !this.option
  }
  chooseOption1() {
    this.option1 = !this.option1
  }

  checkPasswordValidity() {
    this.isPasswordValid = this.password.length >= 8;
  }
  constructor(private router: Router) {

  }

  onback() {
    if (!!this.showPassword) {
      this.showEmailSection = true;
      this.showPassword = false;
      this.showdob = false;
      this.showGender = false;
      this.showTerms = false;
    } else if (!!this.showdob) {
      this.showEmailSection = false;
      this.showPassword = true;
      this.showdob = false;
      this.showGender = false;
      this.showTerms = false;

    } else if (!!this.showPassword) {
      this.showEmailSection = true;
      this.showPassword = false;
      this.showdob = false;
      this.showGender = false;
      this.showTerms = false;
    } else if (!!this.showGender) {
      this.showEmailSection = false;
      this.showPassword = false;
      this.showdob = true;
      this.showGender = false;
      this.showTerms = false;
    } else if (!!this.showTerms) {
      this.showEmailSection = false;
      this.showPassword = false;
      this.showdob = false;
      this.showGender = true;
      this.showTerms = false;
    }

    else {
      this.router.navigateByUrl('');
    }
  }

  onGender() {
    this.showGender = true;
    this.showdob = false;
  }

  checkEmailValidity() {
    // Simple email validation, you can use a more robust solution
    this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  routetopass() {
    this.showEmailSection = false;
    this.showPassword = true;
  }


  onDob() {
    this.showdob = true;
    this.showPassword = false;
  }

  genders = [
    { name: 'Female' },
    { name: 'Male' },
    { name: 'Non-binary' },
    { name: 'Other' },
    { name: 'Prefer not to say' }
  ];

  routeToterm() {
    this.showTerms = true;
    this.showGender = false;
  }
  routeTosinger() {
    this.router.navigateByUrl('singer');
  }
}
