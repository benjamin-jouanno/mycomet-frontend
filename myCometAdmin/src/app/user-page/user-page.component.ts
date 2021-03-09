import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../shared/models/userModel';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private userService: UserService,
      private router: Router) { }

  public users: User[] = [];
  dataSource: any;

  displayedColumns: string[] = ['firstname', 'lastname', 'commet', 'email', 'phoneNbr' ,'isAdmin'];

  ngOnInit() {
    this.getUser();
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
}
