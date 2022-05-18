import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  // We will avoid adding Http headers in all Http requests. For eg, we will avoid below line. 
  // Thatswhy we will use HttpInterceptor which will be added automatically to all the http requests in our application. 
  // return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/path-variable/${name}`, {headers});
  constructor( private basicAuthenticationService: BasicAuthenticationService) { }

  // We are intercpting incoming requests and adding Header entry, and returns the modified request back
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let username = 'user';
    // let password = 'pass';
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization : basicAuthHeaderString
        }
      })
    }

    return next.handle(request);
  }
}
