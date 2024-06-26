import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllsongsService {
  private selectedSinger: any;

  constructor(private http: HttpClient) { }

  

  allSongData(): Observable<any> {
    return this.http.get('assets/json/mixsinger.json');
  }
}
