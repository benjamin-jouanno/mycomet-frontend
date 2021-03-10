import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { User } from '../../models/userModel';
import { CometService } from '../../services/comet.service';
import { ModalService } from '../../services/modal.service';
import { SnackService } from '../../services/snack.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-comet-modal',
  templateUrl: './add-comet-modal.component.html',
  styleUrls: ['./add-comet-modal.component.scss']
})
export class AddCometModalComponent implements OnInit {

  constructor(private snackService: SnackService,
    private modalService: ModalService,
    private cometService: CometService,
    private userService: UserService) { }

    users: User[];
    searchUsers: User[];
    usersIn: User[];
    previousLeadIs: string;
    tempCometId: string;
    cometForm = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    availableBudget: new FormControl('0', [Validators.required]),
    leadUserId: new FormControl('', [Validators.required]),
    userFilter: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
      this.searchUsers = this.users;
    });
    this.cometForm.controls.userFilter.valueChanges.pipe(
      tap((filter) => {

        this.searchUsers = this.users.filter((user) => user.firstname.includes(filter)
          || user.lastname.includes(filter)
          || (user.firstname + '' + user.lastname).includes(filter));
      })
    ).subscribe();
    this.cometForm.controls.leadUserId.valueChanges.pipe(
      tap((leadUser) => this.onLeadChange(leadUser))
    ).subscribe();
  }

  addComet() {

  }

  onLeadChange(newLead) {
    if (this.tempCometId )
    if (this.previousLeadIs != (null || '')) {

    }
    this.userService.updateUser(newLead, {cometId: this.tempCometId}).subscribe(res => {
      this.previousLeadIs = newLead;
    })
  }

}
