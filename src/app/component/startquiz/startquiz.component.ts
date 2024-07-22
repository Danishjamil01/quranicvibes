import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrl: './startquiz.component.scss'
})
export class StartquizComponent implements OnInit {

  constructor(private tab: TabVisibilityService, private router: Router) {

  }
  ngOnInit(): void {
    this.tab.setVisibility(false);
  }
  routeToQuiz() {
    this.router.navigateByUrl('quizcontent');
  }
}
