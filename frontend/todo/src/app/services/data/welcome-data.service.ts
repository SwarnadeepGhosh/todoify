import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

class HelloWorldBean {
  constructor(public message: String) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${this.baseUrl}/hello-bean`);
    // returns> Observable {source: Observable, operator: ƒ} and no call in network tab
    // console.log('executeHelloWorldBean');
  }

  executeHelloWorldBeanServiceWithParameter(name: any) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    // let headers = new HttpHeaders({ Authorization : basicAuthHeaderString })
    return this.http.get<HelloWorldBean>(`${this.baseUrl}/hello/path-variable/${name}`/*,{headers}*/);
  }

  // createBasicAuthenticationHeader() {
  //   let username = 'user';
  //   let password = 'pass';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  /* welcome/user:1 Access to XMLHttpRequest at '${this.baseUrl}/hello/path-variable/user' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.*/
  // Access to XMLHttpRequest at '${this.baseUrl}/hello/path-variable/user' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  // OPTION is being sent before GET request happen and it is failing
  // Configuring CSRF(Cross Site Request Format) with Spring Security
}
