import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabVisibilityService } from '../../services/tab-visibility.service';
import { Juzquiz } from '../../models/Juzquiz';
import { PostmethodService } from '../../services/postmethod.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-conceptual-questions',
  templateUrl: './conceptual-questions.component.html',
  styleUrl: './conceptual-questions.component.scss'
})
export class ConceptualQuestionsComponent implements OnInit {

  constructor(private router: Router, private tab: TabVisibilityService, private postservice: PostmethodService) {

  }

  attempedQuestions: string = '0'
  skippedQuestions: string = '0'
  currentQuestionIndex: number = 0;  // Initialize to 0 (first question)
  totalQuestions: number = 0;
  selectedOption: string = '';  // Store the selected option
  isAnswered: boolean = false; // Flag to track if an answer is selected
  allJuz1questions: any[] = [];

  @Input() duration: number = 30; // Countdown duration in seconds
  @Input() size: number = 60; // Height and width in pixels

  countdown: number = this.duration;
  circumference: number = 100;
  offset: number = 0;

  private interval: any;


  ngOnInit(): void {
    this.startCountdown();
    this.getAllQuestionsFromJuzquiz();
  }

  startCountdown() {
    const intervalTime = 1000; // 1 second
    const step = this.circumference / this.duration;

    this.interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
        this.offset += step;
      } else {
        clearInterval(this.interval);
      }
    }, intervalTime);
  }


  async getAllQuestionsFromJuzquiz() {
    const result: ApiResponse = await this.postservice.apiCallsLocal('assets/json/juz-quiz.json');
    if (result.status === 0) {
      this.allJuz1questions = result.data;
      // Dynamically set totalQuestions based on the length of the questions array
      this.totalQuestions = this.allJuz1questions[0]?.questions?.length || 0;
    }
  }

 // To simulate question navigation
 showNextQuestion() {
  if (this.currentQuestionIndex < this.totalQuestions - 1) {
    this.currentQuestionIndex++;
    this.isAnswered = false; // Reset the answer flag when moving to the next question
    this.selectedOption = ''; // Clear selected option when moving to the next question
  }
}

showPrevQuestion() {
  if (this.currentQuestionIndex > 0) {
    this.currentQuestionIndex--;
    this.isAnswered = false; // Reset the answer flag when moving to the previous question
    this.selectedOption = ''; // Clear selected option when moving to the previous question
  }
}

// Handle option click
selectOption(option: string, correctAnswer: string) {
  this.selectedOption = option;
  this.isAnswered = true; // Mark the question as answered
}

// Determine if the option is correct
isCorrect(option: string, correctAnswer: string): boolean {
  return option === correctAnswer;
}

// Determine if the option is selected
isSelected(option: string): boolean {
  return option === this.selectedOption;
}

// Determine if the option is wrong
isWrong(option: string, correctAnswer: string): boolean {
  return option !== correctAnswer && option === this.selectedOption;
}

// Disable other options after an answer is selected
disableOptions(): boolean {
  return this.isAnswered;
}
}
