import { Component, OnInit } from '@angular/core';
import { Modal, Offcanvas } from 'bootstrap';
import { AlljuzService } from '../../services/alljuz.service';
import { ApiResponse } from '../../models/ApiResponse';
import { PostmethodService } from '../../services/postmethod.service';
import { Alljuz } from '../../models/Alljuz';
import { Router } from '@angular/router';
import { SessionKeys } from '../../models/SessionKeys';
@Component({
  selector: 'app-scholar',
  templateUrl: './scholar.component.html',
  styleUrl: './scholar.component.scss'
})
export class ScholarComponent implements OnInit {
  private modal: Modal;
  private offcanvas: Offcanvas;
  selectedJuz: Alljuz;
  alljuz: Alljuz[] = [];

  constructor(private allJuzService: AlljuzService, private postService: PostmethodService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllJuzData();
    // this.openOffcanvas('readQuran');
  }

  async fetchAllJuzData() {
    const result: ApiResponse = await this.postService.apiCallsLocal('assets/json/alljuz.json');
    if (result.status == 0) {
      this.alljuz = result.data;
      // console.log('data', JSON.stringify(this.alljuz));
    }
  }

  openModal(modalname: string, data: Alljuz) {
    this.selectedJuz = data;
    // console.log("danish ::: " + JSON.stringify(this.selectedJuz));
    const customModal = document.getElementById(modalname);
    this.modal = new Modal(customModal);
    this.modal.show();
  }

  closeModal(modalname: string) {
    if (this.modal) {
      this.modal.hide();
    }
  }

  readQuran() {
    this.closeModal('individualjuz');
    this.router.navigateByUrl('allchapter');
    // sessionStorage.setItem(SessionKeys.selectedVerses, JSON.stringify(this.selectedJuz));
  }
  toggleDropdown(index: number) {
    this.selectedJuz.allverse[index].showDropdown = !this.selectedJuz.allverse[index].showDropdown;
  }
}
