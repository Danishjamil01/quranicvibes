import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quranicworld',
  templateUrl: './quranicworld.component.html',
  styleUrl: './quranicworld.component.scss'
})
export class QuranicworldComponent implements OnInit {


  constructor(private tab: TabVisibilityService, private router: Router) {

  }
  ngOnInit(): void {
    this.tab.setVisibility(false);
  }
  quizSections = [
    { id: 1, title: 'Juz  Quiz', description: '30 quizzes, each  on one Juz.', img: 'assets/images/quiz/quranicworld/juzquiz.png' },
    { id: 2, title: 'Surah  Quiz', description: '114 quizzes, each  on one Surah.', img: 'assets/images/quiz/quranicworld/surah.png' },
    { id: 3, title: 'Thematic Quiz', description: 'Quizzes  on themes like stories of prophets, laws, moral teachings, etc.', img: 'assets/images/quiz/quranicworld/thematicquiz.png' },
    { id: 4, title: 'Ayat  Quiz', description: 'Important Ayat focused quizzes.', img: 'assets/images/quiz/quranicworld/aayatquiz.png' },
    { id: 5, title: 'Historical Events', description: 'Quizzes  on historical events mentioned in the Quran.', img: 'assets/images/quiz/quranicworld/islamichistory.png' },
    { id: 6, title: 'Characters in the Quran', description: 'Quizzes on prophets, companions, and other significant characters.', img: 'assets/images/quiz/quranicworld/characters.png' },
    { id: 7, title: 'Revelation Context', description: 'Quizzes on the context of revelation (Makki vs. Madani).', img: 'assets/images/quiz/quranicworld/revelation.png' },
    { id: 8, title: 'Tafsir and Meanings', description: 'Quizzes on Tafsir and specific Ayat explanations.', img: 'assets/images/quiz/quranicworld/tafseer.png' }
  ];

  onBack() {
    this.router.navigateByUrl('quizcontent')
  }
}
