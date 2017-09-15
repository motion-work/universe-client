import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../authentication/_services/auth.service';
import {SkillSet} from '../_models/skill-set.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SkillSetService {

  constructor(private http: AuthHttp) {
  }

  /**
   * @return {Observable<Response>}
   */
  skillSets(): Observable<SkillSet[]> {
    return this.http.get(AuthService.HOST + `api/skillSets`)
      .map(response => response.json() as SkillSet[]);
  }

  /**
   * @param permalink
   * @return {Observable<Response>}
   */
  getSkillSet(permalink): Observable<SkillSet> {
    return this.http.get(AuthService.HOST + `api/skillSet/${permalink}`)
      .map(response => response.json().data as SkillSet);
  }

  getSubscribedSkillSet(permalink): Observable<SkillSet> {
    return this.http.get(AuthService.HOST + `api/skillSet/${permalink}/subscribed`)
      .map(response => response.json() as SkillSet);
  }

}
