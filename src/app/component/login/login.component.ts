import { Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routeAnimationState } from '../../shared/route-animations';
import { TabVisibilityService } from '../../services/tab-visibility.service';
import { Offcanvas } from 'bootstrap';
import { AllcountryService } from '../../services/allcountry.service';
import countryDigitLimits from '../../../assets/json/country-digit-limits.json'
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [routeAnimationState,
    trigger('vibrate', [
      transition('* => vibrate', [
        animate('0.5s', keyframes([
          style({ transform: 'translateX(0)' }),
          style({ transform: 'translateX(-5px)' }),
          style({ transform: 'translateX(5px)' }),
          style({ transform: 'translateX(-5px)' }),
          style({ transform: 'translateX(5px)' }),
          style({ transform: 'translateX(-5px)' }),
          style({ transform: 'translateX(5px)' }),
          style({ transform: 'translateX(0)' })
        ]))
      ])
    ])
  ],

})
export class LoginComponent implements OnInit {
  allCountry: any;
  filteredCountries: any[] = [];
  searchTerm: string = '';
  selectedCountryName: string = '';
  selectedCountryCode: string = '';
  selectedEmoji: string = '';
  isOtp: boolean = false;
  isMobileContainer: boolean = true;
  isEmailContainer: boolean = true;
  otp = ['', '', '', ''];
  isMobileLogin = true; // Default to mobile login tab
  isEmailLogin = false;
  countryDigitLimits: { country: string, digits: number }[] = countryDigitLimits;
  isSearchCountry: boolean = false;
  isChooseCountry: boolean = true;
  phoneNumber: string = '';
  vibrationState: string = '';
  @ViewChild('searchInput') searchInput!: ElementRef;
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  constructor(private router: Router, private TabVisibilityService: TabVisibilityService, private allCountryService: AllcountryService, private renderer: Renderer2

  ) {

  }
  ngOnInit(): void {
    this.TabVisibilityService.setVisibility(false);
    this.allCountryService.allcountryLIst().subscribe((data => {
      this.allCountry = data;
      this.filteredCountries = data;
    }))
  }


  private offcanvasInstance: Offcanvas | null = null;
  chooseCountry() {
    const countryCodeElement = document.getElementById('countrycodemodal');
    if (countryCodeElement) {
      this.offcanvasInstance = new Offcanvas(countryCodeElement);
      this.offcanvasInstance.show();
    }
  }

  closeCountryCodeModal() {
    if (this.offcanvasInstance) {
      this.offcanvasInstance.hide();
    }
  }
  onBack() {
    if (this.isMobileLogin) {
      this.isOtp = false;
      this.isMobileContainer = true;
    }
    else {
      this.isOtp = false;
      this.isEmailContainer = true;
    }
  }

  enterMobileOtp() {
    const phoneNumberLength = this.phoneNumber.replace(/\D/g, '').length; // Remove non-digit characters and get the length
    const digitLimit = Number(this.getPhoneNumberMaxLength()); // Get the digit limit as a number

    if (phoneNumberLength < digitLimit) {
      this.vibrationState = 'vibrate';
      setTimeout(() => this.vibrationState = '', 500); // Reset the state after the animation completes
    } else if (this.isMobileLogin) {
      this.isOtp = true;
      this.isMobileContainer = false;
      this.isEmailLogin = false
    }
  }

  enterEmailOtp() {
    if (this.isEmailLogin) {
      this.isOtp = true;
      this.isEmailContainer = false;
    }
  }


  moveToNext(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value && index < 4) {
      const nextInput = input.parentElement?.children[index] as HTMLInputElement;
      nextInput.focus();
    } else if (!input.value && index > 1) {
      const prevInput = input.parentElement?.children[index - 2] as HTMLInputElement;
      prevInput.focus();
    }
  }

  selectTab(tab: string) {
    this.isMobileLogin = tab === 'mobile';
    this.isEmailLogin = tab === 'email';
  }

  selectCountry(country: any): void {
    this.selectedCountryName = country.name;
    this.selectedCountryCode = country.dial_code;
    this.selectedEmoji = country.emoji;
    this.closeCountryCodeModal();
    this.closeSearchCountry();
  }

  getPhoneNumberMaxLength(): string {
    const selectedCountry = this.countryDigitLimits.find((country) => country.country === this.selectedCountryName);
    return selectedCountry ? String(selectedCountry.digits) : '10'; // Default to '10' if no limit is set for the selected country
  }

  searchCountry() {
    this.isChooseCountry = false;
    this.isSearchCountry = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 0);
  }
  closeSearchCountry() {
    this.isSearchCountry = false;
    this.isChooseCountry = true;
    this.searchTerm = '';
    this.filteredCountries = this.allCountry;
  }


  filterCountries(): void {
    this.filteredCountries = this.allCountry.filter(country =>
      country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  routeToNext() {
    this.router.navigateByUrl('singer');
  }
}
