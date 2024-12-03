import { Component, OnInit } from '@angular/core';
import { Juzquiz } from '../../models/Juzquiz';
import { PostmethodService } from '../../services/postmethod.service';
import { ApiResponse } from '../../models/ApiResponse';
import { TabVisibilityService } from '../../services/tab-visibility.service';
import { Router } from '@angular/router';
import { Alljuz } from '../../models/Alljuz';

@Component({
  selector: 'app-juz-quiz',
  templateUrl: './juz-quiz.component.html',
  styleUrl: './juz-quiz.component.scss'
})
export class JuzQuizComponent implements OnInit {

  juzContent: Juzquiz[] = [];
  allJuz: Alljuz[] = [];

  constructor(private postService: PostmethodService, private tab: TabVisibilityService, private router: Router) {

  }
  ngOnInit(): void {
    this.tab.setVisibility(false);
    this.allJuzQuizContents();
    this.allJuzList();
  }


  async allJuzQuizContents() {
    const result: ApiResponse = await this.postService.apiCallsLocal('assets/json/juz-quiz.json');
    if (result.status === 0) {
      this.juzContent = result.data;
      // console.log('fetch Juz data ::: ', JSON.stringify(this.juzContent));
    }
  }

  async allJuzList() {
    const result: ApiResponse = await this.postService.apiCallsLocal('assets/json/alljuz.json');
    if (result.status === 0) {
      this.allJuz = result.data;
      // console.log('fetch Juz data ::: ', JSON.stringify(this.allJuz));
    }
  }

  onBack() {
    this.router.navigateByUrl('quranicworld')
  }



  selectedJuz: any = null;  // Initially no item is selected

  // Method to select a Juz
  selectJuz(juz: any) {
    this.selectedJuz = juz;  // Set the selected item
  }

  // Method to proceed to quiz (handle the logic here)
  proceedToQuiz() {
    if (this.selectedJuz) {
      console.log(`Proceeding to quiz for ${this.selectedJuz.juzname}`);
      const selectedRoute = this.selectedJuz.route
      this.router.navigateByUrl(selectedRoute);
      // Navigate to the quiz component or trigger the quiz logic here
    }
  }
}




