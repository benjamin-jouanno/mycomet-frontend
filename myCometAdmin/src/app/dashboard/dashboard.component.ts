import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private toolbarService: ToolbarService) {}

  ngOnInit() {
    true ? this.toolbarService.show() : this.router.navigateByUrl('/login');
  }

}
