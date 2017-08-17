import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: any = {};
  loading = false;
  returnUrl: string;


  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authService.login(this.credentials)
      .subscribe(response => {
        localStorage.setItem('token', response.json().access_token);
        this.router.navigate([this.returnUrl]);
        this.loading = false;
      });
  }

}
