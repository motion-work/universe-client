import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GalaxyService} from '../../_services/galaxy.service';

@Component({
  selector: 'app-view-skill-set',
  templateUrl: './view-skill-set.component.html',
  styleUrls: ['./view-skill-set.component.scss']
})
export class ViewSkillSetComponent implements OnInit {

  skillSet: any;
  skillSetSubitems = [];

  constructor(private route: ActivatedRoute, private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.galaxyService.getSkillSet(params['permalink']).subscribe(data => {
        this.skillSet = data.json();
      });
    });
  }

}
