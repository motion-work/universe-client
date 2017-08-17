import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {};
  loading = false;
  returnUrl: string;


  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.authService.register(this.user)
      .subscribe(response => {
        localStorage.setItem('token', response.json().access_token);
        this.router.navigate([this.returnUrl]);
        this.loading = false;
      });
  }

}
