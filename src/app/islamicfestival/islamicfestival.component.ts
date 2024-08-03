import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabVisibilityService } from '../services/tab-visibility.service';

@Component({
  selector: 'app-islamicfestival',
  templateUrl: './islamicfestival.component.html',
  styleUrl: './islamicfestival.component.scss'
})
export class IslamicfestivalComponent implements OnInit {

  constructor(private tab: TabVisibilityService, private router: Router) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

  onBack() {
    this.router.navigateByUrl('quizcontent')
  }

  categories = [
    { title: 'Eid al-Fitr' },
    { title: 'Eid al-Adha' },
    { title: 'Mawlid al-Nabi' },
    { title: 'Islamic New Year' }
  ];

}
