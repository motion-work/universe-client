import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class AuthService {

  static HOST = environment.api_host;
  static GRANT_TYPE = environment.grant_type;
  static CLIENT_ID = environment.client_id;
  static CLIENT_SECRET = environment.client_secret;

  constructor(private http: Http, private authHttp: AuthHttp) {
  }

  /**
   * Login with credentials
   *
   * @param credentials
   */
  login(credentials) {

    const data = {
      grant_type: AuthService.GRANT_TYPE,
      client_id: AuthService.CLIENT_ID,
      client_secret: AuthService.CLIENT_SECRET,
      username: credentials.username,
      password: credentials.password,
    };

    return this.http.post(AuthService.HOST + 'oauth/token', data);
  }

  /**
   * Check whether the access token exists
   * in local storage
   *
   * @return {boolean}
   */
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  /**
   * Get the current logged in user
   *
   * @return {Observable<Response>}
   */
  me() {
    return this.authHttp.get(AuthService.HOST + 'api/me');
  }

  /**
   * Get all galaxies which the user joined
   *
   * @return {Observable<Response>}
   */
  joinedGalaxies() {
    return this.authHttp.get(AuthService.HOST + 'api/me/galaxies');
  }


}
