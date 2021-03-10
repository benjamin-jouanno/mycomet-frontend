import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comet } from '../../models/cometModel';
import { CometService } from '../../services/comet.service';
import { ModalService } from '../../services/modal.service';
import { SnackService } from '../../services/snack.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {

  comets: Comet[] = [];
  userForm = new FormGroup ({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phoneNbr: new FormControl('', [Validators.required]),
    isAdmin: new FormControl('false', [Validators.required]),
    cometId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService,
      private snackService: SnackService,
      private modalService: ModalService,
      private cometService: CometService) { }

  ngOnInit() {
    this.cometService.getAllComets().subscribe(res => {
      this.comets = res;
    });
  }

  addUser(): boolean {
    const temp = this.userForm.getRawValue();
    this.userService.createUser(temp).subscribe(res => {
      delete temp.password;
      const tempToken= res.token;
      this.userService.getByToken(tempToken).subscribe(res => {
        const tempId = res._id;
        this.userService.updateUser(tempId, temp).subscribe(res => {
          this.snackService.openSnackBar();
          this.modalService.closeAll();
          return true
        })
      })
    },
    err => {
      return false;
    });
    return true
  }
}
