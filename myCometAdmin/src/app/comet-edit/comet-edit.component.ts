import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Comet } from '../shared/models/cometModel';
import { CometService } from '../shared/services/comet.service';
import { SnackService } from '../shared/services/snack.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/userModel';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-comet-edit',
  templateUrl: './comet-edit.component.html',
  styleUrls: ['./comet-edit.component.scss']
})
export class CometEditComponent implements OnInit {

  isEdit: boolean = false;
  cometId: string;
  comet: Comet = {};
  users: User[];
  searchUsers: User[];
  displayedColumns: string[] = ['firstname', 'lastname', 'view'];
  cometForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    leadUserId: new FormControl('', [Validators.required]),
    availableBudget: new FormControl('', [Validators.required]),
    userFilter: new FormControl('', [Validators.required])
  });

  addUserForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    userFilter: new FormControl('', [Validators.required])
  });

  constructor(private cometService: CometService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private snackService: SnackService,
    private router: Router) { }



  ngOnInit() {
    this.cometForm.disable();
    this.activatedRoute.params.subscribe(params => this.cometId = params.id);
    this.cometForm.controls.userFilter.valueChanges.pipe(
      tap((filter) => {
        this.searchUsers = this.users.filter((user) => user.firstname.includes(filter)
          || user.lastname.includes(filter)
          || (user.firstname + '' + user.lastname).includes(filter));
      })
    ).subscribe();
    this.getData();
    this.getUsers();
  }

  getData() {
    this.cometService.getCometById(this.cometId).subscribe(res => {
      this.comet = res;
      this.cometForm.patchValue(this.comet);
    });
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
      this.searchUsers = this.users;
    })
  }

  delete() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this comet!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.cometService.deleteComet(this.cometId).subscribe(res => {
          this.deleteCometInUsers();
          this.snackService.openSnackBar();
          this._location.back();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }

  deleteCometInUsers() {
    this.users.forEach(user => {
      if (user.cometId === this.comet._id) {
        this.userService.updateUser(user._id, { cometId: '' })
      }
    });
  }

  changeEdit() {
    if (this.isEdit) {
      this.isEdit = false;
      this.cometForm.disable();
    } else {
      this.isEdit = true;
      this.cometForm.enable();
    }
  }

  back() {
    this._location.back();
  }

  update() {
    const tempComet = this.cometForm.getRawValue();
    delete(tempComet.userFilter);
    this.cometService.updateComet(this.comet._id, tempComet).subscribe(res => {
      this.userService.updateUser(tempComet.leadUserId, {cometId: this.comet._id}).subscribe();
      this.snackService.openSnackBar();
      this.changeEdit();
      this.getUsers();
    })
  }

  openUser() {
    this.router.navigateByUrl('/user/' + this.comet.leadUserId);
  }

  filterUsers(): User[] {
  return this.users.filter(user => user.cometId === this.comet._id);
  }

  addUserToComet(): void {
    const userId = this.addUserForm.getRawValue().userId;
    if (!userId) {return};
    this.userService.updateUser(userId, {cometId: this.cometId}).subscribe(res => {
      this.snackService.openSnackBar();
      this.getUsers();
      this.addUserForm.reset();
    })
  }

  removeUserFromComet(userId: string) {
    this.userService.updateUser(userId, {cometId: ''}).subscribe(res => {
      this.snackService.openSnackBar();
      this.getUsers();
    });
  }
}
