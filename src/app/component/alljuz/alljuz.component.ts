import { Component } from '@angular/core';
import { Modal } from 'bootstrap';
import { Alljuz } from '../../models/Alljuz';
import { PostmethodService } from '../../services/postmethod.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../../models/ApiResponse';
import { TabVisibilityService } from '../../services/tab-visibility.service';

@Component({
  selector: 'app-alljuz',
  templateUrl: './alljuz.component.html',
  styleUrl: './alljuz.component.scss'
})
export class AlljuzComponent {
  private modal: Modal;
  selectedJuz: Alljuz;
  alljuz: Alljuz[] = [];
  isClickedSearch: boolean = false;
  isSearch:boolean = true;
  searchQuery: string = '';


  constructor(private postService: PostmethodService, private router: Router,private tabvisibilityservice:TabVisibilityService) { }

  ngOnInit(): void {
    this.tabvisibilityservice.setVisibility(false)
    this.fetchAllJuzData();
  }


  searchChapter() {
    this.isClickedSearch = true;
    this.isSearch = false;
  }

  async fetchAllJuzData() {
    const result: ApiResponse = await this.postService.apiCallsLocal('assets/json/alljuz.json');
    if (result.status == 0) {
      this.alljuz = result.data;
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

  readQuran() {
    this.closeModal('individualjuz');
    this.router.navigateByUrl('readbyjuz');
  }
  toggleDropdown(index: number) {
    this.selectedJuz.allverse[index].showDropdown = !this.selectedJuz.allverse[index].showDropdown;
  }

  routeToAllChapter() {
    this.router.navigateByUrl('allchapter')
  }


  get filteredChapters() {
    return this.alljuz.filter(chapter =>
      chapter.juzname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      chapter.englishjuz.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }



}
