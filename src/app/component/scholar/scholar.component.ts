import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { ApiResponse } from '../../models/ApiResponse';
import { PostmethodService } from '../../services/postmethod.service';
import { Alljuz } from '../../models/Alljuz';
import { Router } from '@angular/router';
import { Allchapter } from '../../models/Allchapter';
import { SessionKeys } from '../../models/SessionKeys';
@Component({
  selector: 'app-scholar',
  templateUrl: './scholar.component.html',
  styleUrl: './scholar.component.scss'
})
export class ScholarComponent implements OnInit {
  private modal: Modal;
  selectedJuz: Alljuz;
  alljuz: Alljuz[] = [];
  allchapter: Allchapter[] = [];
  selectedChapter: Allchapter;

  constructor(private postService: PostmethodService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllJuzData();
    this.allChapter();
  }

  async fetchAllJuzData() {
    const result: ApiResponse = await this.postService.apiCallsLocal('assets/json/alljuz.json');
    if (result.status == 0) {
      this.alljuz = result.data;
    }
  }

  async allChapter() {
    const result: ApiResponse = await this.postService.apiCallsLocal('assets/json/allchapter.json');
    if (result.status === 0) {
      this.allchapter = result.data;
      // console.log('fetch chapter data ::: ', JSON.stringify(this.allchapter));
    }
  }
  openModal(modalname: string, data: Alljuz) {
    this.selectedJuz = data;
    const customModal = document.getElementById(modalname);
    this.modal = new Modal(customModal);
    this.modal.show();
  }

  routetoAllJuz() {
    this.router.navigateByUrl('alljuz');
  }

  closeModal(modalname: string) {
    if (this.modal) {
      this.modal.hide();
    }
  }

  readQuranByJuz(data:Allchapter) {
    this.closeModal('individualjuz');
    this.router.navigateByUrl('readbyjuz');
  }
  toggleDropdown(index: number) {
    this.selectedJuz.allverse[index].showDropdown = !this.selectedJuz.allverse[index].showDropdown;
  }

  routeToAllChapter() {
    this.router.navigateByUrl('allchapter')
  }

  
  readQuranByChapter(data:Allchapter) {
    this.selectedChapter = data;
    this.router.navigateByUrl('readquran');
    sessionStorage.setItem(SessionKeys.selectedVerses, JSON.stringify(this.selectedChapter));
    console.log(JSON.stringify(this.selectedChapter));
  }



}
