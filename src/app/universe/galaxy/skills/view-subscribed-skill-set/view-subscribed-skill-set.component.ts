import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SkillSetService} from '../../../../shared/_services/skill-set.service';
import {SkillSet} from '../../../../shared/_models/skill-set.model';

@Component({
  selector: 'app-view-subscribed-skill-set',
  templateUrl: './view-subscribed-skill-set.component.html',
  styleUrls: ['./view-subscribed-skill-set.component.scss']
})
export class ViewSubscribedSkillSetComponent implements OnInit {

  skillSet;

  constructor(private route: ActivatedRoute,
              private skillSetService: SkillSetService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.skillSetService.getSubscribedSkillSet(params['permalink'])
        .subscribe((data: SkillSet) => {
        this.skillSet = data;
      });
    });
  }

}
