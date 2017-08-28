import {Component, OnInit} from '@angular/core';
import {GalaxyService} from '../../_services/galaxy.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  skillSets = [];

  constructor(private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.galaxyService.skillSets().subscribe(response => {
      this.skillSets = response.json();
    });
  }

}
