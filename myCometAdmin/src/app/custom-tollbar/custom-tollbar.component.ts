import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  selector: 'app-custom-tollbar',
  templateUrl: './custom-tollbar.component.html',
  styleUrls: ['./custom-tollbar.component.scss']
})
export class CustomTollbarComponent implements OnInit {
  showFiller: boolean = false;
  constructor(private authService: AuthService,
    public toolbarService: ToolbarService,
    private router: Router) { }

  ngOnInit() {
  }

  disconnect() {
    this.authService.deleteToken();
    this.router.navigateByUrl('/login');
  }

}
