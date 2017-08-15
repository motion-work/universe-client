import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GalaxyService} from '../_services/galaxy.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  permalink = '';
  galaxy = {};
  user = {email: undefined};
  loading = false;

  constructor(private route: ActivatedRoute,
              private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.getParams();
    this.getGalaxy();
  }

  getGalaxy() {
    this.galaxyService.get(this.permalink).subscribe(data => {
      this.galaxy = data.json();
    });
  }

  getParams() {
    this.route.parent.params.subscribe((params: Params) => {
      this.permalink = params['permalink'];
    });
  }

  sendInvite() {
    this.galaxyService.sendInvite(this.user, this.permalink).subscribe(data => {
      console.log(data);
    });
  }

}
