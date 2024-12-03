import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabVisibilityService } from '../../services/tab-visibility.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {

  ngOnInit() {
    this.splashTimeout();
    this.TabVisibilityService.setVisibility(false);
  }
  constructor(private router: Router, private TabVisibilityService: TabVisibilityService) {

  }
  splashTimeout() {
    setTimeout(() => {
      this.router.navigateByUrl('register')
    }, 4000);
  }

}
