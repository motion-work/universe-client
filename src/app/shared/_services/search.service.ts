import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../authentication/_services/auth.service';
import {Observable} from "rxjs/Observable";
import {SkillSet} from "../_models/skill-set.model";

@Injectable()
export class SearchService {

  constructor(private http: AuthHttp) {
  }

  /**
   * @return {Observable<SkillSet>}
   */
  skillSets(query): Observable<SkillSet[]> {
    return this.http.get(AuthService.HOST + `api/search/skillSets/${query}`)
      .map(response => response.json() as SkillSet[]);
  }

}
