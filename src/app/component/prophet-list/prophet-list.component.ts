import { Component, OnInit } from '@angular/core';
import prophets from '../../../assets/json/prophets.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prophet-list',
  templateUrl: './prophet-list.component.html',
  styleUrl: './prophet-list.component.scss'
})
export class ProphetListComponent implements OnInit{
  prophets: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.prophets = prophets;
  }

  startQuiz(prophetId: number): void {
    this.router.navigate(['/quiz', prophetId]);
  }



}