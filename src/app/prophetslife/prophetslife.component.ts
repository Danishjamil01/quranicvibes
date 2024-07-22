import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prophetslife',
  templateUrl: './prophetslife.component.html',
  styleUrl: './prophetslife.component.scss'
})
export class ProphetslifeComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor(private router: Router) {

  }

  quizSections = [
    {
      id: 1,
      title: ' Adam (AS)',
      description: 'Quiz on the life of Prophet Adam (AS).',
      img: 'assets/images/quiz/prophetslife/adam.png',
      questions: [
        { question: 'Who was the first prophet in Islam?', answer: 'Prophet Adam (AS)' },
        { question: 'Who was created from the rib of Prophet Adam (AS)?', answer: 'Hawwa (Eve)' }
      ]
    },
    {
      id: 2,
      title: 'Idris (AS)',
      description: 'Quiz on the life of Prophet Idris  (AS).',
      img: 'assets/images/quiz/prophetslife/idris.png',
      questions: [
        { question: 'Which prophet built the Ark?', answer: 'Prophet Noah (Nuh)' },
        { question: 'How many people were with Prophet Noah (Nuh) in the Ark?', answer: 'Eighty' }
      ]
    },
    {
      id: 3,
      title: 'Nuh (AS)',
      description: 'Quiz on the life of Prophet Nuh  (AS).',
      img: 'assets/images/quiz/prophetslife/nuh.png',
      questions: [
        { question: 'Who was asked to sacrifice his son by Allah?', answer: 'Prophet Abraham (Ibrahim)' },
        { question: 'What was the name of Prophet Abraham (Ibrahim)\'s son who was to be sacrificed?', answer: 'Prophet Ishmael (Ismail)' }
      ]
    },
    {
      id: 4,
      title: 'Hud (AS)',
      description: 'Quiz on the life of Prophet Hud (AS).',
      img: 'assets/images/quiz/prophetslife/hud.png',
      questions: [
        { question: 'Who received the Ten Commandments?', answer: 'Prophet Moses (Musa)' },
        { question: 'What was the name of the sea that Prophet Moses (Musa) parted?', answer: 'The Red Sea' }
      ]
    },
    {
      id: 5,
      title: 'Saleh (AS)',
      description: 'Quiz on the life of Prophet Saleh (AS).',
      img: 'assets/images/quiz/prophetslife/saleh.png',
      questions: [
        { question: 'Who was born to the Virgin Mary (Maryam)?', answer: 'Prophet Jesus (Isa)' },
        { question: 'What miracle did Prophet Jesus (Isa) perform by Allah\'s will?', answer: 'He healed the blind and lepers and raised the dead' }
      ]
    },
    {
      id: 6,
      title: 'Ibrahim (AS)',
      description: 'Quiz on the life of Prophet Ibrahim (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-ibrahim-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 7,
      title: 'Lut (As)',
      description: 'Quiz on the life of Prophet Lut (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-lut-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 8,
      title: 'Ishmael (AS)',
      description: 'Quiz on the life of Prophet Ishmael (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-ishmael-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 9,
      title: 'Ishaq (AS)',
      description: 'Quiz on the life of Prophet Ishaq (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-ishaq-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 10,
      title: 'Yaqub (AS)',
      description: 'Quiz on the life of Prophet Yaqub (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-yaqub-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 11,
      title: 'Yusuf (AS)',
      description: 'Quiz on the life of Prophet Yusuf (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-yusuf-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 12,
      title: 'Ayyub (AS)',
      description: 'Quiz on the life of Prophet Ayyub (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-ayyub-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 13,
      title: 'Shuaib (AS)',
      description: 'Quiz on the life of Prophet Shuaib (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-shuaib-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 14,
      title: 'Musa (AS)',
      description: 'Quiz on the life of Prophet Musa (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-musa-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 15,
      title: 'Harun (AS)',
      description: 'Quiz on the life of Prophet Harun (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-harun-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 16,
      title: 'Dhul-Kifl (AS)',
      description: 'Quiz on the life of Prophet Dhul-Kifl (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-dhul-kifl-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 17,
      title: 'Dawud (AS)',
      description: 'Quiz on the life of Prophet Dawud (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-dawud-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 18,
      title: 'Sulaiman (AS)',
      description: 'Quiz on the life of Prophet Sulaiman (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-sulaiman-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 19,
      title: 'Ilyas (AS)',
      description: 'Quiz on the life of Prophet Ilyas (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-ilyas-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 20,
      title: 'Al-yasa (AS)',
      description: 'Quiz on the life of Prophet Al-yasa (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-al-yasa-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 21,
      title: 'Yunus (AS)',
      description: 'Quiz on the life of Prophet Yunus (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-yunus-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 22,
      title: 'Zakariya (AS)',
      description: 'Quiz on the life of Prophet Zakariya (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-zakariya-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 23,
      title: 'Yahya (AS)',
      description: 'Quiz on the life of Prophet Yahya (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-yahya-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 24,
      title: 'Isa (AS)',
      description: 'Quiz on the life of Prophet Isa (AS).',
      img: 'assets/images/quiz/prophetslife/prophet-isa-as.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
    {
      id: 25,
      title: ' Muhammad (SAW)',
      description: 'Quiz on the life of Prophet Muhammad (SAW).',
      img: 'assets/images/quiz/prophetslife/prophet-muhammad-saw.png',
      questions: [
        { question: 'Who is the last prophet in Islam?', answer: 'Prophet Muhammad (AS)' },
        { question: 'In which cave did Prophet Muhammad (AS) receive the first revelation?', answer: 'Cave Hira' }
      ]
    },
  ];

  onBack() {
    this.router.navigateByUrl('quizcontent')
  }
}
