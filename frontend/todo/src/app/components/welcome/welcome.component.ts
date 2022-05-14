import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService: string | undefined;

  constructor(
    private aroute: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.aroute.snapshot.params['name'];
  }

  handleSuccessResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    console.log(response.message);
  }
  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }

  getWelcomeMessage() {
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    // console.log('Last line of getWelcomeMessage'); // this will be print before response because observable is asynchronous call
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService
      .executeHelloWorldBeanServiceWithParameter(this.name)
      .subscribe(
        (response) => this.handleSuccessResponse(response),
        (error) => this.handleErrorResponse(error)
      );
  }
}
