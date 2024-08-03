import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islamicculture',
  templateUrl: './islamicculture.component.html',
  styleUrl: './islamicculture.component.scss'
})
export class IslamiccultureComponent implements OnInit{

  constructor(private tab: TabVisibilityService, private router: Router) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

  onBack() {
    this.router.navigateByUrl('quizcontent')
  }
  categories = [
    { title: 'Islamic History' },
    { title: 'Islamic Art and Architecture' },
    { title: 'Islamic Traditions' },
    { title: 'Islamic Scholars and Figures' }
  ];

}
