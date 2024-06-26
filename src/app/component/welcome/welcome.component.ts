import { SocialAuthService, FacebookLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {


  constructor(private router: Router, private authService: SocialAuthService) {

  }

  routeToPhone() {
    this.router.navigateByUrl('phonelogin')
  }
  routeToFreeSign() {
    this.router.navigateByUrl('freesignup')
  }

  user: SocialUser;
  loggedIn: boolean;


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = (user != null);
    });
  }
  routeToLogin(){
    this.router.navigateByUrl('login')
  }


  routeToDob(){
    this.router.navigateByUrl('dob');
  }

  routeToSinger(){
    this.router.navigateByUrl('singer');
  }
}
