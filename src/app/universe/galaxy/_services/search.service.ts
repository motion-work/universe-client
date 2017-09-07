import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../../authentication/_services/auth.service';

@Injectable()
export class SearchService {

  constructor(private http: AuthHttp) {
  }

  /**
   * @return {Observable<Response>}
   */
  skillSets(query) {
    return this.http.get(AuthService.HOST + `api/search/skillSets/${query}`);
  }

}
