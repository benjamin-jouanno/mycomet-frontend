import { Component, OnInit } from '@angular/core';
import { Comet } from '../../models/cometModel';
import { CometService } from '../../services/comet.service';

@Component({
  selector: 'app-comet-tab',
  templateUrl: './comet-tab.component.html',
  styleUrls: ['./comet-tab.component.scss']
})
export class CometTabComponent implements OnInit {

  constructor(private cometService: CometService) { }

  comets: Comet[] = [];

  ngOnInit() {
    this.cometService.getAllComets().subscribe( res => {
      this.comets = res;
    })
  }

}
