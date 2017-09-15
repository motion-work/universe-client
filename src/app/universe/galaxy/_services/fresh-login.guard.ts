import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {GalaxyService} from '../../../shared/_services/galaxy.service';

@Injectable()
export class FreshLoginGuard implements CanActivate {

  constructor(private galaxyService: GalaxyService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const permalink = this.galaxyService.getCurrentGalaxyPermalink();

    if (permalink) {
      this.router.navigate([`/galaxy/${permalink}/cosmos`]);
    }

    return !this.galaxyService.getCurrentGalaxyPermalink();
  }


}
