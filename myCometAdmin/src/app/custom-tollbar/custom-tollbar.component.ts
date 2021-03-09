import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  selector: 'app-custom-tollbar',
  templateUrl: './custom-tollbar.component.html',
  styleUrls: ['./custom-tollbar.component.scss']
})
export class CustomTollbarComponent implements OnInit {
  showFiller: boolean = false;
  constructor(private authService: AuthService, public toolbarService: ToolbarService) { }

  ngOnInit() {
  }

}
