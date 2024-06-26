import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AllsongsService } from '../../services/allsongs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Offcanvas } from 'bootstrap'
import { MixsingerService } from '../../services/mixsinger.service';

@Component({
  selector: 'app-artist-song-list',
  templateUrl: './artist-song-list.component.html',
  styleUrl: './artist-song-list.component.scss'
})
export class ArtistSongListComponent implements OnInit {
  // selectedSinger: any; // Define selectedSinger as any type or create a type/interface for singers
  allSingerSongs: any[];
  scrolled: boolean = false;
  isPlaying: boolean = false;
  audioPlayer: HTMLAudioElement;



  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 110;
  }


  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @ViewChild('audioPlayer') audioPlayerRef: ElementRef;

  isMuted: boolean = true;

  // // Method to toggle mute/unmute
  toggleMute() {
    this.isMuted = !this.isMuted;
    this.videoPlayer.nativeElement.muted = this.isMuted;
  }

  restartVideo() {
    this.videoPlayer.nativeElement.currentTime = 0;
    this.videoPlayer.nativeElement.play();
  }


  onBack() {
    window.history.back();
    if (this.isPlaying) {
      this.audioPlayer.pause();
    }
  }


  selectedSinger: any;

  constructor(private mixsingerservice: MixsingerService) {
    this.audioPlayer = new Audio();
  }

  ngOnInit(): void {
    const storedSinger = localStorage.getItem('selectedSinger');
    if (storedSinger) {
      this.selectedSinger = JSON.parse(storedSinger);
    }
  }

  selectedSong: any;
  playSong(song: any) {
    this.selectedSong = song;
    this.audioPlayer.src = song.mp3;
    this.audioPlayer.play();
    this.isPlaying = true;
  }


  togglePlayback() {
    if (this.isPlaying) {
      this.audioPlayer.pause();
    } else {
      this.audioPlayer.play();
    }
    this.isPlaying = !this.isPlaying;
  }





}

