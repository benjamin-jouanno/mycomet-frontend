import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Comet } from '../../models/cometModel';
import { CometService } from '../../services/comet.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-comet-tab',
  templateUrl: './comet-tab.component.html',
  styleUrls: ['./comet-tab.component.scss']
})
export class CometTabComponent implements OnInit {

  constructor(private cometService: CometService,
      private modalService: ModalService,
      private router: Router) { }

  comets: Comet[] = [];

  ngOnInit() {
    this.getData();
    this.modalService.dialog.afterAllClosed.pipe(
      tap(() => this.refreshData())
    ).subscribe();
  }

  getData(){
    this.cometService.getAllComets().subscribe( res => {
      this.comets = res;
    });
  }

  addComet() {
    this.modalService.openAddComet();
  }

  refreshData() {

  }

  openCometEdit(cometId) {
    this.router.navigateByUrl('/comet/' + cometId);
  }

}
