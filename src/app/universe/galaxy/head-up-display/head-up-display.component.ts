import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/_services/auth.service';
import {GalaxyService} from '../_services/galaxy.service';

@Component({
  selector: 'app-head-up-display',
  templateUrl: './head-up-display.component.html',
  styleUrls: ['./head-up-display.component.scss']
})
export class HeadUpDisplayComponent implements OnInit {

  me;
  galaxy;

  constructor(private authService: AuthService,
              private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.authService.me().subscribe(data => this.me = data.json());
    this.galaxyService.currentGalaxy().subscribe(data => this.galaxy = data.json());
  }

}
