import {Component, OnInit} from '@angular/core';
import {GalaxyService} from '../../_services/galaxy.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  img = 'https://images.unsplash.com/photo-1492446190781-58ac4285911d?dpr=2&auto=format&fit=crop&w=1500&h=1082&q=80&cs=tinysrgb&crop=';
  skillSets = [];

  constructor(private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.galaxyService.skillSets().subscribe(response => {
      this.skillSets = response.json();
    });
  }

}
