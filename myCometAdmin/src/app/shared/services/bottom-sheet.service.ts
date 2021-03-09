import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomContactComponent } from '../components/bottom-contact/bottom-contact.component';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {

  constructor(private _bottomSheet: MatBottomSheet) { }
 
  
  openBottomSheet(): void {
    this._bottomSheet.open(BottomContactComponent);
  }
}
