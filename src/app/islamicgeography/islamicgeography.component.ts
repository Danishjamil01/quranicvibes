import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islamicgeography',
  templateUrl: './islamicgeography.component.html',
  styleUrl: './islamicgeography.component.scss'
})
export class IslamicgeographyComponent implements OnInit {

  constructor(private tab: TabVisibilityService, private router: Router) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

  onBack() {
    this.router.navigateByUrl('quizcontent')
  }
  categories = [
    { title: 'Islamic Countries' },
    { title: 'Islamic Landmarks' },
    { title: 'Islamic Regions' },
    { title: 'Historical Islamic Cities' }
  ];


}
