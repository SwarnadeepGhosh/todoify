import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';
import { HardcodedAuthService } from '../../services/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthService: HardcodedAuthService,
    private basicAuthService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    // if (this.username === 'user' && this.password === 'pass') {
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
      // console.log("Login successful of User : " + this.username)
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
          // console.log("Login successful of User : " + this.username)
        },
        (error) => { 
          console.log(error);
          this.invalidLogin = true; 
        }
      );
  }
}
