import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BottomtabserviceService {
  setVisibility(arg0: boolean) {
    throw new Error('Method not implemented.');
  }

  private isVisible: boolean = true;
  visibilityChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.visibilityChanged.emit(this.isVisible);
  }

  getVisibility() {
    return this.isVisible;
  }
}
