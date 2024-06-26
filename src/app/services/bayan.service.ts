import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BayanService {

  private selectedScholar: any;

  constructor(private http: HttpClient) { }


  bayansData() {
    return this.http.get('assets/json/bayan.json');
  }

  getScholar() {
    return this.http.get('assets/json/bayan.json');
  }



  setSelectedScholar(singer: any) {
    this.selectedScholar = singer;
    localStorage.setItem('selectedScholar', JSON.stringify(singer));
  }


  getSelectedScholar() {
    return this.selectedScholar;
  }
}
