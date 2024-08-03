import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islamicfiqh',
  templateUrl: './islamicfiqh.component.html',
  styleUrl: './islamicfiqh.component.scss'
})
export class IslamicfiqhComponent implements OnInit {


  constructor(private tab: TabVisibilityService, private router: Router) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
  }
  onBack() {
    this.router.navigateByUrl('quizcontent')
  }

  categories: string[] = [
    'Taharah', 'Salah', 'Zakah', 'Sawm', 'Hajj', 'Nikah', 'Talaq',
    'Business Transactions', 'Dietary Laws', 'Criminal Laws',
    'Inheritance', 'Etiquettes', 'Miscellaneous'
  ];

}
