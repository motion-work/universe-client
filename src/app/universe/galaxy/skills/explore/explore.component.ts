import {Component, OnInit} from '@angular/core';
import {GalaxyService} from '../../_services/galaxy.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  skillSets = [];

  constructor(private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.galaxyService.skillSets().subscribe(response => {
      this.skillSets = response.json();
    });
  }

}
