import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GalaxyService} from '../_services/galaxy.service';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss']
})
export class GalaxyComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private galaxyService: GalaxyService) {
    this.route.params.subscribe((params: Params) => {
      this.galaxyService.setCurrentGalaxy(params['permalink']);
    });
  }

  ngOnInit() {
  }

}
