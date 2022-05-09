import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthService {
  constructor() {}

  authenticate(username: string, password: string) {
    // console.log('before ' + this.isUserLoggedIn());

    if (username === 'user' && password === 'pass') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    let user = sessionStorage.removeItem('authenticatedUser');
  }
}
