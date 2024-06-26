import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from './services/tab-visibility.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QuranicVibes';

  isVisible: boolean = true;

  constructor(private TabVisibilityService: TabVisibilityService) {
    this.TabVisibilityService.getVisibility().subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }
}
