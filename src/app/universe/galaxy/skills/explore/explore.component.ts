import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GalaxyService} from '../../_services/galaxy.service';
import {Http} from "@angular/http";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  skillSets = [];
  query = '';

  constructor(private galaxyService: GalaxyService) {
  }

  async ngOnInit() {

    this.skillSets = await this.galaxyService.skillSets().map(it => it.json()).toPromise();
  }

  search() {
    console.log(this.query);
  }

}
