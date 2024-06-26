import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabVisibilityService {

  private isVisible = new BehaviorSubject<boolean>(true);

  constructor() { }

  setVisibility(isVisible: boolean) {
    this.isVisible.next(isVisible);
  }

  getVisibility() {
    return this.isVisible.asObservable();
  }
}
