import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {GalaxyService} from './galaxy.service';

@Injectable()
export class GalaxyExistenceGuard implements CanActivateChild {
  found;

  constructor(private router: Router, private galaxyService: GalaxyService) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.galaxyService.exists(route.parent.params['permalink']).subscribe(
      data => this.found = true,
      error => this.found = false);

    return this.found;
  }

}
