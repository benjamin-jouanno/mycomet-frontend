import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottom-contact',
  templateUrl: './bottom-contact.component.html',
  styleUrls: ['./bottom-contact.component.scss']
})
export class BottomContactComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomContactComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
