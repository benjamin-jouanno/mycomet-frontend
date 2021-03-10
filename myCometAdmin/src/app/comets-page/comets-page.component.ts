import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Comet } from '../shared/models/cometModel';
import { User } from '../shared/models/userModel';
import { CometService } from '../shared/services/comet.service';
import { ModalService } from '../shared/services/modal.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-comets-page',
  templateUrl: './comets-page.component.html',
  styleUrls: ['./comets-page.component.scss']
})
export class CometsPageComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private modalService: ModalService,
    private cometService: CometService) { }

    public users: User[] = [];
    dataSource: any;
    comets: Comet[];
  displayedColumns: string[] = ['name', 'leader', 'availableBudget', 'view'];


  ngOnInit() {
    this.getData();
    this.getUser();
    this.modalService.dialog.afterAllClosed.pipe(
      tap(() => this.refreshData())
    ).subscribe();
  }

  getData() {
    this.cometService.getAllComets().subscribe(res => {
      this.comets = res;
    });
  }

  getUser() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  openComet(cometId) {
    this.router.navigateByUrl('/comet/' + cometId);
  }

  addComet() {
    this.modalService.openAddComet();
  }

  refreshData() {
    this.getData();
  }

  displayUser(cometId: string): string {
    const tempUser = this.users.find(user => user.cometId === cometId);
    if (tempUser) {
    return (tempUser.firstname + ' ' + tempUser.lastname);
    }
  }
}
