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

  /**
   * @param permalink
   * @return {Observable<Response>}
   */
  get(permalink) {
    return this.http.get(AuthService.HOST + `api/galaxy/${permalink}`);
  }

  /**
   * @param galaxy
   * @return {Observable<Response>}
   */
  store(galaxy) {
    return this.http.post(AuthService.HOST + 'api/galaxy', galaxy);
  }

  /**
   * @param user
   * @param permalink
   * @return {Observable<Response>}
   */
  sendInvite(user, permalink) {
    return this.http.post(AuthService.HOST + `api/galaxy/invite/${permalink}`, user);
  }

  /**
   * @param permalink
   * @param token
   * @return {Observable<Response>}
   */
  accept(permalink, token) {
    return this.http.get(AuthService.HOST + `api/invite/accept/${permalink}/${token}`);
  }

  /**
   * @param skillSet
   * @return {Observable<Response>}
   */
  storeSkillSet(skillSet) {
    return this.http.post(AuthService.HOST + `api/galaxy/${this.getCurrentGalaxyPermalink()}/createSkillSet`, skillSet);
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
   * Get the current galaxy permalink from local storage
   *
   * @return {string|null}
   */
  getCurrentGalaxyPermalink() {
    return localStorage.getItem('currentGalaxy');
  }

  /**
   * Get the current galaxy
   *
   * @return {Observable<Response>}
   */
  currentGalaxy() {
    return this.http.get(AuthService.HOST + `api/galaxy/${this.getCurrentGalaxyPermalink()}`);
  }

}
