import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../../authentication/_services/auth.service';

@Injectable()
export class SkillSetService {

  constructor(private http: AuthHttp) {
  }

  /**
   * @return {Observable<Response>}
   */
  skillSets() {
    return this.http.get(AuthService.HOST + `api/skillSets`);
  }

  /**
   * @param permalink
   * @return {Observable<Response>}
   */
  getSkillSet(permalink) {
    return this.http.get(AuthService.HOST + `api/skillSet/${permalink}`);
  }

}
