import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlljuzService {

  constructor(private http: HttpClient) { }

  allJuzData() {
    return this.http.get('assets/json/alljuz.json');
  }
}
