import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TabVisibilityService } from './services/tab-visibility.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QuranicVibes';

  isVisible: boolean = true;

  constructor(
    private tabVisibilityService: TabVisibilityService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.tabVisibilityService.getVisibility().subscribe(isVisible => {
      this.isVisible = isVisible;
      this.cdr.detectChanges(); // Ensures Angular picks up the change
    });
  }
}
