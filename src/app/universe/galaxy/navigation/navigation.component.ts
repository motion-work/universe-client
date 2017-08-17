import {Component, OnInit} from '@angular/core';
import {GalaxyService} from '../_services/galaxy.service';
import {AuthService} from '../../../authentication/_services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  me;
  galaxy;

  constructor(private galaxyService: GalaxyService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.me().subscribe(data => this.me = data.json());
    this.galaxyService.currentGalaxy().subscribe(data => this.galaxy = data.json());
  }

}
