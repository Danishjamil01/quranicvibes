import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss'
})
export class PremiumComponent implements OnInit {

  constructor(private tab: TabVisibilityService) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

  savePageAsImage() {
    const element = document.body;
    const scale = 10; // Increase scale factor
    html2canvas(element, {
      scale: scale,
      useCORS: true, // Use CORS if external images are involved
      allowTaint: true, // Allow tainted canvas
      logging: true, // Enable logging for debugging
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'page.png';
      link.href = imgData;
      link.click();
    });
  }




}
