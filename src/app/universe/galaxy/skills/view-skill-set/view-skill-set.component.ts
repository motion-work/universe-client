import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GalaxyService} from '../../_services/galaxy.service';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-view-skill-set',
  templateUrl: './view-skill-set.component.html',
  styleUrls: ['./view-skill-set.component.scss']
})
export class ViewSkillSetComponent implements OnInit {

  skillSet: any;
  skillSetSubitems = [];

  constructor(private route: ActivatedRoute,
              private galaxyService: GalaxyService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.galaxyService.getSkillSet(params['permalink']).subscribe(data => {
        this.skillSet = data.json();
      });
    });
  }

  subscribe(id: number) {
    this.userService.subscribe(id).subscribe(data => {
      console.log(data);
    });
  }

}
