import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MixsingerService {
  private selectedSinger: any;
  
  constructor(private http: HttpClient) { }

  mixsingerData() {
    return this.http.get('assets/json/mixsinger.json');
  }

  topsongData() {
    return this.http.get('assets/json/topsong.json')
  }

  getMixSingers() {
    return this.http.get('assets/json/mixsinger.json');
  }



  setSelectedSinger(singer: any) {
    this.selectedSinger = singer;
    localStorage.setItem('selectedSinger', JSON.stringify(singer));
  }
  

  getSelectedSinger() {
    return this.selectedSinger;
  }

}
