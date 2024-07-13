import { Component, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';  
import { BottomtabserviceService } from '../../services/bottomtabservice.service';
import { TabVisibilityService } from '../../services/tab-visibility.service';
@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.scss']
})
export class ShortsComponent implements OnInit {

  // allShortsData: any;

  constructor(private bottom:TabVisibilityService) {

  }
  ngOnInit(): void {
    this.bottom.setVisibility(false)
    // this.shortServices.allShortsData().subscribe((data) => {
    //   this.allShortsData = data;
    // })
  }


  // @ViewChild('videoPlayer') videoPlayer: ElementRef;

  // isMuted: boolean = true;

  // // Method to toggle mute/unmute
  // toggleMute() {
  //   this.isMuted = !this.isMuted;
  //   this.videoPlayer.nativeElement.muted = this.isMuted;
  // }

  // restartVideo() {
  //   this.videoPlayer.nativeElement.currentTime = 0;
  //   this.videoPlayer.nativeElement.play();
  // }
  text = '۞میں اللہ کی پناہ مانگتا ہوں شیطان مردود سے۔'


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

  prophetTimesData = [
    { slNo: 1, prophet: 'Prophet Name 1', times: 'Time 1', where: 'Location 1' },
    { slNo: 2, prophet: 'Prophet Name 2', times: 'Time 2', where: 'Location 2' },
    // Add more rows as needed
  ];

  displayedColumns: string[] = ['slNo', 'prophet', 'times', 'where'];
}
