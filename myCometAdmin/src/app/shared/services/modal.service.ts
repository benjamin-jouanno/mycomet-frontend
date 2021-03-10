import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddCometModalComponent } from '../components/add-comet-modal/add-comet-modal.component';
import { AddUserModalComponent } from '../components/add-user-modal/add-user-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  openAddUser(): boolean {
    const dialogRef = this.dialog.open(AddUserModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      return true;
    });
    return true;
  }

  openAddComet(): boolean {
    const dialogRef = this.dialog.open(AddCometModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      return true;
    });
    return true;
  }

  closeAll() {
    this.dialog.closeAll();
  }
}
