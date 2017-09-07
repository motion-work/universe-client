import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {SkillSetService} from '../../_services/skill-set.service';

@Component({
  selector: 'app-view-skill-set',
  templateUrl: './view-skill-set.component.html',
  styleUrls: ['./view-skill-set.component.scss']
})
export class ViewSkillSetComponent implements OnInit {

  skillSet: any;
  skillSetSubitems = [];

  constructor(private route: ActivatedRoute,
              private skillSetService: SkillSetService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.skillSetService.getSkillSet(params['permalink']).subscribe(response => {
        this.skillSet = response.json().data;
      });
    });
  }

  subscribe(id: number) {
    this.userService.subscribe(id).subscribe(data => {
      console.log(data);
    });
  }

  unsubscribe(id: number) {
    this.userService.unsubscribe(id).subscribe(data => {
      console.log(data);
    });
  }

}
