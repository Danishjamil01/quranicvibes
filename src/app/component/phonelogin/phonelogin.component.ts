import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonelogin',
  templateUrl: './phonelogin.component.html',
  styleUrl: './phonelogin.component.scss'
})
export class PhoneloginComponent implements OnInit {
  apiUrl: string = 'assets/json/country.json';

  constructor(private router: Router) {

  }


  ngOnInit() {
  }

  
  otpVerification: boolean = false;
  countySection: boolean = true;




  onback() {

    if (!!this.otpVerification) {
      this.countySection = true;
      this.otpVerification = false;
    } else if (!!this.countySection) {
      this.otpVerification = false;
      this.countySection = false;
      this.router.navigateByUrl('');
    }
  }

  phoneNumber: string = '';

  onPhoneNumberInput(value: string) {
    this.phoneNumber = value;
  }

  routeToOtp() {
    this.countySection = false;
    this.otpVerification = true;
  }

  @ViewChild('digit1') digit1!: ElementRef;
  @ViewChild('digit2') digit2!: ElementRef;
  @ViewChild('digit3') digit3!: ElementRef;
  @ViewChild('digit4') digit4!: ElementRef;
  @ViewChild('digit5') digit5!: ElementRef;
  @ViewChild('digit6') digit6!: ElementRef;

  onKeyUp(event: any, digit: number) {
    const nextInput = event.target.nextElementSibling;
    if (event.target.value.length === 1 && nextInput) {
      nextInput.focus();
    }
    if (digit === 6 && event.target.value.length === 1) {
      this.verifyOtp();
    }
  }

  verifyOtp() {
    const otp =
      this.digit1.nativeElement.value +
      this.digit2.nativeElement.value +
      this.digit3.nativeElement.value +
      this.digit4.nativeElement.value +
      this.digit5.nativeElement.value +
      this.digit6.nativeElement.value;
    // You can add your OTP verification logic here
    console.log('OTP Entered:', otp);
  }

  countryList =[
    
  ]

}
