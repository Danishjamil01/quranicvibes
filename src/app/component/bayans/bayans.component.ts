import { Component, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Modal } from 'bootstrap';
import { TabVisibilityService } from '../../services/tab-visibility.service';
@Component({
  selector: 'app-bayans',
  templateUrl: './bayans.component.html',
  styleUrl: './bayans.component.scss'
})
export class BayansComponent {

  isclick: boolean = false;
  private modal: Modal;
  isFollow: boolean = true;
  selectedScholar: any;
  isOpen = false;
  @ViewChild(YouTubePlayer) player: YouTubePlayer;
  selectedVideoId: string | null = null; // Track the selected video ID
  comments: any[] = [];  // Assuming this is where you store your comments

  constructor(private TabVisibilityService: TabVisibilityService) {
    const commentsJson = localStorage.getItem('comments');
    if (commentsJson) {
      this.comments = JSON.parse(commentsJson);
    }
  }
  ngOnInit(): void {
    this.TabVisibilityService.setVisibility(false);
    const storedScholar = localStorage.getItem('selectedScholar');
    if (storedScholar) {
      this.selectedScholar = JSON.parse(storedScholar);
    }
    // this.toggleCommentSection()
  }

  onBack() {
    window.history.back();
  }
  playVideo() {
    this.player.playVideo();
  }
  clickToLike() {
    this.isclick = !this.isclick;
  }
  follow() {
    this.isFollow = !this.isFollow
  }
  pauseVideo() {
    this.player.pauseVideo();
  }

  toggleCommentSection() {
    this.isOpen = !this.isOpen;
  }

  addComment(videoId: string, message: string) {
    if (message.trim() !== '') {
      const newComment = {
        videoId: videoId, // Include the videoId in the comment
        username: 'YourUsername',
        time: new Date().toLocaleString(),
        message: message
      };
      // Add the new comment to the beginning of the comments array
      this.comments.unshift(newComment);

      // Convert comments array to JSON string
      const commentsJson = JSON.stringify(this.comments);

      // Store the JSON string in localStorage
      localStorage.setItem('comments', commentsJson);
    }
  }
}