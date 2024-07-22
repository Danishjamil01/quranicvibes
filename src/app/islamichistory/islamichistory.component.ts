import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-islamichistory',
  templateUrl: './islamichistory.component.html',
  styleUrl: './islamichistory.component.scss'
})
export class IslamichistoryComponent implements OnInit{


  constructor(private tab:TabVisibilityService,private router:Router){

  }

  ngOnInit(): void {
    this.tab.setVisibility(false)
  }
  quizSections = [
    {
      id: 1,
      title: 'Prophets and Messengers',
      description: 'Quiz covering the life and teachings of various Prophets and Messengers.',
      img: 'assets/images/quiz/islamichistory/01.png'
    },
    {
      id: 2,
      title: 'The Caliphates',
      description: 'Quiz on the different Caliphates and their impacts on Islamic history.',
      img: 'assets/images/quiz/islamichistory/02.png'
    },
    {
      id: 3,
      title: 'Historical Events',
      description: 'Quiz on significant events in Islamic history including battles and treaties.',
      img: 'assets/images/quiz/islamichistory/03.jpeg'
    },
    {
      id: 4,
      title: 'Islamic Golden Age',
      description: 'Quiz on the achievements and contributions during the Islamic Golden Age.',
      img: 'assets/images/quiz/islamichistory/04.jpeg'
    },
    {
      id: 5,
      title: 'Islamic Architecture',
      description: 'Quiz on the notable Islamic architectural works and styles.',
      img: 'assets/images/quiz/islamichistory/05.jpeg'
    },
    {
      id: 6,
      title: 'Islamic Culture and Traditions',
      description: 'Quiz on various Islamic cultural practices and traditions.',
      img: 'assets/images/quiz/islamichistory/06.png'
    },
    {
      id: 7,
      title: 'The Life of the Prophet Muhammad (PBUH)',
      description: 'Quiz covering the major events and teachings of Prophet Muhammad (PBUH).',
      img: 'assets/images/quiz/islamichistory/07.png'
    },
    {
      id: 8,
      title: 'Early Islamic States',
      description: 'Quiz on the early Islamic states including the Umayyad and Abbasid Dynasties.',
      img: 'assets/images/quiz/islamichistory/08.png'
    },
    {
      id: 9,
      title: 'Modern Islamic History',
      description: 'Quiz on modern Islamic history including colonialism and independence movements.',
      img: 'assets/images/quiz/islamichistory/09.png'
    }
  ];

  onBack() {
    this.router.navigateByUrl('quizcontent')
  }
}
