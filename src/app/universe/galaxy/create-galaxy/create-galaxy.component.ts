import {Component, OnInit} from '@angular/core';
import {GalaxyService} from '../../../shared/_services/galaxy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-galaxy',
  templateUrl: './create-galaxy.component.html',
  styleUrls: ['./create-galaxy.component.scss']
})
export class CreateGalaxyComponent implements OnInit {

  galaxy: any = {};
  loading = false;

  constructor(private galaxyService: GalaxyService, private router: Router) {
  }

  ngOnInit() {
  }

  create() {
    this.galaxyService.store(this.galaxy)
      .subscribe(data => {
        this.router.navigate([`/invite/send/${data.json().permalink}`]);
      });
  }

}
