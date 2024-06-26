import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewhitsService {

  newhitsUrl = 'assets/json/newhits.json';
  freshnaatUrl = 'assets/json/freshnaat.json'

  constructor(private http: HttpClient) { }

  newHitsData() {
    return this.http.get(this.newhitsUrl);
  }

  freshnaatData() {
    return this.http.get(this.freshnaatUrl);
  }
}
