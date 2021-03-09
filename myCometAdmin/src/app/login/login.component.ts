import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/userModel';
import { AuthService } from '../shared/services/auth.service';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userToLog: User;
  
  authForm = new FormGroup ({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private loginService: AuthService,
      private router: Router,
      private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.hide();
  }

  login() {
    this.userToLog = this.authForm.getRawValue();
    this.loginService.login(this.userToLog).subscribe( res => {
      this.loginService.setToken(res.token);
      this.router.navigateByUrl('/dashboard');
    }, 
    err => {
      console.log(err);
    });
  }

}
