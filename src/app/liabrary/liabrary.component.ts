import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-liabrary',
  templateUrl: './liabrary.component.html',
  styleUrl: './liabrary.component.scss'
})
export class LiabraryComponent {
  // constructor() {

  // }

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

  savePageAsImage() {
    const element = document.body;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'page.png';
      link.href = imgData;
      link.click();
    });
  }
}
