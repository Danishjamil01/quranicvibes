import { Component, OnInit } from '@angular/core';
import { Allchapter } from '../../models/Allchapter';
import { ApiResponse } from '../../models/ApiResponse';
import { PostmethodService } from '../../services/postmethod.service';
import { Router } from '@angular/router';
import { SessionKeys } from '../../models/SessionKeys';
import { TabVisibilityService } from '../../services/tab-visibility.service';

@Component({
  selector: 'app-all-chapter',
  templateUrl: './all-chapter.component.html',
  styleUrl: './all-chapter.component.scss'
})
export class AllChapterComponent implements OnInit {
  selectedChapter: Allchapter;
  searchQuery: string = '';
  allchapter: Allchapter[] = [];
  isClickedSearch: boolean = false;
  isSearch: boolean = true;
  isShow: boolean = true;

  constructor(private postService: PostmethodService, private router: Router,private tabvisibilityservice:TabVisibilityService) {

  }

  ngOnInit(): void {
    this.tabvisibilityservice.setVisibility(false);
    this.allChapter();
    this.changeName();
  }

  searchChapter() {
    this.isClickedSearch = true;
    this.isSearch = false;
  }

  changeName() {
    setInterval(() => {
      this.isShow = !this.isShow;
    }, 4000);
  }

  get filteredChapters() {
    return this.allchapter.filter(chapter =>
      chapter.chaptername.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      chapter.arabicname.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  async allChapter() {
    const result: ApiResponse = await this.postService.apiCallsLocal('assets/json/allchapter.json');
    if (result.status === 0) {
      this.allchapter = result.data;
      console.log('data', JSON.stringify(this.allchapter));
    }
  }

  readQuran(data:Allchapter) {
    this.selectedChapter = data;
    this.router.navigateByUrl('readquran');
    sessionStorage.setItem(SessionKeys.selectedVerses, JSON.stringify(this.selectedChapter));
    console.log(JSON.stringify(this.selectedChapter));
  }
}
