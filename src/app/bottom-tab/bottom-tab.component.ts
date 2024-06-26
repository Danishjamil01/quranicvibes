import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-tab',
  templateUrl: './bottom-tab.component.html',
  styleUrl: './bottom-tab.component.scss'
})
export class BottomTabComponent implements OnInit {

  constructor(private router: Router) {

  }

  selectedTab: string;
  navigateTo(pagename: string) {
    this.selectedTab = pagename;
    if (!!pagename) {
      this.router.navigateByUrl(pagename);
    }
  }
  activeOnSuccessfullRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedTab = event.urlAfterRedirects.split('/')[1];
      }
    })
  }
  ngOnInit(): void {
    this.activeOnSuccessfullRoute()
  }
}
