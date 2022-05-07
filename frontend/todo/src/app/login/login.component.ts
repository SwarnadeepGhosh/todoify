import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.username === 'user' && this.password === 'pass') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
      // console.log("Login successful of User : " + this.username)
    } else {
      this.invalidLogin = true
    }
  }
}
