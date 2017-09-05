import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../../authentication/_services/auth.service';

@Injectable()
export class UserService {

  constructor(private http: AuthHttp) {
  }

  subscribe(id: number) {
    return this.http.post(AuthService.HOST + `api/user/skillSet/${id}/subscribe`, id);
  }
}
