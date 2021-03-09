import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { User } from '../shared/models/userModel';
import { ModalService } from '../shared/services/modal.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private userService: UserService,
      private router: Router,
      private modalService: ModalService) { }

  public users: User[] = [];
  dataSource: any;

  displayedColumns: string[] = ['firstname', 'lastname', 'commet', 'email', 'phoneNbr' ,'isAdmin'];

  ngOnInit() {
    this.getUser();
    this.modalService.dialog.afterAllClosed.pipe(
      tap(() => this.refreshData())
    ).subscribe();
  }

  getUser(){
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
      this.dataSource = new MatTableDataSource(this.users);
    },
    err => {

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openUser(userid: string) {
    this.router.navigateByUrl('/user/' + userid);
  }

  addUser() {
    this.modalService.openAddUser();
  }

  refreshData() {
    this.getUser();
  }
}
