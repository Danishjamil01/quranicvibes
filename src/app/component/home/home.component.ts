import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewhitsService } from '../../services/newhits.service';
import { HttpClient } from '@angular/common/http';
import { MixsingerService } from '../../services/mixsinger.service';
import { BayanService } from '../../services/bayan.service';
import { ShowsService } from '../../services/shows.service';
import { AllsongsService } from '../../services/allsongs.service';
import { Offcanvas } from 'bootstrap';
import { TabVisibilityService } from '../../services/tab-visibility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private offcanvas: Offcanvas;
  newhits: any;
  mixsinger: any;
  bayans: any;
  shows: any;
  fresh: any;
  topsong: any;
  selectedSinger: any;
  // isShowAll: boolean = true;
  // isShowVibe: Boolean = false;
  // isShowScholar: Boolean = false;
  // isShowPodcast: Boolean = false;
  // tabs: string[] = ['Al Quran', 'Vibe','All' ];

  // selectTab(tab: string) {
  //   this.selectedTab = tab;
  //   sessionStorage.setItem('selectedTab', tab);
  //   if (tab === 'Vibe') {
  //     this.isShowVibe = true;
  //     this.isShowAll = false;
  //     this.isShowScholar = false;
  //     this.isShowPodcast = false;
  //   }
  //   else if (tab === 'Al Quran') {
  //     this.isShowVibe = false;
  //     this.isShowAll = false;
  //     this.isShowScholar = true;
  //     this.isShowPodcast = false;
  //   }
  //   else if (tab === 'Podcast') {
  //     this.isShowVibe = false;
  //     this.isShowAll = false;
  //     this.isShowScholar = false;
  //     this.isShowPodcast = true;
  //   }
  //   else {
  //     this.isShowVibe = false;
  //     this.isShowAll = true;
  //     this.isShowScholar = false;
  //     this.isShowPodcast = false;
  //   }
  //   this.isShowScholar = tab === 'Scholar';
  //   this.isShowAll = tab === 'All';
  //   this.isShowVibe = tab === 'Vibe';
  //   this.isShowPodcast = tab === 'Podcast';
  // }
  selectedTab: string = 'alquran';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  openProfile() {
    const element = document.getElementById('sidebar');
    this.offcanvas = new Offcanvas(element);
    this.offcanvas.show()
  }
  constructor(private router: Router, private TabVisibilityService: TabVisibilityService, private allsongservice: AllsongsService, private newHItsService: NewhitsService, private http: HttpClient, private mixsingerservice: MixsingerService, private bayanservice: BayanService, private showsservice: ShowsService) {


  }


  ngOnInit(): void {
    this.TabVisibilityService.setVisibility(true);
    this.selectedTab = sessionStorage.getItem('selectedTab') || 'All'; // Initialize selectedTab from local storage, defaulting to 'All'
    // this.selectTab(this.selectedTab);

    this.newHItsService.newHitsData().subscribe((data) => {
      this.newhits = data;

    });

    this.mixsingerservice.mixsingerData().subscribe((data) => {
      this.mixsinger = data;

    });

    this.bayanservice.bayansData().subscribe((data) => {
      this.bayans = data;
    });

    this.showsservice.showsData().subscribe((data) => {
      this.shows = data;
    });
    this.newHItsService.freshnaatData().subscribe((data) => {
      this.fresh = data;
    });
    this.mixsingerservice.topsongData().subscribe((data) => {
      this.topsong = data;
    });
    // this.allsongservice.allSongData().subscribe((data) => {
    //   this.selectedSinger = data;
    // })
  }



  // routeToSongList() {
  //   this.router.navigateByUrl('artistsonglist');
  // }


  routeToSingersData(singer: any) {
    this.mixsingerservice.setSelectedSinger(singer);
    this.router.navigate(['/artistsonglist']);
  }

  routeToScholarsData(bayan: any) {
    this.bayanservice.setSelectedScholar(bayan);
    this.router.navigate(['/bayans']);
  }

  routeToShows(show: any) {
    this.showsservice.setSelectedShows(show);
    this.router.navigate(['/shows']);
  }



}
