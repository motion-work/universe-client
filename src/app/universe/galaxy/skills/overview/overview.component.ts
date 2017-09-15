import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../shared/_services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  subscribedSkillSets = [];
  createdSkillSets = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.subscribedSkillSets().subscribe(response => {
      this.subscribedSkillSets = response.json();
    });

    this.userService.createdSkillSets().subscribe(response => {
      this.createdSkillSets = response.json();
    });
  }

}
