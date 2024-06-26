import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllcountryService {

  constructor(private http:HttpClient) { }

  allcountryLIst(): Observable<[]>  {
    return this.http.get<[]>('assets/json/country.json');
  }
}
