import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortsService {

  reelsUrl = 'assets/json/shorts.json'
  constructor(private http:HttpClient) { }



  allShortsData(){
    return this.http.get(this.reelsUrl)
  }
}
