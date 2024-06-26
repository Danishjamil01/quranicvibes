import { Component } from '@angular/core';

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  styleUrl: './vibe.component.scss'
})
export class VibeComponent {

  artist = [
    { image: "assets/images/vibes/recieters/1.jpg", name: " Abdul Rahman Al-Sudais" },
    { image: "assets/images/vibes/recieters/2.jpg", name: " Mishary Rashid Alafasy" },
    { image: "assets/images/vibes/recieters/3.jpg", name: " Maher Al-Muaiqly" },
    { image: "assets/images/vibes/recieters/4.jpg", name: " Saad Al-Ghamdi" },
    { image: "assets/images/vibes/recieters/5.jpg", name: " Abdullah Al-Johany" },
    { image: "assets/images/vibes/recieters/6.jpg", name: " Abdullah Matrood" },
    { image: "assets/images/vibes/recieters/7.jpg", name: " Abdul-Rahman Aloosi" },
    { image: "assets/images/vibes/recieters/8.jpg", name: " Salah al-Habdan" },
    { image: "assets/images/vibes/recieters/9.jpg", name: " Abdul Basit Abdus Samad" },
    { image: "assets/images/vibes/recieters/10.jpg", name: " Muhammad Jibreel" }
  ]


  slides = [
    { bg: "linear-gradient(to bottom, hsl(36, 26%, 25%), hsl(35, 70%, 10%), hsl(34, 70%, 4%))", img: 'assets/images/vibes/mostlistensurah/arrahman.png' },
    { bg: "linear-gradient(to bottom, hsl(200, 100%, 80%), hsl(200, 100%, 20%))", img: 'assets/images/vibes/mostlistensurah/arrahman.png' },
    { bg: "linear-gradient(to bottom, hsl(150, 100%, 80%), hsl(150, 100%, 20%))", img: 'assets/images/vibes/mostlistensurah/arrahman.png' },
    { bg: "linear-gradient(to bottom, hsl(0, 100%, 80%), hsl(0, 100%, 20%))", img: 'assets/images/vibes/mostlistensurah/arrahman.png' },
    { bg: "linear-gradient(to bottom, hsl(300, 100%, 80%), hsl(300, 100%, 20%))", img: 'assets/images/vibes/mostlistensurah/arrahman.png' },
  ];
  slideConfig = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.9,
        }
      },
    ]
  };


}
