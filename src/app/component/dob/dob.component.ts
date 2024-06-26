import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrl: './dob.component.scss'
})
export class DobComponent {


  showdob: boolean = true;
  showGender: boolean = false;
  showTerms: boolean = false;
  option: boolean = true;
  option1: boolean = true;

  constructor(private router: Router) {

  }


  onback() {
    if (!!this.showGender) {
      this.showdob = true;
      this.showTerms = false;
      this.showGender = false;
    } else if (!!this.showTerms) {
      this.showGender = true;
      this.showdob = false;
      this.showTerms = false;
    } else {
      this.router.navigateByUrl('');
    }
  }
  genders = [
    { name: 'Female' },
    { name: 'Male' },
    { name: 'Non-binary' },
    { name: 'Other' },
    { name: 'Prefer not to say' }
  ];

  onGender() {
    this.showGender = true;
    this.showdob = false
  }
  routeToterm() {
    this.showTerms = true;
    this.showGender = false;
  }

  chooseOption() {
    this.option = !this.option
  }
  chooseOption1() {
    this.option1 = !this.option1
  }

  routeTosinger() {
    this.router.navigateByUrl('singer');
  }

}
