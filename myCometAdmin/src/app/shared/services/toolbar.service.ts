import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  public isDisplayed: boolean = false;
  constructor() { }

  hide() {
    this.isDisplayed = false;
  }

  show() {
    this.isDisplayed = true;
  }
}
