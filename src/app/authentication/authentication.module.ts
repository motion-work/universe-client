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
import { RegisterComponent } from './register/register.component';
import {SharedModule} from '../shared/shared.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}


const authenticationRoutes: Routes = [
  {
    path: 'auth', component: AuthenticationComponent,
    children: [
      {path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard]},
      {path: 'register', component: RegisterComponent, canActivate: [NotLoggedInGuard]},
      {path: 'logout', component: LogoutComponent},
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(authenticationRoutes)
  ],
  declarations: [LoginComponent, LogoutComponent, AuthenticationComponent, RegisterComponent],
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
