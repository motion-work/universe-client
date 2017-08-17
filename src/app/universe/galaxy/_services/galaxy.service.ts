import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../../authentication/_services/auth.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GalaxyService {

  constructor(private http: AuthHttp) {
  }

  /**
   * @param permalink
   * @return {Promise<boolean|boolean>}
   */
  exists(permalink) {
    return this.http.get(AuthService.HOST + `api/galaxy/${permalink}`);
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

  /**
   * Set the current galaxy to local storage
   *
   * @param permalink
   */
  setCurrentGalaxy(permalink) {
    return localStorage.setItem('currentGalaxy', permalink);
  }

  /**
   * Get the current galaxy from local storage
   *
   * @return {string|null}
   */
  getCurrentGalaxy() {
    return localStorage.getItem('currentGalaxy');
  }

  currentGalaxy() {
    return this.http.get(AuthService.HOST + `api/galaxy/${this.getCurrentGalaxy()}`);
  }

}
