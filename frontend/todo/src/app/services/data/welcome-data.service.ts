import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

class HelloWorldBean {
  constructor(public message: String) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-bean');
    // returns> Observable {source: Observable, operator: ƒ} and no call in network tab
    // console.log('executeHelloWorldBean');
  }

  executeHelloWorldBeanServiceWithParameter(name: any) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/path-variable/${name}`);
  }
}
