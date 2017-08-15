import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GalaxyService} from '../_services/galaxy.service';

@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.css']
})
export class AcceptInviteComponent implements OnInit {

  permalink = '';
  token = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private galaxyService: GalaxyService) {
  }

  ngOnInit() {
    this.getParams();
    this.acceptInvite();
  }

  getParams() {
    this.route.params.subscribe((params: Params) => {
      this.permalink = params['galaxyPermalink'];
      this.token = params['token'];
    });
  }

  acceptInvite() {
    this.galaxyService.accept(this.permalink, this.token).subscribe(data => {
      this.router.navigate(['galaxy', this.permalink]);
    });
  }

}
