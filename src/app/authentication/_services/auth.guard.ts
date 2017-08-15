import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
