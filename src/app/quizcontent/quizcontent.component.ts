import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizcontent',
  templateUrl: './quizcontent.component.html',
  styleUrl: './quizcontent.component.scss'
})
export class QuizcontentComponent {

  constructor(private router: Router) { }

  routeTo(pagename: string) {
    this.router.navigateByUrl(pagename);
  }
}
