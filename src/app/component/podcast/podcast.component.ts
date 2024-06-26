import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../../services/tab-visibility.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent implements OnInit {

  constructor(private tab: TabVisibilityService) {

  }
  ngOnInit(): void {
    this.tab.setVisibility(false);
  }
  slides = [
    { img: "https://via.placeholder.com/350x150/000000" },
    { img: "https://via.placeholder.com/350x150/111111" },
    { img: "https://via.placeholder.com/350x150/333333" },
    { img: "https://via.placeholder.com/350x150/666666" },
    { img: "https://via.placeholder.com/350x150/666666" },
    { img: "https://via.placeholder.com/350x150/666666" },
    { img: "https://via.placeholder.com/350x150/666666" },
    { img: "https://via.placeholder.com/350x150/666666" },
  ];
  slideConfig =
    {
      "slidesToShow": 4,
      "slidesToScroll": 4,
      dots: true
    };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
