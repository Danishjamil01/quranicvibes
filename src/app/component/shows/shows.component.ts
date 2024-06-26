import { Component, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})
export class ShowsComponent {

  selectedShows:any;

  ngOnInit(): void {
    const storedShows = localStorage.getItem('selectedShows');
    if (storedShows) {
      this.selectedShows = JSON.parse(storedShows);
    }
  }




  isclick: boolean = false;
  private modal: Modal;
  clickToLike() {
    this.isclick = !this.isclick;
  }
  selectedScholar: any;



  @ViewChild(YouTubePlayer) player: YouTubePlayer;

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
  isOpen = false;

  toggleCommentSection() {
    this.isOpen = !this.isOpen;
  }


  people=[
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit Lorem ipsum, dolor sit Lorem ipsum, dolor sit Lorem ipsum, dolor sit Lorem ipsum, dolor sit  '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
    {username:'Danish',time:'one week ago',message:'Lorem ipsum, dolor sit '},
  ]
}
