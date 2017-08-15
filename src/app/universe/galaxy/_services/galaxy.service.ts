import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../authentication/_services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class GalaxyService {

  static HOST = environment.api_host;

  constructor(private http: AuthHttp, private router: Router) {
  }

  get(permalink) {
    return this.http.get(AuthService.HOST + `api/galaxy/${permalink}`);
  }

  store(galaxy) {
    return this.http.post(AuthService.HOST + 'api/galaxy', galaxy);
  }

  sendInvite(user, permalink) {
    return this.http.post(AuthService.HOST + `api/galaxy/invite/${permalink}`, user);
  }

  accept(permalink, token) {
    return this.http.get(AuthService.HOST + `api/invite/accept/${permalink}/${token}`);
  }

}
