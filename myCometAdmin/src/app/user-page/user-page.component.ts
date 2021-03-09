import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/userModel';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users: User[] = [];

  displayedColumns: string[] = ['firstname', 'lastname', 'commet', 'isAdmin'];

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    },
    err => {

    });
  }

}
