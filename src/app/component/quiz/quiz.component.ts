import { Component, OnInit } from '@angular/core';
import { BottomtabserviceService } from '../../services/bottomtabservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {

  constructor(private tab: BottomtabserviceService) {

  }


  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

}
