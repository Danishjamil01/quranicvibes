import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ramadan',
  templateUrl: './ramadan.component.html',
  styleUrl: './ramadan.component.scss'
})
export class RamadanComponent implements OnInit {

  constructor(private tab: TabVisibilityService, private router: Router) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

  onBack() {
    this.router.navigateByUrl('quizcontent')
  }
  categories = [
    { title: 'Ramadan Practices' },
    { title: 'Fasting Rules' },
    { title: 'Iftar and Suhoor' },
    { title: 'Ramadan History' }
  ];

}
