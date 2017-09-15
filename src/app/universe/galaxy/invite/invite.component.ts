import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GalaxyService} from '../../../shared/_services/galaxy.service';
import {Galaxy} from '../../../shared/_models/galaxy.model';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {


  permalink = '';
  galaxy = {
    name: undefined
  };
  user = {email: undefined};
  loading = false;

  constructor(private route: ActivatedRoute,
              private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.getParams();
    this.getGalaxy();
  }

  selectAllContent($event) {
    $event.target.select();
  }

  getGalaxy() {
    this.galaxyService.get(this.permalink).subscribe((data: Galaxy) => {
      this.galaxy = data;
    });
  }

  getParams() {
    this.route.params.subscribe((params: Params) => {
      this.permalink = params['permalink'];
    });
  }

  sendInvite() {
    this.galaxyService.sendInvite(this.user, this.permalink).subscribe(data => {
      //
    });
  }

}
