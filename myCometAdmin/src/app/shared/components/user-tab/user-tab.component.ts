import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/userModel';
import { BottomSheetService } from '../../services/bottom-sheet.service';
import { ModalService } from '../../services/modal.service';
import { UserService } from '../../services/user.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.scss']
})
export class UserTabComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private bottomSheetService: BottomSheetService,
    private modalService: ModalService) { }

  users: User[] = [];

  ngOnInit() {
    this.getUser();
    this.modalService.dialog.afterAllClosed.pipe(
      tap(() => this.refreshData())
    ).subscribe();
  }

  getUser(){
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    },
    err => {

    });
  }

  openUser(userid: string) {
    this.router.navigateByUrl('/user/' + userid);
  }

  openContact() {
    this.bottomSheetService.openBottomSheet();
  }

  addUser() {
    this.modalService.openAddUser();
  }


  refreshData() {
    this.getUser();
  }
}
