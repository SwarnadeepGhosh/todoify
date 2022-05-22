import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  baseUrl = environment.baseUrl;
  constructor(private http : HttpClient) { }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
    // pipe means if this is successful, then do this. i.e, map 
    return this.http.get<AuthenticationBean>(`${this.baseUrl}/basicauth`, {headers}).pipe(map(
      data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, basicAuthHeaderString);
        return data;
      }
    ));
  }

  executeJWTAuthenticationService(username: string, password: string) {

    // pipe means if this is successful, then do this. i.e, map 
    return this.http.post<any>(`${this.baseUrl}/authenticate`, { username, password}).pipe(map(
      data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        return data;
      }
    ));
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN); 
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public message : string){
  }
}
