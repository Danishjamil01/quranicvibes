import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  isclickedSearch: boolean = true;
  isShowSearch: boolean = false;
  ifback: boolean = true;

  onback() {
    this.isclickedSearch = true;
    this.ifback = true
    this.isShowSearch=false;
  }

  showSearch() {
    this.isclickedSearch = false;
    this.isShowSearch = true;
    this.ifback = false;
  }

  category = [
    { name: "Naat", img: "assets/search-category/naat.jpg", bgcolor: '#003135' },
    { name: "Podcast", img: "assets/search-category/podcast.webp", bgcolor: '#024950' },
    { name: "Live Events", img: "assets/search-category/events.avif", bgcolor: '#964734' },
    { name: "Made For You", img: "assets/search-category/madeforu.jpg", bgcolor: '#0FA4AF' },
    { name: "New Release", img: "assets/search-category/newrelease.jpg", bgcolor: '#3E362E' },
    { name: "Ghazals", img: "assets/search-category/ghazals.webp", bgcolor: '#865D36' },
    { name: "Video podcast", img: "assets/search-category/videopodcast.jpg", bgcolor: '#93785B' },
    { name: "Trending", img: "assets/search-category/trending.jpg", bgcolor: '#2C2E3A' },
    { name: "Sleep", img: "assets/search-category/sleep.jpg", bgcolor: '#050A44' },
    { name: "Focus", img: "assets/search-category/focus.jpg", bgcolor: '#C50900' },
    { name: "Soul", img: "assets/search-category/soul.jpg", bgcolor: '#124E66' },
    { name: "Soul", img: "assets/search-category/soul.jpg", bgcolor: '#D6536D' },
  ]
}
