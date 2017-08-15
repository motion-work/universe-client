import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthService} from './_services/auth.service';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NotLoggedInGuard} from './_services/not-logged-in.guard';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}


const authenticationRoutes: Routes = [
  {
    path: 'auth', component: AuthenticationComponent,
    children: [
      {path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard]},
      {path: 'logout', component: LogoutComponent},
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(authenticationRoutes)
  ],
  declarations: [LoginComponent, LogoutComponent, AuthenticationComponent],
  providers: [
    NotLoggedInGuard,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }]
})
export class AuthenticationModule {
}
