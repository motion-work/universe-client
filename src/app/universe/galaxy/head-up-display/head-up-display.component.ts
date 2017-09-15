import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/_services/auth.service';
import {GalaxyService} from '../../../shared/_services/galaxy.service';
import {Galaxy} from '../../../shared/_models/galaxy.model';
import {User} from '../../../shared/_models/user.model';

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
    this.authService.me().subscribe((data: User) => this.me = data);
    this.galaxyService.currentGalaxy().subscribe((data: Galaxy) => this.galaxy = data);
  }

}
