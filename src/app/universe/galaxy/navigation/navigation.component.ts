import {Component, OnInit} from '@angular/core';
import {GalaxyService} from '../_services/galaxy.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  galaxy;

  constructor(private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.galaxyService.currentGalaxy().subscribe(data => this.galaxy = data.json());
  }

}
