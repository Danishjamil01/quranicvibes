import { Component, OnInit } from '@angular/core';
import { BottomtabserviceService } from '../../services/bottomtabservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import prophets from '../../../assets/json/prophets.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {


  constructor(private tab: BottomtabserviceService, private router: Router, private route: ActivatedRoute) {

  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.prophetId = +params['id'];
      const prophet = prophets.find(p => p.id === this.prophetId);
      if (prophet) {
        this.prophetName = prophet.name;
        this.questions = prophet.questions;
      }
    });
  }

  prophetId: number;
  prophetName: string;
  questions: any[];
  currentQuestionIndex: number = 0;
  selectedAnswer: string;
  score: number = 0;



  nextQuestion(): void {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.selectedAnswer = '';
    this.currentQuestionIndex++;
  }
}
