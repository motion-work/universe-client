import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../authentication/_services/auth.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
  providers: [AuthService]
})
export class GetStartedComponent implements OnInit {

  galaxies = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.joinedGalaxies();
  }

  joinedGalaxies() {
    this.authService.joinedGalaxies().subscribe(data => {
      this.galaxies = data.json();
    });
  }

}
