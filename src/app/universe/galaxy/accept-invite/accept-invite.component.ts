import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GalaxyService} from '../../../shared/_services/galaxy.service';
import {AuthService} from '../../../authentication/_services/auth.service';

@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.scss']
})
export class AcceptInviteComponent implements OnInit {

  permalink = '';
  token = '';
  galaxy = {};
  inviteValidationFailed = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private galaxyService: GalaxyService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getParams();
    this.acceptInvite();
  }

  getParams() {
    this.route.params.subscribe((params: Params) => {
      this.permalink = params['permalink'];
      this.token = params['token'];
    });
  }

  acceptInvite() {
    this.galaxyService.accept(this.permalink, this.token).subscribe(data => {
      this.router.navigate([`/galaxy/${this.permalink}/cosmos`]);
    },
    error => this.inviteValidationFailed = true);
  }

}
