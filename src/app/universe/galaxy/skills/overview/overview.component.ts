import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  mySkills = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.mySkills().subscribe(response => {
      this.mySkills = response.json();
    });
  }

}
