import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private selectedShows:any
  constructor(private http:HttpClient) { }

  showsData(){
    return this.http.get('assets/json/shows.json');
  }

  getMixSingers() {
    return this.http.get('assets/json/mixsinger.json');
  }



  setSelectedShows(singer: any) {
    this.selectedShows = singer;
    localStorage.setItem('selectedShows', JSON.stringify(singer));
  }
  

  getSelectedShows() {
    return this.selectedShows;
  }
}
