import { Component, OnInit } from '@angular/core';
import { TabVisibilityService } from '../../services/tab-visibility.service';
import { Router } from '@angular/router';
import { QuranquizCategory } from '../../models/QuranquizCategory';
import { ApiResponse } from '../../models/ApiResponse';
import { PostmethodService } from '../../services/postmethod.service';

@Component({
  selector: 'app-juz-1',
  templateUrl: './juz-1.component.html',
  styleUrl: './juz-1.component.scss'
})
export class Juz1Component implements OnInit {

  ranking: string = '165';
  points: number = 15624;
  quizCategories: QuranquizCategory[] = [];

  constructor(private tab: TabVisibilityService, private router: Router, private postservice: PostmethodService) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
    this.getAllQuranquizCategory();
  }
  getRankingColor(ranking: string): string {
    const rank = parseInt(ranking, 10); // Convert string to number
    return rank > 100 ? 'red' : 'rgb(46, 197, 92)'; // Red if greater than 100, else green
  }

  formatPoints(points: number): string {
    if (points >= 1000000000) {
      return (points / 1000000000).toFixed(1) + 'B'; // Converts to 'M' format for values greater than or equal to 1 million
    } else if (points >= 1000000) {
      return (points / 1000).toFixed(1) + 'M'; // Converts to 'k' format for values greater than or equal to 1000
    } else if (points >= 1000) {
      return (points / 1000).toFixed(1) + 'K';
    }
    return points.toString(); // Returns the points as is if less than 1000
  }

  async getAllQuranquizCategory() {
    const result: ApiResponse = await this.postservice.apiCallsLocal('assets/json/quranquiz-category.json');
    if (result.status === 0) {
      this.quizCategories = result.data;
    }
  }

  // routeToQuiz() {
  //   const pagename= 
  // }

  selectedCat: any = null;  // Initially no item is selected

  selectCat(cat: any) {
    this.selectedCat = cat;  // Set the selected item
    (<HTMLInputElement>document.getElementById('selectedCat')).style.marginBottom = '40px';
    // console.log(JSON.stringify(this.selectedCat.name));
  }

  // Method to proceed to quiz (handle the logic here)
  proceedToQuiz() {
    if (this.selectedCat) {
      console.log(`Proceeding to quiz for ${this.selectedCat.name}`);
      const selectedRoute = this.selectedCat.route
      this.router.navigateByUrl(selectedRoute);
      // Navigate to the quiz component or trigger the quiz logic here
    }
  }
  onBack() {
    this.router.navigateByUrl('quranicworld')
  }

}
