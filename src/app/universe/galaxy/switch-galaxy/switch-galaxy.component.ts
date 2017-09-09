import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/_services/auth.service';

@Component({
  selector: 'app-switch-galaxy',
  templateUrl: './switch-galaxy.component.html',
  styleUrls: ['./switch-galaxy.component.scss']
})
export class SwitchGalaxyComponent implements OnInit {

  galaxies = [];

  constructor(private authService: AuthService) {
  }

  async ngOnInit() {

    this.galaxies = await this.authService.joinedGalaxies().map(galaxies => galaxies.json()).toPromise();

  }

}
