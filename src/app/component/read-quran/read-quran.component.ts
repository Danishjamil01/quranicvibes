import { Component } from '@angular/core';
import { SessionKeys } from '../../models/SessionKeys';
import { TabVisibilityService } from '../../services/tab-visibility.service';
import { Allchapter } from '../../models/Allchapter';

@Component({
  selector: 'app-read-quran',
  templateUrl: './read-quran.component.html',
  styleUrls: ['./read-quran.component.scss']
})
export class ReadQuranComponent {

  selectedChapter: any;
  allverse: Allchapter[] = [];
  constructor(private tabvisibilityservice: TabVisibilityService) { }

  ngOnInit(): void {
    this.tabvisibilityservice.setVisibility(false)
    this.getData();
  }

  getData() {
    const data = sessionStorage.getItem(SessionKeys.selectedVerses);
    if (!!data) {
      this.selectedChapter = JSON.parse(data);
      console.log("danish ::: " + JSON.stringify(this.selectedChapter))
    };
  }

  openedDropdownIndex: number | null = null;

  toggleDropdown(index: number) {
    if (this.openedDropdownIndex === index) {
      this.openedDropdownIndex = null;
    } else {
      this.openedDropdownIndex = index;
    }
  }
}
