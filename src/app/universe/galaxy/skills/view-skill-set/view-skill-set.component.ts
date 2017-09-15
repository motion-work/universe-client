import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../../../shared/_services/user.service';
import {SkillSetService} from '../../../../shared/_services/skill-set.service';
import {toPromise} from 'rxjs/operator/toPromise';
import {SkillSet} from '../../../../shared/_models/skill-set.model';

@Component({
  selector: 'app-view-skill-set',
  templateUrl: './view-skill-set.component.html',
  styleUrls: ['./view-skill-set.component.scss']
})
export class ViewSkillSetComponent implements OnInit {

  @Input() permalink: string;

  skillSet: SkillSet;

  constructor(private skillSetService: SkillSetService,
              private userService: UserService) {
  }

  async ngOnInit() {
    this.skillSetService.getSkillSet(this.permalink).subscribe((data: SkillSet) => {
      this.skillSet = data;
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
