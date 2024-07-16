import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { TabVisibilityService } from '../services/tab-visibility.service';

@Component({
  selector: 'app-liabrary',
  templateUrl: './liabrary.component.html',
  styleUrl: './liabrary.component.scss'
})
export class LiabraryComponent implements OnInit {
  constructor(private tab: TabVisibilityService) {

  }
  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

  // savePageAsImage() {
  //   const element = document.body;
  //   html2canvas(element).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const link = document.createElement('a');
  //     link.download = 'page.png';
  //     link.href = imgData;
  //     link.click();
  //   });
  // }

  // savePageAsImage() {
  //   console.log('work');
  //   const element = document.body;
  //   html2canvas(element).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const link = document.createElement('a');
  //     link.download = 'page.png';
  //     link.href = imgData;
  //     link.click();
  //   });
  // }

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
